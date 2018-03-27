
var random = ["basketball", "cars", "hats"];
console.log("hi")

// function renderButtons() {
//     $("#giphy-button").empty();
//     for (var i = 0; i < random.length; i++) {
//         var a = $("<button>");
//         a.addClass("btn btn- searchTerms");

//         a.attr("data-name", random[i]);
//         a.text(random[i]);
//         $("#giphy-button").append(a);
//         console.log(random)
//     }
// }



$("#gifButton").click(function() {
    var rand = random[Math.floor(Math.random() * random.length)];
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=4CDx7xbKWsPIV73Lc0j0ATCZhQPbML25&tag="+rand+"&rating=G";
        console.log(rand)

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {

            var imageURL = response.data.image_original_url;

            var randomImage = $("<img>");

            randomImage.attr("src", imageURL);

            randomImage.attr("alt", "random image");


            $("#images").prepend(randomImage);

                console.log(randomImage)


        });
});



// $("#add-random").on("click", function () {
//     event.preventDefault();
//     var newRandom = $("#random-input").val();
//     random.push(newRandom);

//     renderButtons();
//     console.log(random)
// });



// $("body").on("click", ".btn", function () {
//     var search = $(this).attr("randomGif"); //might be problem 
//     console.log($(this).attr("randomGif"));//might be problem 
// //     //var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=4CDx7xbKWsPIV73Lc0j0ATCZhQPbML25&tag=funny&rating=G";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);

//         for (var j = 0; j < response.data.length; j++) {
//             var gifDiv = $("<div>");
//             var animateUrl = response.data[j].images.original.url;
//             var stillUrl = response.data[j].images.original_still.url;
//             var gifRating = response.data[j].rating;
//             console.log(stillUrl);
        
//             var gifTitle = response.data[j].title; 
//             var gifHolder = $("<img>");
//             gifHolder.attr("src", stillUrl);
//             gifHolder.attr("alt", "giphy");
//             gifHolder.attr("data-animate", animateUrl);
//             gifHolder.attr("data-still", stillUrl);
//             gifHolder.attr("data-state", "still");


//             gifDiv.prepend(gifHolder);
//             gifDiv.prepend("<div> Rating: " + gifRating + "</div>");
//             $("#gifs-go-here").prepend(gifDiv);
//         }

//         $("body").on("click", "img", function () {
//             console.log($(this).attr("data-name"));
//             var state = $(this).attr("data-state");
//             if (state === 'still') {
//                 $(this).attr('src', $(this).attr("data-animate"));
//                 $(this).attr("data-state", "animate");

//             }
//             then();
//         })

//     })

// });
