var personName = "";

const btn_finish = document.getElementsByTagName("button")[0];
btn_finish.onclick = oneMoreFact;

const btn1 = document.getElementById("btn1");
btn1.onclick = showImage;

function showImage() {
    var element = document.getElementById('img');
    var element1 = document.getElementsByTagName('h3')[0];
    var btn = document.getElementsByClassName('dc')[0];

    if (element.className == "") {
        element.className = "hide";
        element1.className = "hide";
        btn.innerHTML = "Don't click this button, PLEASE!";
      } else {
        element.className = "";
        element1.className = "";
        btn.innerHTML = "Sorry!";
      }
}

function oneMoreFact() {
    document.getElementById("fact").innerHTML = "YOU HAVE TO BE THE STINKIEST TO BECOME LEADER OF THE PACK OF CAT LEMURAS";
}
