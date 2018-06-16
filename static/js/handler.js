window.onload = function () {
    $.getJSON("../example/data.json", function (json) {
        console.log(json);

        console.log(json.data[0].article);

        var selector = new Vue({
            el: "#list-1",
            data:{
                articles: json.data
            }
        })
    });
};