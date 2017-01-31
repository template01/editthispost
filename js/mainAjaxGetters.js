var mainAjaxGetters = function () {

    var getParts = function getParts(urlParam) {
        return $.ajax({
            url: urlParam
        });
    };

    return {
        // test: test
        getParts: getParts
    };
}();
