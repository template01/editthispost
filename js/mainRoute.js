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
                        mainSingle.initSingleWrite(params.slug)
                        mainHeader.headerActiveAction('.padActionWrite')
                        mainHeader.initAnimateWriteHeader()



                    }

                    mainIndex.gohide()
                    mainHeader.goshow()


                },

                'admin/': function() {
                  mainAdmin.init()

                  mainIndex.gohide()
                  mainHeader.gohide()
                  mainSingle.gohide()


                },
                '*': function() {
                    if (!ranIndex) {
                        mainIndex.initIndex()

                        if($('#singlePad').length===0){
                          // mainIndex.playSplash()
                        }

                        ranIndex = true
                    }

                    mainIndex.goshow()
                    mainSingle.gohide()
                    mainHeader.gohide()
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
