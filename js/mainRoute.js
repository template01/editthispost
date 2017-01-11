var mainRoute = (function() {


    var router = new Navigo(root = null, useHash = false);

    var ranIndex = false

    var setUpRoutes = function() {

        router
            .on({

                'events/:slug/:action': function(params, query) {
                    console.log(query)
                    console.log(params)
                    mainHeader.initHeader()
                    mainHeader.updateHeaderSingle(params.slug)

                    if (params.action === 'read') {
                        mainSingle.initSingle(params.slug)
                        mainHeader.headerActiveAction('.padActionRead')
                        mainHeader.initAnimateReadHeader()
                    }
                    if (params.action === 'write') {
                        // mainSingle.initSingle()
                        // alert('initWrite')
                        mainSingle.initSingleWrite(params.slug)
                        mainHeader.headerActiveAction('.padActionWrite')
                        mainHeader.initAnimateWriteHeader()



                    }

                    mainIndex.gohide()

                    mainHeader.goshow()


                },
                '*': function() {
                    if (!ranIndex) {
                        // alert('hey')
                        mainIndex.initIndex()

                        ranIndex = true
                    }

                    mainIndex.goshow()
                    mainSingle.gohide()
                    mainHeader.gohide()


                    // mainLvlTransitions.goToLvl(1)
                    // mainIndex.fixIndexImageSlider()
                    // mainLvlTransitions.recallLvlScroll(mainLvlTransitions.indexScrollMemory)

                }
            })
            .resolve();


    }

    var initRouter = function() {
        setUpRoutes()

    }

    return {
        setUpRoutes: setUpRoutes,
        initRouter: initRouter,
        router: router
    };
})();
