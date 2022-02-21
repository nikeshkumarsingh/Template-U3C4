import sidebar from"../components/sidebar.js";
import {apiCall ,appendArticles} from"../scripts/main.js";
let nav= document.getElementById("sidebar");
nav.innerHTML=sidebar()
let main=document.getElementById("main");
let res=await apiCall(`https://shrouded-earth-23381.herokuapp.com/api/headlines/india`)
console.log(res) 
appendArticles(res,main)
let input=document.getElementById("searchbar");
input.addEventListener("keypress", (el) =>{
    if(el.key=="Enter"){
        let inputv =document.getElementById("searchbar").value;
        localStorage.setItem("search_term",inputv)
        window.location.href="search.html"
    }
})