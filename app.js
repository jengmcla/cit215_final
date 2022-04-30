let app = new Vue({
    el: "#store",
    data: {
        isHidden: true,
        count: 0,
        item: "",
        instruments: [
            {
                name: "Stratocaster Olympic White",
                type: "Guitar",
                price: "2000",
                brand: "Fender",
                img: "images/Stratocaster_Olympic-White.jpg",
                info: false
            },
            {
                name: "Mustang GT",
                type: "Amplifier",
                price: "1000",
                brand: "Fender",
                img: "images/Mustang_GT-Amplifier.jpg",
                info: false
            },
            {
                name: "Clavinova CVP-303",
                type: "Piano",
                price: "3000",
                brand: "Yamaha",
                img: "images/Clavinova_CVP-303.jpg",
                info: false
            },
            {
                name: "Arius YDP-143",
                type: "Piano",
                price: "3000",
                brand: "Yamaha",
                img: "images/Arius_YDP-143.jpg",
                info: false
            },
            {
                name: "EBG 808",
                type: "Guitar",
                price: "1200",
                brand: "Maton",
                img: "images/EBG808.jpg",
                info: false
            },
            {
                name: "EM100C Messiah",
                type: "Guitar",
                price: "1200",
                brand: "Maton",
                img: "images/EM100C_Messiah.jpg",
                info: false
            }
        ],
        carts: [
        ],
        form: {
            name: "",
            type: "",
            price: "",
            brand: "",
            img: "",
            info: false
        },
    },
    methods: {
        submit: function () {
            this.instruments.push(this.form);
            this.form = {
                name: "",
                type: "",
                price: "",
                brand: "",
                info: false
                // clears it all
            }
        },
        info: function (index) {
            this.instruments[index].info = !this.instruments[index].info;
            console.log(this.instruments[index].info)
        },
        addCart: function(index) {
            this.instruments[index].info = !this.instruments[index].info;
            const item = this.instruments.splice(index, 1);
            this.carts.push(item[0]);
        },
        emptyCart: function (index) {
            this.instruments = this.instruments.concat(this.carts);
            this.carts = [];
        }
    },
});