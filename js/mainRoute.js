var mainRoute = function () {

    var router = new Navigo(root = null, useHash = false);

    var ranIndex = false;

    var setUpRoutes = function setUpRoutes() {

        router.on({

            'events/:slug/:action': function eventsSlugAction(params, query) {
                console.log(query);
                console.log(params);
                window.scrollTo(0, 0);
                mainHeader.initHeader();
                mainHeader.updateHeaderSingle(params.slug);

                if (params.action === 'read') {
                    mainHeader.hideExpand();

                    mainSingle.initSingle(params.slug);
                    mainHeader.headerActiveAction('.padActionRead');
                    mainHeader.initAnimateReadHeader();
                }
                if (params.action === 'write') {
                    mainHeader.showExpand();

                    mainSingle.initSingleWrite(params.slug);
                    mainHeader.headerActiveAction('.padActionWrite');
                    mainHeader.initAnimateWriteHeader();
                }

                mainIndex.gohide();
                mainHeader.goshow();
            },

            'admin/': function admin() {
                // mainAdmin.init();
                // mainIndex.gohide();
                // mainHeader.gohide();
                // mainSingle.gohide();
            },
            '*': function _() {
                if (!ranIndex) {
                    mainIndex.initIndex();

                    if ($('#singlePad').length === 0) {
                        // mainIndex.playSplash();
                    }

                    ranIndex = true;
                }
                mainIndex.readMoreIndex();
                mainIndex.readMoreInstructions();
                // mainIndex.toggleEventList();
                mainIndex.toggleArchive();
                mainIndex.langSwab();
                mainIndex.goshow();
                mainSingle.gohide();
                mainHeader.gohide();
            }
        }).resolve();
    };

    var initRouter = function initRouter() {
        setUpRoutes();
    };

    return {
        setUpRoutes: setUpRoutes,
        initRouter: initRouter,
        router: router
    };
}();
