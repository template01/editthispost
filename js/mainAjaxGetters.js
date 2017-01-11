var mainAjaxGetters = (function() {


    var getParts = function(urlParam) {
        return $.ajax({
            url: urlParam
        });
    }

    return {
        // test: test
        getParts: getParts
    };
})();
