var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("activetab");
            }
            event.currentTarget.classList.add("active");
            document.getElementById(tabname).classList.add("activetab");
        }

        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }

      