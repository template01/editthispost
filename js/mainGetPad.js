var mainGetPad = function () {

    var appendContent = function appendContent(data, target) {
        padContent = data.split(/(<body>|<\/body>)/ig)[2];
        $(target).append(padContent);
    };

    var appendContentIndexJson = function appendContentIndexJson(data, target) {

        padContent = data;
        $(target).append(padContent);
    };

    return {

        appendContent: appendContent,
        appendContentIndexJson: appendContentIndexJson
    };
}();
