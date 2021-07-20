var $button = $("#button");

function changeDogPhoto () {
    var request = $.ajax({

        url: "https://dog.ceo/api/breeds/image/random",
        method:"GET"
    
    })

    request.done(function (response) {
        console.log(response)
            var img=$("<img/>").attr("src",response.message);
            $("#forImg").append(img)
            img.css({width: "300px",
                    height: "300px"})
    });    
}

$button.on("click", changeDogPhoto)

