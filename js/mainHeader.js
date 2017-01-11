var mainHeader = (function() {
    var test = "teeest"
    var headerTemplate = `<div id="appHeader">
      <p>
        <a id="appIndex" href="/" data-navigo><span id="animateTitle"></span></a>
        <span id="padTitle"></span>
        <span class="padActions">
          <span class="padActionRead">Read</span>
          <span class="padActionWrite">Write</span>
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

    var updateHeaderSingle = function(slug) {
        $('#appHeader #padTitle')
            .attr("data-link", slug)
            .empty().append(slug.replace(/_/g, " "))
    }

    var padAction = function() {
        $(document).on('click', '#appHeader .padActionRead', function() {
            target = $('#padTitle').attr('data-link')
            mainRoute.router.navigate('/events/' + target + '/read');
        })

        $(document).on('click', '#appHeader .padActionWrite', function() {
            target = $('#padTitle').attr('data-link')
            mainRoute.router.navigate('/events/' + target + '/write');
        })

    }

    var headerActiveAction = function(activeTarget){
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
                    blink:true

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
                        blink:true


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
        updateHeaderSingle: updateHeaderSingle,
        headerActiveAction: headerActiveAction,
        initAnimateReadHeader:initAnimateReadHeader,
        initAnimateWriteHeader:initAnimateWriteHeader,
        headerTemplate: headerTemplate,
        initHeader: initHeader,
        padAction: padAction
    };
})();
