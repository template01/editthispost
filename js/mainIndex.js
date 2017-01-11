var mainIndex = (function() {
    var test = "teeest"
    var indexTemplate = `<div id="indexPage">
    <div class="colFull">
      <div id="indexBlurb" class="colHalf padded paddedNotBottom"><p>edit this post gebruikt collaboratieve writing tools om ter plekke hybride publicaties te <b>creëren</b>.</p></div>
    </div>
    <div class="colFull">
      <div id="indexPadList"></div>
    </div>
    <div class="colFull">
      <div id="indexInfo" class="colHalf padded"><p>Tijdens events en workshops kan edit this post worden gebruikt om real time verslag te doen. Iedereen werkt in hetzelfde tekstbestand. Als schrijver, vragensteller, editor – alles mag. De tekst wordt automatisch vormgegeven en kan daarna meteen worden geprint als publicatie.</p></div>
      <div id="indexCredits" class="colHalf padded"><p>edit this post maakt gebruik van de open source applicatie <b>Etherpad</b>.</p><p>Een project van <b>Template</b>. Voor meer informatie, <b>e-mail</b> Lasse en Marlon.</p></div>
    </div>
  </div>`


    var playSplash = function() {
        $(app).append('<div id="indexSplash"><span id="indexSplashInner"><span></div>')


        $('#indexSplashInner').t('<del class="animatedBorderBlack">edit<ins>2</ins></del><del class="animatedBorderBlack">this<ins>2</ins></del><span class="animatedBorderBlack">post</span>', {

            speed: 200,
            // speed_vary: true,
            mistype: 0,
            blink: true


        });

    }

    var initIndex = function() {
        // alert('init')
        console.log('init')
        $(app).append(this.indexTemplate)
        console.log(document.getElementById('indexPadList'))

        mainAjaxGetters.getParts('http://editthispost.com:9001/p/index/export/html')
            .success(function(data) {
                console.log('success')
                mainGetPad.appendContent(data, '#indexPadList')
                mainIndex.formatIndexEvents()
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
            console.log(this)
            $(this).addClass('targetPad').wrap('<div class="targetPadWrapper"></div>').parent().append('<div class="padActions"><span class="padActionRead">Read</span><span class="padActionWrite">Write</span></div>')
        })
    }

    var formatIndexEvents = function() {
        $('#indexPadList li').each(function() {

            var textInfo = $(this).text().split('|')

            $(this).empty()

            savedThis = $(this)

            textInfo.forEach(function(entry) {
                console.log(entry);
                savedThis.append('<span data-link="' + entry.trim() + '">' + entry.replace(/_/g, " ").trim() + '</span>')
            });
        })
    }


    var padAction = function() {
        $(document).on('click', '#indexPadList .padActionRead', function() {
            target = $(this).parents('.targetPadWrapper').find('.targetPad span').first().attr('data-link')
            mainRoute.router.navigate('/events/' + target + '/read');
        })

        $(document).on('click', '#indexPadList .padActionWrite', function() {
            target = $(this).parents('.targetPadWrapper').find('.targetPad span').first().attr('data-link')
            mainRoute.router.navigate('/events/' + target + '/write');
        })

    }



    return {
        test: test,
        indexTemplate: indexTemplate,
        attachReadWriteActionsList: attachReadWriteActionsList,
        formatIndexEvents: formatIndexEvents,
        initIndex: initIndex,
        padAction: padAction,
        goshow: goshow,
        gohide: gohide,
        playSplash: playSplash
    };
})();
