// Main JS

var openOrderButtons = document.getElementsByClassName("open-order");
var sidebar = document.getElementById("sidebar");
var bodydom = document.body;

function openFormSidebar (){

  for (var i = 0; i < openOrderButtons.length; i++) {
    openOrderButtons[i].onclick = function(){

      sidebar.classList.add("open");
      bodydom.classList.add("noscroll");
      // console.log("Working");
      console.dir(bodydom);
      sidebar.onclick = function(e){
        if (e.target.classList.contains("open")) {
          e.target.classList.remove("open");
          bodydom.classList.remove("noscroll");
        }
      }
    }
  }



}

function closeFormSidebar (){
  if (bodydom.classList.contains("noscroll")) {
    console.log("yes");
  }
}

closeFormSidebar();
openFormSidebar();
