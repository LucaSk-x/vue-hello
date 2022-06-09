

const appVue = new Vue ({
    el: '#app',

    data: {
        testoH1: "Benvenuto su Vue!",
        message: "Hello ",
        inputImg: "",
        image: "https://picsum.photos/200/300",
    },

    methods: {
        saluta: function () {
            this.testoH1 = this.message;
        },

        generaImg: function () {
            this.image = this.inputImg;
        },

        delete: function () {
            this.message = "";
            this.inputImg = "";
        },
    }
});