var mainSingle = (function() {
    var test = "teeest"
    var singleTemplate = `<div id="singlePad">
  </div>`


    var initSingle = function(target) {
        // alert('init')
        console.log('init')
        mainSingle.remove()
        $(app).append(this.singleTemplate)

        mainAjaxGetters.getParts('http://editthispost.com:9001/p/' + target + '/export/html')
            .success(function(data) {
                console.log('success')
                $('#singlePad').append('<div id="singlePadRead"></div>')
                mainGetPad.appendContent(data, '#singlePadRead')
                mainSingle.getMetaDataRead(target)
            })
            .error(function() {
                console.log('error')
            });


    }



    var initSingleWrite = function(target) {
        console.log('WRUTEEEEEE')
        mainSingle.remove()
        $(app).append(this.singleTemplate)
        $('#singlePad').append('<iframe src="http://editthispost.com:9001/p/' + target + '"></iframe>')
        this.setSingleWriteHeight()
            // mainGetPad.getPad('http://editthispost.com:9001/p/'+target+'/export/html','#singlePad')
    }


    var setSingleWriteHeight = function() {
        $('#singlePad iframe').css({
            'height': $(window).height() - $('#appHeader').outerHeight() + 'px'
        })
    }

    var getMetaDataRead = function(target) {
        mainAjaxGetters.getParts('http://editthispost.com:9001/p/' + 'index' + '/export/html')
            .success(function(data) {
                console.log('success')
                mainAjaxGetters.getParts(indexJsonSource)
                    .success(function(data) {
                        console.log(data)
                        console.log('success')
                        indexItems = data.data.text.split('\n').slice(0, -1)
                        mainSingle.formatsinglePadReadMetadata(indexItems, target)

                    })
                    .error(function() {
                        console.log('error')
                    });

            })
            .error(function() {
                console.log('error')
            });

    }


    var formatsinglePadReadMetadata = function(arrayParam, include) {
        arrayParam.forEach(function(entry) {

            regex = new RegExp('^' + include + '$');
            if (entry.split('|')[0].trim().match(regex)) {

                var textInfo = entry.split('|')

                metadata = $('<div class="paddedBottom" id="singlePadReadMetadata"><p><span>' + textInfo[0].replace(/_/g, " ").trim() + '</span><span>' + textInfo[1].trim() + '</span><span>' + textInfo[2].trim() + '</span></p></div>')

                $('#singlePadRead').prepend(metadata)

            }

        });
        // })
    }


    var remove = function() {
        $('#singlePad').remove()
    }

    var goshow = function() {
        $('#singlePad').show()
    }

    var gohide = function() {
        $('#singlePad').hide()
    }


    return {
        test: test,
        singleTemplate: singleTemplate,
        initSingle: initSingle,
        initSingleWrite: initSingleWrite,
        setSingleWriteHeight: setSingleWriteHeight,
        formatsinglePadReadMetadata: formatsinglePadReadMetadata,
        getMetaDataRead: getMetaDataRead,
        goshow: goshow,
        gohide: gohide,
        remove: remove
    };
})();
