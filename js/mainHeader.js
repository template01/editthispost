var mainHeader = (function() {
    var test = "teeest"
    var headerTemplate = `<div id="appHeader">
      <p>
        <a id="appIndex" href="/" data-navigo><span id="animateTitle"></span></a>
        <span class="padActions">
          <span id="padTitle" class="padTitle"></span>
          <span class="padActionRead">Read</span>
          <span class="padActionWrite"></span>
          <span class="padActionExpand"><i class="fa fa-expand"></i></span>

          <span class="padActionPrint">Print</span>
        </span>
      </p>
  </div>`


    var initHeader = function(target) {
        if ($("#appHeader").length == 0) {
            $(app).prepend(this.headerTemplate)
            mainRoute.router.updatePageLinks()
            this.padAction()
        }

    }



    var showExpand = function(){
      $('.padActionExpand').show()
    }

    var hideExpand = function(){
      $('.padActionExpand').hide()
    }

    var updateHeaderSingle = function(slug) {
        $('#appHeader #padTitle')
            .attr("data-link", slug)
            .empty().append(decodeURIComponent(slug).replace(/_/g, " "))
        mainHeader.headerCheckLockedInit(slug)

            // console.log(decodeURIComponent(slug))
    }

    var padAction = function() {

        $(document).on('click', '#appHeader .padActionExpand', function() {
          $("html, body").animate({ scrollTop: $(document).height() }, "fast");
        })

        $(document).on('click', '#appHeader .padActionRead', function() {
            target = $('#padTitle').attr('data-link')
            mainRoute.router.navigate('/events/' + target + '/read');
        })

        $(document).on('click', '#appHeader .padActionWrite:not(.locked)', function() {
            target = $('#padTitle').attr('data-link')
            mainRoute.router.navigate('/events/' + target + '/write');
        })

        $(document).on('click', '#appHeader .padActionPrint', function() {
            target = $('#padTitle').attr('data-link')
            if (window.location.pathname.split("/").pop() === 'write') {
                mainRoute.router.navigate('/events/' + target + '/read');
                window.setTimeout(function() {
                    window.print()
                }, 600)
            } else {
                window.print()
            }

        })
    }


    var headerCheckLockedInit = function(target) {
        mainAjaxGetters.getParts('http://editthispost.com:9001/p/' + 'index' + '/export/html')
            .success(function(data) {
                console.log('success')
                mainAjaxGetters.getParts(indexJsonSource)
                    .success(function(data) {
                        console.log(data)
                        console.log('success')
                        indexItems = data.data.text.split('\n').slice(0, -1)
                        mainHeader.headerCheckLocked(indexItems, target)

                    })
                    .error(function() {
                        console.log('error')
                    });

            })
            .error(function() {
                console.log('error')
            });

    }

    var headerCheckLocked = function(arrayParam, include) {
        arrayParam.forEach(function(entry) {

            if (entry.split('|').length === 1) {

                eventHeader = entry

            } else {

                regex = new RegExp('^' + decodeURIComponent(include) + '$');

                if (entry.split('|')[0].trim().replace(/ /g, "_").match(regex)) {

                    var textInfo = entry.split('|')

                    if(textInfo[textInfo.length-1].trim() === 'locked'){

                      $('#appHeader').find('.padActionWrite').addClass('locked')

                      if (window.location.pathname.split("/").pop() === 'write') {
                        mainSingle.initSingleWriteLocked()
                      }
                    }else{
                      $('#appHeader').find('.padActionWrite').removeClass('locked')

                    }

                    // metadata = $('<div class="paddedBottom" id="singlePadReadMetadata"><h1><span class="metaPlace">' + textInfo[2].trim() + ',<br></span><span class="metaDate">' + textInfo[1].trim() + '</span></h1><h1 class="centerText" ><span class="metaTitle">' + textInfo[0].trim() + '</span></h1><h1><span class="metaEvent">' + eventHeader.replace(/_/g, " ").trim() + '</span></h1></div>')

                    // $('#singlePadRead').prepend(metadata)

                }

            }



        });
        // })
    }



    var headerActiveAction = function(activeTarget) {
        $('#appHeader')
            .find('.activeAction').removeClass('activeAction').end()
            .find(activeTarget).addClass('activeAction')
    }


    var initAnimateReadHeader = function() {
        var fin = !1;

        $(function() {



            $('#animateTitle').t('<del class="animatedBorderBlack">edit thi</del><span class="animatedBorderBlack">read</span>this post', {

                speed: 60,
                speed_vary: true,
                mistype: 0,
                blink: true

                // fin: function() {
                //
                //     if (fin == !1) {
                //         fin = !!1; //avoids triggering after 'add' cmd
                //         window.setTimeout(function() {
                //             $('#t').t('add', 'Still here?');
                //         }, 2e4);
                //         window.setInterval(function() {
                //             $('#t').find('.t-caret').toggle();
                //         }, 5e2);
                //     }
                //
                // }

            });



        });
    }


    var initAnimateWriteHeader = function() {
        var fin = !1;

        $(function() {



            $('#animateTitle').t('<del class="animatedBorderBlack">edit this</del><span class="animatedBorderBlack">write</span>this post', {

                speed: 60,
                speed_vary: true,
                mistype: 0,
                blink: true


                // fin: function() {
                //
                //     if (fin == !1) {
                //         fin = !!1; //avoids triggering after 'add' cmd
                //         window.setTimeout(function() {
                //             $('#t').t('add', 'Still here?');
                //         }, 2e4);
                //         window.setInterval(function() {
                //             $('#t').find('.t-caret').toggle();
                //         }, 5e2);
                //     }
                //
                // }

            });



        });
    }


    var goshow = function() {
        $('#appHeader').show()
    }

    var gohide = function() {
        $('#appHeader').hide()
    }


    return {
        test: test,
        gohide: gohide,
        goshow: goshow,
        headerCheckLockedInit: headerCheckLockedInit,
        headerCheckLocked: headerCheckLocked,
        updateHeaderSingle: updateHeaderSingle,
        headerActiveAction: headerActiveAction,
        initAnimateReadHeader: initAnimateReadHeader,
        initAnimateWriteHeader: initAnimateWriteHeader,
        headerTemplate: headerTemplate,
        initHeader: initHeader,
        padAction: padAction,
        showExpand:showExpand,
        hideExpand:hideExpand
    };
})();
