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

/* function ChangeImage(ImageName){
    let Image = document.querySelector("#Kuva");
    Image.setAttribute("src", ImageName);
} */

/* eetu.addEventListener("click", addPicture);
 */
/* let EetuImg = "images\Eetu.jpg";
let TuomoImg = "images\Tuomo.jpg";
let JuhoImg = "images\Juho.jpg";
let NikoImg = "images\Niko.jpg";
let SamuliImg = "images\Samuli.jpg";
 */

let pictureDiv = document.querySelector("#kuva");
eetu.addEventListener("click", () => {
    pictureDiv.style.backgroundImage = `url("/images/Eetu.jpg")`;
});
Juho.addEventListener("click", () => {
    pictureDiv.style.backgroundImage = `url("/images/Juho.jpg")`;
});
Tuomo.addEventListener("click", () => {
    pictureDiv.style.backgroundImage = `url("/images/Tuomo.jpg")`;
});
Niko.addEventListener("click", () => {
    pictureDiv.style.backgroundImage = `url("/images/Niko.jpg")`;
});
Samuli.addEventListener("click", () => {
    pictureDiv.style.backgroundImage = `url("/images/Samuli.jpg")`;
});


