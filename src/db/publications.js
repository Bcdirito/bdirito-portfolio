let images = require.context("../media/photos/publications", true)

const publicationData = [
    {
        name: "Kindling the Fire",
        type: "publication",
        image: "kindling_photo.jpg",
        card: "kindling_card.jpeg",
        blurb: "Staying Inspired during the Job Search Marathon",
        link: "https://medium.com/@bdirito91/kindling-the-fire-24b80e09907e"
    },
    {
        name: "Call Me 'The Exterminator'",
        type: "publication",
        image: "exterminator_photo.jpg",
        card: "exterminator_card.jpg",
        blurb: "Becoming the Champion Debugger"
    }
]

module.exports = publicationData