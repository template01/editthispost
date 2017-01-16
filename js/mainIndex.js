var mainIndex = (function() {
    var test = "teeest"
    var indexTemplate = `<div id="indexPage">
    <div class="colFull">
      <div id="indexBlurb" class="colHalf padded paddedNotBottom"><p>EDIT THIS POST<br><br><b>edit this post</b> is collaboratief schrijven in real time.</p></div>
    </div>
    <div class="colFull">
      <div id="indexPadList"><p>EVENTS</p></div>
    </div>
    <div class="colFull">
      <div id="indexInfo" class="colHalf padded"><p>INFO<br><br>Tijdens events en workshops kan <b>edit this post</b> worden gebruikt om in real time verslag te doen. Iedereen werkt aan hetzelfde tekstbestand, als schrijver, vragensteller of redacteur. Alles mag. De tekst wordt daarna automatisch vormgegeven en kan meteen geprint worden als publicatie.</p></div>
      <div id="indexCredits" class="colHalf padded"><p>CREDITS<br><br>

      <b>edit this post</b> is een idee van <b><a href="http://www.template01.info/" target="_blank">Template</a></b> in samenwerking met <b><a href="http://domeinvoorkunstkritiek.nl/" target="_blank">Domein voor Kunstkritiek</a></b> en <b><a href="http://networkcultures.org/" target="_blank">Institute of Network Cultures</a></b>. Voor meer informatie, <b><a href="mailto:contact@template01.info?Subject=Hoi%20Temolate" target="_top">stuur een e-mail naar Template</a></b>.
      <br>
      <br>
      <b>edit this post</b> maakt gebruik van de open source applicatie Etherpad.

      </p></div>
    </div>
  </div>`


    var playSplash = function() {

        $(app).find('#indexPage').hide()

        $(app).append('<div id="indexSplash"><span id="indexSplashInner"><span></div>')

        $('#indexSplashInner').t('<del class="noneBack animatedBorderBlack normalTight">edit<ins>1.5</ins></del><del class="noneBack animatedBorderBlack normalTight">this<ins>1.5</ins></del><del class="redBack shiftCaret extraTight">post<ins>1.5</ins></del>', {
            // $('#indexSplashInner').t('<span class="redBack shiftCaret extraTight">post<ins>1.5</ins></span>', {
            // $('#indexSplashInner').t('<span class="noneBack animatedBorderBlack normalTight">post<ins>1.5</ins></span>', {

            speed: 200,
            mistype: 0,
            blink: true,

            typing: function(elem, chars_total, chars_left, char) {
                if (char.match('shiftCaret')) {
                    $('#indexSplashInner').addClass('shiftCaretColor')
                }
            },

            fin: function() {
                $(app).find('#indexPage').show()
                $('#indexSplash').fadeOut(200)
                setTimeout(function() {
                    $('#indexSplash').remove()
                }, 200)
            }


        });

    }

    var animateList = function() {
        $("#indexPadList .targetPadWrapper").each(function(index) {

            var self = this
            setTimeout(function() {
                $(self).addClass('animated expandHeight')

            }, index * 50);


        })
    }

    var initIndex = function() {

        $(app).append(this.indexTemplate)

        mainAjaxGetters.getParts(indexJsonSource)
            .success(function(data) {
                console.log('success')
                indexItems = data.data.text.split('\n').slice(0, -1)
                mainIndex.formatIndexEvents(indexItems)
                mainIndex.attachReadWriteActionsList()
                mainIndex.padAction()
            })
            .error(function() {
                console.log('error')
            });


    }

    var goshow = function() {
        $('#indexPage').show()
    }

    var gohide = function() {
        $('#indexPage').hide()
    }


    var attachReadWriteActionsList = function() {
        $('#indexPadList li').each(function() {



            if ($(this).find('span').length > 1) {

                $(this).addClass('targetPad').parent().append('<div class="padActions"><span class="padActionRead hvr-float"></span><span class="padActionWrite hvr-float"></span></div>')

                if ($(this).attr('data-status') === 'locked') {
                    $(this).parents('.targetPadWrapper').find('.padActionWrite').addClass('locked')
                }

            } else {
                $(this).addClass('targetPad').parent().append('<div class="padActions hiddenElem"><span class="padActionRead hvr-float "></span><span class="padActionWrite hvr-float"></span></div>')

            }

        })
    }

    var formatIndexEvents = function(arrayParam) {
        arrayParam.forEach(function(entry) {
            var textInfo = entry.split('|')
            console.log(textInfo.length)
                // $('#indexPadList').append('<li></li>')
            listItem = $('<div class="targetPadWrapper"><li></li></div>')

            textInfo.forEach(function(entrySingle) {
                if (entrySingle.trim() === 'unlocked') {
                    // savedThis
                    listItem.find('li').attr('data-status', 'unlocked')


                } else if (entrySingle.trim() === 'locked') {
                    // savedThis.attr('data-status', 'locked')
                    listItem.find('li').attr('data-status', 'locked')
                } else {
                    listItem.find('li').append('<span data-link="' + entrySingle.trim().replace(/ /g, "_") + '">' + entrySingle.replace(/_/g, " ").trim() + '</span>')
                }

            });

            if (textInfo.length <= 1) {
                listItem.addClass('capitalizeText')
            }

            $('#indexPadList').append(listItem)

        });
        // })
    }


    // var formatIndexEvents = function() {
    //     $('#indexPadList li').each(function() {
    //
    //         var textInfo = $(this).text().split('|')
    //
    //         $(this).empty()
    //
    //         savedThis = $(this)
    //
    //         textInfo.forEach(function(entry) {
    //             if (entry.trim() === 'unlocked') {
    //                 savedThis.attr('data-status', 'unlocked')
    //
    //             } else if (entry.trim() === 'locked') {
    //                 savedThis.attr('data-status', 'locked')
    //             } else {
    //                 savedThis.append('<span data-link="' + entry.trim() + '">' + entry.replace(/_/g, " ").trim() + '</span>')
    //
    //             }
    //
    //         });
    //     })
    // }



    var padAction = function() {

        $(document).on('click', '#indexPadList .targetPad span', function() {
            target = $(this).parents('.targetPadWrapper').find('.targetPad span').first().attr('data-link')
            mainRoute.router.navigate('/events/' + target + '/read');
        })

        $(document).on('click', '#indexPadList .padActionRead', function() {
            target = $(this).parents('.targetPadWrapper').find('.targetPad span').first().attr('data-link')
            mainRoute.router.navigate('/events/' + target + '/read');
        })

        $(document).on('click', '#indexPadList .padActionWrite', function() {
            if (!$(this).hasClass('locked')) {
                target = $(this).parents('.targetPadWrapper').find('.targetPad span').first().attr('data-link')
                mainRoute.router.navigate('/events/' + target + '/write');
            }
        })

    }





    return {
        test: test,
        indexTemplate: indexTemplate,
        animateList:animateList,
        attachReadWriteActionsList: attachReadWriteActionsList,
        formatIndexEvents: formatIndexEvents,
        initIndex: initIndex,
        padAction: padAction,
        goshow: goshow,
        gohide: gohide,
        playSplash: playSplash
    };
})();
