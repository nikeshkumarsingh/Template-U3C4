import {apiCall ,appendArticles} from"../scripts/main.js";
window.addEventListener("load",()=>{
    appendta()
})  
async function appendta(){
 let input=localStorage.getItem("search_term")
let main=document.getElementById("main");
let res=await apiCall(`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${input}`)
console.log(res) 
appendArticles(res,main)
  }
