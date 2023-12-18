const countriesElem=document.querySelector(".countries");
 const dropdown=document.querySelector(".dropdown")
 const dropElem=document.querySelector(".drop")
const region=document.querySelectorAll(".region")
const search=document.querySelector(".search")
 async function getCountry(){
    const url= await fetch("https://restcountries.com/v2/all");
    const res=await url.json();
    console.log(res);
    res.forEach(element => {
        showcountry(element)
    });

}
getCountry()
function showcountry(data) {
const country=document.createElement("div")
country.classList.add("country")
country.innerHTML=`<div class="countryimg">
<img src="${data.flag}" alt="">
</div>
<div class="countryinfo">
<h5 class="countryname">${data.name}</h5>
<p><strong>Polulation:</strong>${data.population}</p>
<p class="regionName"><strong>Region:</strong>${data.region}</p>
<p><strong>Capital:</strong>${data.capital}</p>
</div>`
countriesElem.appendChild(country)
country.addEventListener("click",()=>{
    showcountryinfo();
})
}
dropdown.addEventListener("click",()=>{
dropElem.classList.toggle("showdropdown")
console.log("hello");
})

const regionName=document.getElementsByClassName("regionName")
const countryname=document.getElementsByClassName("countryname")
region.forEach(element=>{
    element.addEventListener("click",()=>{
        console.log(element);
        Array.from(regionName).forEach(elem=>{
            console.log(elem.innerText);
            if(elem.innerText.includes(element.innerText)||element.innerText=="All"){
                elem.parentElement.parentElement.style.display="grid"
            }else{
            elem.parentElement.parentElement.style.display="none"
            }
        })
    })
});
search.addEventListener("input",()=>{
    console.log(search.value.toLowerCase());
    Array.from(countryname).forEach(elem=>{
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
            elem.parentElement.parentElement.style.display="grid"
        }else{
        elem.parentElement.parentElement.style.display="none"
        }
    });
})
const back=document.querySelector("back")
const countrymodel=document.querySelector(".countrymodel");
back.addEventListener("click",()=>{
    countrymodel.classList.toggle("show")
})
function showcountryinfo(){
    countrymodel.classList.toggle("show")
}