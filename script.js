const sec = document.getElementsByName("section");
const modal = document.querySelector(".modal");
const btn1 = document.querySelector(".btn1");
const modalCon = document.querySelector(".modal-con");
const btnx = document.querySelector(".x-button");
const btn2 = document.querySelector(".btn2")
 
btn1.onclick = function() {
    modalCon.style.display = "block";
  }

  btnx.onclick = function() {
    modalCon.style.display = "none";
  }
  btn2.onclick = function() {
    modalCon.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modalCon.style.display = "none";
    }
  }
