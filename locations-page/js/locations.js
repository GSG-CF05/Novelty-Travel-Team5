let firstPhotoDOMElement = document.getElementById("first_photo");
let secondPhotoDOMElement = document.getElementById("second_photo");
let thirdPhotoDOMElement = document.getElementById("third_photo");
let desktopPhotoDOMElement = document.getElementById("desktop_photo");

let city=localStorage.getItem("country");


if (city ==null) city='berlin';

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Host': 'google-maps-search1.p.rapidapi.com',
		'X-RapidAPI-Key': '85e89de2f2msh5a60832ef2ccfccp122739jsn8daf2053de6d'
	},
	body: `{"limit":3,"language":"en","region":"us","queries":"${city}","type":"photo","safeSearch":"false"}`
};

fetch('https://google-maps-search1.p.rapidapi.com/search', options)
	.then(response => response.json())
	.then(data =>{
        console.log(data);
        let photo = data.response.places[Math.floor(Math.random() * 20)];
        console.log(photo.photos_sample[0].photo_url);
        firstPhotoDOMElement.src = photo.photos_sample[0].photo_url;
        let photo2=data.response.places[Math.floor(Math.random() * 20)];
        secondPhotoDOMElement.src = photo2.photos_sample[0].photo_url;
        let photo3=data.response.places[Math.floor(Math.random() * 20)];
        thirdPhotoDOMElement.src = photo3.photos_sample[0].photo_url;

   
    })
	.catch(err => console.error(err));


    


// fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=museum+Paris&key=AIzaSyBDfhVzgmXKi883yaT6NP6sW4ivGeCCs_0`,{
//     mode: 'no-cors'
// })
// .then(response => response.json())
// 	.then(response =>{
//         photo=response.results[Math.floor(Math.random() * 20)].photos[0].photo_reference;
//         photo2=response.results[Math.floor(Math.random() * 20)].photos[0].photo_reference;
//         photo3=response.results[ Math.floor(Math.random() * 20)].photos[0].photo_reference;
//         if (screen.width>=1023)
//         {
//         photo4=response.results[Math.floor(Math.random() * 20)].photos[0].photo_reference;
//         photo5=response.results[Math.floor(Math.random() * 20)].photos[0].photo_reference;
//         photo6=response.results[ Math.floor(Math.random() * 20)].photos[0].photo_reference;
//         photo7=response.results[ Math.floor(Math.random() * 20)].photos[0].photo_reference;
//         let photoDom=document.createElement("img");
//         photoDom.src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo4}&key=AIzaSyBDfhVzgmXKi883yaT6NP6sW4ivGeCCs_0`;
//         desktopPhotoDOMElement.appendChild(photoDom);
//         let photoDom2=document.createElement("img");
//         photoDom2.src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo5}&key=AIzaSyBDfhVzgmXKi883yaT6NP6sW4ivGeCCs_0`;
//         desktopPhotoDOMElement.appendChild(photoDom2);
//         let photoDom3=document.createElement("img");
//         photoDom3.src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo6}&key=AIzaSyBDfhVzgmXKi883yaT6NP6sW4ivGeCCs_0`;
//         desktopPhotoDOMElement.appendChild(photoDom3);
//         let photoDom4=document.createElement("img");
//         photoDom4.src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo7}&key=AIzaSyBDfhVzgmXKi883yaT6NP6sW4ivGeCCs_0`;
//         desktopPhotoDOMElement.appendChild(photoDom4);
//         }
//         else{
//             firstPhotoDOMElement.src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=AIzaSyBDfhVzgmXKi883yaT6NP6sW4ivGeCCs_0`;
//             secondPhotoDOMElement.src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo2}&key=AIzaSyBDfhVzgmXKi883yaT6NP6sW4ivGeCCs_0`;
//             thirdPhotoDOMElement.src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo3}&key=AIzaSyBDfhVzgmXKi883yaT6NP6sW4ivGeCCs_0`;
           
//         }
               
//     })
// 	.catch(err => console.error(err));


//     //first photo
    

//     // firstPhotoDOMElement.src=response.results[0].photos[0].photo_reference;

//     // console.log(response.results[0].photos[0].photo_reference);