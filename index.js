const API_KEY="rusR_WPWZno1NT75eht1jBK_n64vOS9FG6Demi13BrU";
const input=document.querySelector("#input");
const btn=document.querySelector("#btn");
const lower=document.querySelector(".lower");
const wrapper=document.querySelector(".wrapper");
const imageDiv=document.querySelector(".imagediv");
const btn2=document.querySelector(".btn2");
const arr=["Nature","Animal","Goa","London","Models","Indians","Prayagraj","History","Archaeology","Astronaut"];
let keyword="";
let pages=1;
async function startPage(){
    const index=Math.floor((Math.random())*10);
    keyword=arr[index];
    input.value=keyword;
    const url=`https://api.unsplash.com/search/photos?page=${pages}&query=${keyword}&client_id=${API_KEY}`
    const response=await fetch(url);
    const data=await response.json();

    const resultss = data.results;
    
    resultss.map(result=>{
        var image=document.createElement("img");
        image.src=result.urls.small;
        imageDiv.append(image);
    })
    btn2.addEventListener("click",async ()=>{
        pages++;
        const url=`https://api.unsplash.com/search/photos?page=${pages}&query=${keyword}&client_id=${API_KEY}`
        const response=await fetch(url);
        const data=await response.json();

       const resultss = data.results;
    
       resultss.map(result=>{
        var image=document.createElement("img");
        image.src=result.urls.small;
        imageDiv.append(image);
    })
    })

} 
startPage();
// const pageHeight=parseFloat(getComputedStyle(wrapper).getProprtyValue("--page-height"));
// console.log(pageHeight);

function restartFun(){
    imageDiv.innerHTML="";
    pages=1;
    
}
async function show(){
    keyword=input.value;
    restartFun();
    
    const url=`https://api.unsplash.com/search/photos?page=${pages}&query=${keyword}&client_id=${API_KEY}`
    const response=await fetch(url);
    const data=await response.json();

    const resultss = data.results;
    
    resultss.map(result=>{
        var image=document.createElement("img");
        image.src=result.urls.small;
        imageDiv.append(image);
    })
    btn2.addEventListener("click",async ()=>{
        pages++;
        const url=`https://api.unsplash.com/search/photos?page=${pages}&query=${keyword}&client_id=${API_KEY}`
    const response=await fetch(url);
    const data=await response.json();

    const resultss = data.results;
    
    resultss.map(result=>{
        var image=document.createElement("img");
        image.src=result.urls.small;
        imageDiv.append(image);
    })
    })
    
}
btn.addEventListener("click",show);
console.log(keyword);