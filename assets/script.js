
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}

]

banniere=document.getElementById("banner-img");
g=document.getElementById("fleche-gauche");
d=document.getElementById("fleche-droite");
commentaire=document.getElementById("txt");
i=0;
point=document.getElementsByClassName("dot");
	

g.onclick=function(){
	point[i].classList.remove("dot_selected");
	i=i-1;
	if	(i<0) i=3;
	console.log(i);
	banniere.src = "./assets/images/slideshow/"+slides[i].image;
	console.log(commentaire.innerHTML);
	commentaire.innerHTML = slides[i].tagLine; 
	point[i].classList.add("dot_selected");




}

d.onclick=function(){
	point[i].classList.remove("dot_selected");
	i=i+1;
	if	(i>3) i=0;
	console.log(i);
	banniere.src = "./assets/images/slideshow/"+slides[i].image;
	console.log(commentaire.innerHTML);
	commentaire.innerHTML = slides[i].tagLine; 
	point[i].classList.add("dot_selected");
	

}




