
                /* Kuvien clikkauksella aukaistavan popup video playerin koodi */
let modal = document.getElementById("myModal");
let Cover = document.getElementById("clickKuva");
let span = document.getElementsByClassName("close")[0];
let Cover2 = document.getElementById("clickKuva2");

Cover.onclick = function() {
modal.style.display = "block";
        }

Cover2.onclick = function() {
        modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
        }
        
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
}

                /* Video player loppu */