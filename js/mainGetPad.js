var mainGetPad = (function() {

    var appendContent = function(data,target) {
        padContent = data.split(/(<body>|<\/body>)/ig)[2]
        $(target).append(padContent)
    }


    return {

        appendContent: appendContent,
    };
})();
