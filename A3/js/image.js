// Data for the "HTML Images" Page

var images = [
    {
        caption: "Red Slate Mountain",
        alt: "Mountain",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Red_Slate_Mountain_1.jpg/320px-Red_Slate_Mountain_1.jpg"
    },
    {
        caption: "St. Petersburg River",
        alt: "River",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Saint-petersburg-river-march-24-2016.jpg/320px-Saint-petersburg-river-march-24-2016.jpg"
    },
    {
        caption: "Lybian Desert",
        alt: "Desert",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Libyan_Desert_-_2006.jpg/320px-Libyan_Desert_-_2006.jpg"
    },
    {
        caption: "Azerbaijan Forest",
        alt: "Forest",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Azerbaijan_forest_3.JPG/320px-Azerbaijan_forest_3.JPG"
    },
    {
        caption: "Indonesian Jungle",
        alt: "Jungle",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Indonesian_jungle3%2C_Zoo_Prague.jpg/320px-Indonesian_jungle3%2C_Zoo_Prague.jpg"
    }
];

window.onload = function () {
    var figNum = [
        document.querySelector("#fig1"),
        document.querySelector("#fig2"),
        document.querySelector("#fig3"),
        document.querySelector("#fig4"),
        document.querySelector("#fig5")
    ]
    for (var i = 0; i < images.length; i++) {
        figNum[i].innerHTML += "<img src=" + '"' + images[i].url + '"' + "alt=" + '"' + images[i].alt + '"' + "title=" + '"' + images[i].alt + '"' + ">"
        figNum[i].innerHTML += "<figcaption>" + images[i].caption + "</figcaption>"
    }
}