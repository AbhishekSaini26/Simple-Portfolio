let icon=document.querySelector('.icon');
let ul=document.querySelector("ul");

icon.addEventListener("click",()=>{
    ul.classList.toggle("showData");
    

    if(ul.className=="showData"){
        document.getElementById('bar').className="ri-xrp-line"
    }
    else{
         document.getElementById('bar').className="ri-menu-line"
    }
});

const panels=document.querySelectorAll(".panel");

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add("active");
    });
});
function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove("active");
    })
}
