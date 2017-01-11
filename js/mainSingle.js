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
                $('#singlePadRead').prepend('<div class="paddedBottom" id="singlePadReadMetadata"></div>')
                mainGetPad.appendContent(data, '#singlePadReadMetadata')
                $('#singlePadReadMetadata').find('li').each(function() {
                    regex = new RegExp('^' + target + '$');
                    if (!$(this).text().split('|')[0].trim().match(regex)) {
                        $(this).remove()
                    } else {
                        var textInfo = $(this).text().split('|')

                        $(this).empty()

                        savedThis = $(this)

                        textInfo.forEach(function(entry) {
                            console.log(entry);
                            savedThis.append('<span data-link="' + entry.trim() + '">' + entry.replace(/_/g, " ").trim() + '</span>')
                        });
                    }
                })
            })
            .error(function() {
                console.log('error')
            });

    }

    // var readPad = function(){
    //   $(document).on('click','#indexPadList li',function () {
    //     console.log(this.innerHTML)
    //     // mainGetPad.getPad('http://editthispost.com:9001/p/'+this.innerHTML+'/export/html','#indexPadList')
    //   })
    // }

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
        getMetaDataRead: getMetaDataRead,
        goshow: goshow,
        gohide: gohide,
        remove: remove
    };
})();
