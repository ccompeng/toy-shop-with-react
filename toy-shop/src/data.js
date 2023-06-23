const Campaign = [
    {
        id: 1,
        pic: require("./assets/teddy-bear-1.jpg"),
        desc: "Online'a özel seçili oyuncaklarda %30 indirim"
    },

    {
        id: 2,
        pic: require("./assets/toy-car-2.jpg"),
        desc: "300₺ ve üzeri alışverişlerde kargo bedava"
    },

    {
        id: 3,
        pic: require("./assets/chess-2.jpg"),
        desc: "Bir sonraki alışverişin için kupon oluştur"
    }
]

const Highlights = [
    {
        id: 1,
        pic: [require("./assets/teddy-bear-1.jpg"), require("./assets/teddy-bear-2.jpg")],
        price: 349.89,
        sale: 30,
    },

    {
        id: 2,
        pic: [require("./assets/toy-car-1.jpg"), require("./assets/toy-car-2.jpg")],
        price: 159.99,
        sale: 30
    },

    {
        id: 3,
        pic: require("./assets/toys.jpg"),
        price: 412.49,
        sale: 40
    },

    {
        id: 4,
        pic: require("./assets/toy-train.jpg"),
        price: 367.89,
    },

    {
        id: 5,
        pic: require("./assets/cube.jpg"),
        price: 88.79
    }
]

const Products = [
    {
        id: 1,
        pic: [require("./assets/teddy-bear-1.jpg"), require("./assets/teddy-bear-2.jpg")],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 412.49,
        sale: 40
    },

    {
        id: 2,
        pic: [require("./assets/toy-car-1.jpg"), require("./assets/toy-car-2.jpg")],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 367.89,
    },

    {
        id: 3,
        pic: require("./assets/toys.jpg"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 189.90,
        sale: 15
    },

    {
        id: 4,
        pic: require("./assets/toy-train.jpg"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: 248.85,
        sale: 10
    },

    {
        id: 5,
        pic: require("./assets/cube.jpg"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing selit",
        price: 119.90,
    },

    {
        id: 6,
        pic: [require("./assets/chess-1.jpg"), require("./assets/chess-2.jpg"), require("./assets/chess-3.jpg")],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 649.90,
        sale: 30
    },

    {
        id: 7,
        pic: require("./assets/two-teddy-bears.jpg"),
        desc: "Lorem ipsum sit amet",
        price: 79.90
    }
]

export { Campaign, Highlights, Products }