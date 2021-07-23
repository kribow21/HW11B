let revealBtn = document.getElementById('btnOne');

function clickToSee(){
axios.request({
    method : "GET",
    url : "https://official-joke-api.appspot.com/jokes/random"
    }).then(useItem).catch(oopsFail)
}
function useItem(response){
console.log(response);
document.getElementById('joke').innerHTML = response.data.setup;
document.getElementById('answer').innerHTML = response.data.punchline;

}
function oopsFail(error){
console.error("Oh no something went wrong");
console.log(error);
}


revealBtn.addEventListener("click", clickToSee);

