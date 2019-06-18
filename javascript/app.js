
// ----- GLOBAL VARIABLES -----

// let q = "";
const limit = 10;
const rated = "pg-13";
const betaKey = "VVJo8d5wojW8jce2wXohejc1JImkCXzf";
// const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q + "&limit=" + limit + "&rating=" + rated + "&api_key=" + betaKey;

const topics = [
    "Pizza",
    "Taco",
    "Hamburger",
    "Lasagna",
    "Cake",
    "Cheese",
    "Ice Cream",
    "Banana",
    "Avocado",
    "Potato"
];



// ----- FUNCTIONS -----

// loop through topics to create buttons
function makeDefaultButtons() {
    for (i = 0; i < topics.length; i++) {
        const topicBtn = $("<button>");
        $("#btns-here").append(topicBtn.attr({
            "data-search": topics[i],
            "class": "btn btn-primary m-2",
            "id": "gif-btn"
        }).text(topics[i]));
    };
};

// build & display button from user input
function makeUserButton() {
    const userInput = $("#user-input").val().trim();
    const userBtn = $("<button>");
    $("#btns-here").append(userBtn.attr({
        "data-search": userInput,
        "class": "btn btn-primary m-2",
        "id": "gif-btn"
    }).text(userInput));
};

// display gifs and ratings buttons
function showGifs(response) {
    $("#gifs-here").empty();
    for (j = 0; j < response.data.length; j++) {
        const gifDiv = $("<div>");
        const gifImg = $("<img>").attr({
            "src": response.data[j].images.fixed_height_still.url,
            "data-still": response.data[j].images.fixed_height_still.url,
            "data-animate": response.data[j].images.fixed_height.url,
            "data-state": "still",
            "class": "gif"
        });
        const ratingP = $("<p>").text("Rating: " + response.data[j].rating);

        $("#gifs-here").append(gifDiv);
        gifDiv.append(gifImg);       
        gifDiv.append(ratingP); 
    };
};



// ----- PROCESS -----
$(document).ready(function() {

    makeDefaultButtons();

    // on click to create button from user input
    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        makeUserButton();
    });

    // on click to GET gifs based on button data- attribute
    $(document).on("click", "#gif-btn", function() {
        let q = $(this).data("search");
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q + "&limit=" + limit + "&rating=" + rated + "&api_key=" + betaKey;

        console.log(q);
        $.ajax ({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(queryURL);
            console.log(response);
            showGifs(response);
        });
    });

    // on click to play/pause gifs
    $(document).on("click", ".gif", function() {
        const state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
});