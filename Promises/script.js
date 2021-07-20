const $button = $("#buttonForNewJoke");
const $p = $("#paragrafForNewJoke");
const $divForImg = $(".forImg");
const requestUrl = "https://api.chucknorris.io/jokes/random?";
console.log($button)
$(document).ready(fetchData);

$button.on("click", fetchData);

function fetchData () {
fetch(requestUrl).then(function (response) {
    return response.json();
}).then(function (data) {
    $p.html(data.value);
    $divForImg.html(`<img src=${data.icon_url}>`)
  
})
}
