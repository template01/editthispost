var mainAdmin = function () {

    var init = function init() {
        $(app).append('<iframe id="adminIframe0" src="http://editthispost.com:9002/p/index"></iframe><iframe id="adminIframe1" src="http://editthispost.com:9001"></iframe>');
    };

    return {
        init: init
    };
}();
