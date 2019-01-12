var $button = document.getElementsByClassName("button_img");
var $close = document.getElementsByClassName("close");
var $next = document.getElementsByClassName("next");
var $back = document.getElementsByClassName("back");

function handleButtonClick (event){
    var idModal = this.getAttribute("data-modal");
    var $modal = document.getElementById(idModal);
    var idModal1 = this.getAttribute("data-modal1");
    var $modal1 = document.getElementById(idModal1);
    var idModal2 = this.getAttribute("data-modal2");
    var $modal2 = document.getElementById(idModal2);
    $modal.style.display = "block";
    $modal1.style.display = "none";
    $modal2.style.display = "none";
}

function handleButtonClose (event){
    var idModal = this.getAttribute("data-modal");
    var $modal = document.getElementById(idModal);
    $modal.style.display = "none";
}

function handleButtonNext (event){
    var idModal = this.getAttribute("data-modal");
    var $modal = document.getElementById(idModal);
    var idModal1 = this.getAttribute("data-modal1");
    var $modal1 = document.getElementById(idModal1);
    $modal.style.display = "block";
    $modal1.style.display = "none";
}

function handleButtonBack (event){
    var idModal = this.getAttribute("data-modal");
    var $modal = document.getElementById(idModal);
    var idModal1 = this.getAttribute("data-modal1");
    var $modal1 = document.getElementById(idModal1);
    $modal.style.display = "block";
    $modal1.style.display = "none";
}

for (var i = 0; i < $button.length; i++) {
    $button[i].addEventListener("click", handleButtonClick);
    $close[i].addEventListener("click", handleButtonClose);
    $next[i].addEventListener("click", handleButtonNext);
    $back[i].addEventListener("click", handleButtonBack);
}

