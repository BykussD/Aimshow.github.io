
// function guessNumberGame(){
//  let kullaniciSayisi=prompt("sayı tahmin et")
//  let oyunSayisi= Math.floor(Math.random()*10)
// let oyunDeneme= []
// for(let i=0; i<4; i++){
// if(kullaniciSayisi==oyunSayisi){
//     console.log("aferim la")
//     return
// }
// else{
//     oyunDeneme.push(kullaniciSayisi)
//     console.log("bi daa dene")
//     kullaniciSayisi=prompt("sayı tahmin et")
// }
// }
// }
// guessNumberGame()

// sayı tahmini oyunu bitti,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,



let started = false;
let colors = ["red", "yellow", "blue", "green", "pink", "purple"];
let point = 0;






  

$(document).keypress(function (event) {
    let resim=[]
    let randomNumberpict = Math.floor(Math.random() * 13) + 1
    let resimnumber = "resim" + randomNumberpict

    if (event.which === 97) {
        document.querySelector(".gameField").classList.add(resimnumber)
        resim.push(resimnumber)
    }
    else if (event.which === 119) {
        document.querySelector(".gameField").classList.remove(resim[0])
}

})



$(document).keypress(function (event) {
    
    if (started == false && event.which === 97) {
        started = !started
        console.log("başladı")
        randomDummyColor()

    }
    else if (started == true && event.which === 119) {
        started = false
        point = -1
        document.querySelector(".gameField>h1").innerHTML = "oyun durdu";
        poz = null


    }

    function randomDummyColor() {
        if (started == true) {
            document.querySelector(".gameField>h1").innerHTML = "puanın " + point;
            let randomNumberColor = Math.floor(Math.random() * 6)
            let divColor = colors[randomNumberColor]
            randomDummyPoz(divColor)
        }
        function randomDummyPoz(divColor) {
            let randomNumber = Math.floor(Math.random() * 9) + 1
            let poz = document.getElementById(randomNumber)
            let finish = poz.classList.add(divColor)


            let clicked = poz.addEventListener("click", removeDummy)
            function removeDummy() {
                poz.classList.remove(divColor)
                poz = null;
                point += 1
                randomDummyColor()
            }
        }

    }

 

})


