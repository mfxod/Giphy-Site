
// ----- GLOBAL VARIABLES -----

const q = $("button").data("search");
const limit = 10;
const rated = "pg-13";
const betaKey = "VVJo8d5wojW8jce2wXohejc1JImkCXzf";
const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q + "&limit=" + limit + "&rating=" + rated + "&api_key=" + betaKey;

const topics = [
    "Pizza",
    "Taco",
    "Hamburger",
    "Hot Dog",
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
        $("#btns-here").append(topicBtn.attr({"data-search": topics[i], "class": "btn btn-primary m-2"}).text(topics[i]));
    };
};

// build & display button from user input
function makeUserButton() {
    const userInput = $("#user-input").val().trim();
    const userBtn = $("<button>");
    $("#btns-here").append(userBtn.attr({"data-search": userInput, "class": "btn btn-primary m-2"}).text(userInput));
};

// display gifs and ratings buttons
// function showGifs() {
//     for (j = 0; j < response.data.length; j++) {
//         const gifDiv = $("<div>");
//         const ratingP = $("<p>").text("Rating: " + ...);
//         const gifImg = $("<img>").attr("src", ...);

//         $("#gifs-here").append(gifDiv);
//         gifDiv.append(ratingP);
//         gifDiv.append(gifImg);        
//     };
// };



// ----- PROCESS -----
$(document).ready(function() {

    makeDefaultButtons();

    // on click to create button from user input
    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        makeUserButton();
    });

    // on click to GET gifs based on button data- attribute
    // $(document).on("click", "#...", function() {

    //     $.ajax ({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function(response) {
    //         console.log(response);
    //         showGifs();
    //     });
    // });
});
