var inputTitle = document.querySelector(".title-add");
var liendeimage = document.querySelector(".link-of-img");
var priceArticle = document.querySelector(".price");
var ajouteer = document.getElementsByClassName("ajouter");
var section = document.querySelector(".section-peluche");
var prix = document.getElementsByTagName('h4');

function countTotal(event){
    var count = 0 ;
    let prix = document.querySelectorAll('.prix');
    let btn = document.querySelectorAll('.btns');
    Array.from(prix);
    btn = Array.from(btn);
    for (i = 0 ; i < btn.length;i++){
        if (btn[i].value > 0){
            count = count + prix[i].innerText*btn[i].value;
        }
    }
   return (document.getElementsByClassName('total')[0].innerText = `Le Total est = ${count}`);
}

document.addEventListener("click", function(event) {
    if (event.target.className === "btn btn-primary") {
      countTotal(event);
    }
});

function lengthTitle(){
    return inputTitle.value.length;
}
function lengthlienimages (){
    return liendeimage.value.length;
}
function pricearticles (){
    return priceArticle.value.length;
}

function createElement (event){
    if (lengthTitle() > 0 && lengthlienimages() > 0 && pricearticles() > 0){
        let div = document.createElement("div");
        div.classList.add("liste-peluche");
        div.classList.add("service");
        div.classList.add("service1"); 
        
        section.appendChild(div);     
        
        let div2 = document.createElement('div');
        div.appendChild(div2);
        
        let title = document.createElement('h4');
        title.appendChild(document.createTextNode(inputTitle.value));
        div2.appendChild(title);
        
        let div3= document.createElement('div');
        div2.appendChild(div3);
        
        let image = document.createElement("img");
        image.setAttribute("src",liendeimage.value);
        div3.appendChild(image);
        
        let div4= document.createElement('div');
        div3.appendChild(div4); 
        div4.classList.add('prix');
        div4.appendChild(document.createTextNode(priceArticle.value));
        
        let div5 = document.createElement("div");
        div4.appendChild(div5);
        
        let btnns = document.createElement('input');
        btnns.setAttribute("step","1");
        btnns.setAttribute("min","0");
        btnns.setAttribute("max","9");
        btnns.setAttribute("type","number");
        btnns.setAttribute("value","0");
        btnns.classList.add("btns");
        div5.appendChild(btnns);

        let sub = document.createElement('button');
        sub.classList.add("btn");
        sub.classList.add("btn-primary");
        sub.setAttribute("type","submit");
        sub.setAttribute("value",'ajouter au panier'); 
        sub.style.width="100px";
        sub.style.height='30px';
        div5.appendChild(sub);
        
  
    }   


}

document.addEventListener("click", function(event){
    if(event.target.className === 'btn btn-primary ajouters'){
         createElement(event);  
    }
})

let searchArticle= document.querySelector('.searchaz');
Array.from(searchArticle);
searchArticle.addEventListener('keyup',function(event){

    let list = document.querySelectorAll('h4');
    Array.from(list).forEach(function(article){
         let title= article.textContent;
        if (title.toLowerCase().indexOf(searchArticle.value.toLowerCase())!=-1){
            article.parentElement.parentElement.style.display = 'block';
        } else {
            article.parentElement.parentElement.style.display = 'none';
        }
    })
}) 