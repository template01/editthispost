var mainSingle = function() {
    var test = "teeest";
    var singleTemplate = '<div id="singlePad">\n  </div>';

    var initSingle = function initSingle(target) {
        // alert('init')
        console.log('init');
        mainSingle.remove();
        $(app).append(this.singleTemplate);

        mainAjaxGetters.getParts('http://editthispost.com:9001/p/' + target + '/export/html').success(function(data) {
            console.log('success');
            $('#singlePad').append('<div id="singlePadRead"><div id="singlePadReadInner"></div></div>');
            mainGetPad.appendContent(data, '#singlePadReadInner');
            mainSingle.getMetaDataRead(target);
            // mainSingle.appendAboutText()

        }).error(function() {
            console.log('error');
        });
    };

    var initSingleWriteLocked = function initSingleWriteLocked() {
        $('#singlePad').find('iframe').remove().end().append('<div id="singlePadRead"><h1>Sorry. No write options.  </h1></div>');
    };

    var initSingleWrite = function initSingleWrite(target) {
        mainSingle.remove();
        $(app).append(this.singleTemplate);
        $('#singlePad').append('<iframe src="http://editthispost.com:9001/p/' + target + '"></iframe>');
        // this.setSingleWriteHeight()
        // mainGetPad.getPad('http://editthispost.com:9001/p/'+target+'/export/html','#singlePad')
    };

    var setSingleWriteHeight = function setSingleWriteHeight() {
        $('#singlePad iframe').css({
            'height': $(window).height() - $('#appHeader').outerHeight() + $(window).width() / 100 / 4 + 'px'
        });
    };

    var getMetaDataRead = function getMetaDataRead(target) {
        mainAjaxGetters.getParts('http://editthispost.com:9001/p/' + 'index' + '/export/html').success(function(data) {
            mainAjaxGetters.getParts(indexJsonSource).success(function(data) {
                indexItems = data.data.text.split('\n').slice(0, -1);
                mainSingle.formatsinglePadReadMetadata(indexItems, target);
            }).error(function() {
                console.log('error');
            });
        }).error(function() {
            console.log('error');
        });
    };

    var appendAboutText = function appendAboutText(){
      $('#singlePadReadInner').append('<p id="appendAboutText"><br><br><i>Het reizende dansfestival Moving Futures presenteert het werk van nieuwe en doorbrekende choreografen. Voorstellingen, kijkjes in de keuken van het maakproces, installaties en films. Het publiek spreekt en schrijft erover met elkaar via Edit this Post.</i></p>')
    };

    var formatsinglePadReadMetadata = function formatsinglePadReadMetadata(arrayParam, include) {
        arrayParam.forEach(function(entry) {

            if (entry.split('|').length === 1) {

                eventHeader = entry;

            } else {

                regex = new RegExp('^' + decodeURIComponent(include).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + '$');

                if (entry.split('|')[0].trim().replace(/ /g, "_").match(regex)) {

                    var textInfo = entry.split('|');

                    var timeStamp = new Date();
                    month = timeStamp.getMonth() + 1

                    var eventUrl = ''


                    if(textInfo[3]){
                      if (new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(textInfo[3].trim())) {
                        eventUrls = []
                        textInfo[3].trim().split(' ').forEach(function(link) {
                          eventUrls.push(link)
                        })
                        if (eventUrls.length == 1) {
                          eventUrl = ' <a target="_blank" href="' + eventUrls[0] + '">Event Link</a>'
                        } else {
                          eventUrl = 'Event links:'
                          eventUrls.forEach(function(link, index) {
                            eventUrl = eventUrl + ' <a target="_blank" href="' + link + '">' + (parseInt(index) + 1) + '</a>'
                          })
                        }
                      }
                    }else{
                      eventUrl = ''
                    }

                    $('#singlePadReadInner').prepend('<span class="metaUrl">' + eventUrl + '</span><br><br>');


                    metadata = $('<div class="paddedBottom" id="singlePadReadMetadata"><div id="timeStampOuter"><span id="timeStamp">TIMESTAMP</br>' + timeStamp.getHours() + ':' + timeStamp.getMinutes() + ':' + timeStamp.getSeconds() + ' / ' + timeStamp.getDate() + '.' + month + '.' + timeStamp.getFullYear().toString().slice(2) + '</span></div><h1><span class="metaPlace">' + textInfo[2].trim() + ',<br></span><span class="metaDate">' + textInfo[1].trim() + '</span></h1><h1 class="centerText" ><span class="metaTitle">' + textInfo[0].trim() + '</span></h1><h1><span class="metaEvent">' + eventHeader.replace(/_/g, " ").trim() + '</span></h1></div>');

                    $('#singlePadRead').prepend(metadata);
                }
            }
        });
        // })
    };

    var remove = function remove() {
        $('#singlePad').remove();
    };

    var goshow = function goshow() {
        $('#singlePad').show();
    };

    var gohide = function gohide() {
        $('#singlePad').hide();
    };

    return {
        test: test,
        appendAboutText:appendAboutText,
        singleTemplate: singleTemplate,
        initSingle: initSingle,
        initSingleWrite: initSingleWrite,
        initSingleWriteLocked: initSingleWriteLocked,
        setSingleWriteHeight: setSingleWriteHeight,
        formatsinglePadReadMetadata: formatsinglePadReadMetadata,
        getMetaDataRead: getMetaDataRead,
        goshow: goshow,
        gohide: gohide,
        remove: remove
    };
}();
