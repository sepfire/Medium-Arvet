/* let Eetu = document.querySelector("eetu");
let Tuomo = document.querySelector("Tuomo");
let Niko = document.querySelector("Niko");
let Samuli = document.querySelector("Samuli");
let Juho = document.querySelector("Juho");

/* elem.setAttribute("src", "C:\Koulu Tehtäviä\Medium Arvet\images\Eetu.jpg");
 */

/* Eetu.addEventListener("click", Clicked);
Tuomo.addEventListener("click", Clicked);
Niko.addEventListener("click", Clicked);
Samuli.addEventListener("click", Clicked);
Accordion.addEventListener("click", Clicked);

function Clicked(){
    let ImageSlot = document.getElementById("ImageDiv");
    ImageSlot.inner = "saojdoksajfalksjlkfa";
} */

function ChangeImage(ImageName){
    let Image = document.querySelector("#Kuva");
    Image.setAttribute("src", ImageName);
}

