window.onload = function () {
    $.getJSON("../example/data.json", function (json) {
        console.log(json);

        console.log(json.root[0].article);

        var selector = new Vue({
            el: "#list-1",
            data:{
                articles: json.root
            }
        });

        Vue.component('v-select', VueSelect.VueSelect);

        new Vue({
            el: "#list-2",
            data:{
                articles: json.root
            }
        });

    });
};