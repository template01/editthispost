var mainHeader = function () {
    var test = "teeest";
    var headerTemplate = "<div class='extraPaddingTop' id=\"appHeader\">\n      <p>\n        <a id=\"appIndex\" href=\"/\" data-navigo><span id=\"animateTitle\"></span></a>\n        <span class=\"padActions\">\n          <span id=\"padTitle\" class=\"padTitle\"></span>\n          <span class=\"padActionRead\">Read</span>\n          <span class=\"padActionWrite\"></span>\n          <span class=\"padActionExpand\"><i class=\"fa fa-expand\"></i></span>\n\n          <span class=\"padActionPrint\">Print</span>\n        </span>\n      </p>\n  </div>";

    var initHeader = function initHeader(target) {
        if ($("#appHeader").length == 0) {
            $(app).prepend(this.headerTemplate);
            mainRoute.router.updatePageLinks();
            this.padAction();
        }
    };

    var showExpand = function showExpand() {
        $('.padActionExpand').show();
    };

    var hideExpand = function hideExpand() {
        $('.padActionExpand').hide();
    };

    var updateHeaderSingle = function updateHeaderSingle(slug) {
        $('#appHeader #padTitle').attr("data-link", slug).empty().append(decodeURIComponent(slug).replace(/_/g, " "));
        mainHeader.headerCheckLockedInit(slug);

        // console.log(decodeURIComponent(slug))
    };

    var padAction = function padAction() {

        $(document).on('click', '#appHeader .padActionExpand', function () {
            $("html, body").animate({ scrollTop: $(document).height() }, "fast");
        });

        $(document).on('click', '#appHeader .padActionRead', function () {
            target = $('#padTitle').attr('data-link');
            mainRoute.router.navigate('/events/' + target + '/read');
        });

        $(document).on('click', '#appHeader .padActionWrite:not(.locked)', function () {
            target = $('#padTitle').attr('data-link');
            mainRoute.router.navigate('/events/' + target + '/write');
        });

        $(document).on('click', '#appHeader .padActionPrint', function () {
            target = $('#padTitle').attr('data-link');
            if (window.location.pathname.split("/").pop() === 'write') {
                mainRoute.router.navigate('/events/' + target + '/read');
                window.setTimeout(function () {
                    window.print();
                }, 600);
            } else {
                window.print();
            }
        });
    };

    var headerCheckLockedInit = function headerCheckLockedInit(target) {
        mainAjaxGetters.getParts('http://editthispost.com:9001/p/' + 'index' + '/export/html').success(function (data) {
            console.log('success');
            mainAjaxGetters.getParts(indexJsonSource).success(function (data) {
                console.log(data);
                console.log('success');
                indexItems = data.data.text.split('\n').slice(0, -1);
                mainHeader.headerCheckLocked(indexItems, target);
            }).error(function () {
                console.log('error');
            });
        }).error(function () {
            console.log('error');
        });
    };

    var headerCheckLocked = function headerCheckLocked(arrayParam, include) {
        arrayParam.forEach(function (entry) {

            if (entry.split('|').length === 1) {

                eventHeader = entry;
            } else {

                regex = new RegExp('^' + decodeURIComponent(include) + '$');

                if (entry.split('|')[0].trim().replace(/ /g, "_").match(regex)) {

                    var textInfo = entry.split('|');

                    if (textInfo[textInfo.length - 1].trim() === 'locked') {

                        $('#appHeader').find('.padActionWrite').addClass('locked');

                        if (window.location.pathname.split("/").pop() === 'write') {
                            mainSingle.initSingleWriteLocked();
                        }
                    } else {
                        $('#appHeader').find('.padActionWrite').removeClass('locked');
                    }

                    // metadata = $('<div class="paddedBottom" id="singlePadReadMetadata"><h1><span class="metaPlace">' + textInfo[2].trim() + ',<br></span><span class="metaDate">' + textInfo[1].trim() + '</span></h1><h1 class="centerText" ><span class="metaTitle">' + textInfo[0].trim() + '</span></h1><h1><span class="metaEvent">' + eventHeader.replace(/_/g, " ").trim() + '</span></h1></div>')

                    // $('#singlePadRead').prepend(metadata)
                }
            }
        });
        // })
    };

    var headerActiveAction = function headerActiveAction(activeTarget) {
        $('#appHeader').find('.activeAction').removeClass('activeAction').end().find(activeTarget).addClass('activeAction');
    };

    var initAnimateReadHeader = function initAnimateReadHeader() {
        var fin = !1;

        $(function () {

            $('#animateTitle').t('<del class="animatedBorderBlack">edit thi</del><span class="animatedBorderBlack">read</span>this post', {

                speed: 60,
                speed_vary: true,
                mistype: 0,
                blink: true


            });
        });
    };

    var initAnimateWriteHeader = function initAnimateWriteHeader() {
        var fin = !1;

        $(function () {

            $('#animateTitle').t('<del class="animatedBorderBlack">edit this</del><span class="animatedBorderBlack">write</span>this post', {

                speed: 60,
                speed_vary: true,
                mistype: 0,
                blink: true


            });
        });
    };

    var goshow = function goshow() {
        $('#appHeader').show();
    };

    var gohide = function gohide() {
        $('#appHeader').hide();
    };

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
        showExpand: showExpand,
        hideExpand: hideExpand
    };
}();
