
async function apiCall(url) {

   try{
        let res=await fetch(url)
        let data=await res.json();
        return data;
   }
   catch(err){
       console.log(err)
   }
    //add api call logic here


}


function appendArticles(articles, main) {
     articles.forEach(function(articles){
         let div=document.createElement("div");
           div.addEventListener("click", ()=>{
               let arr=[];
               arr.push(articles)
             localStorage.setItem("article", JSON.stringify(arr))
             window.location.href="news.html"
           })
        let image=document.createElement("img");
        image.src=articles.urlToImage
        let title=document.createElement("h3");
        title.textContent=articles.title
        div.append(image,title)
        main.append(div)
     })
    //add append logic here

}

export { apiCall, appendArticles }