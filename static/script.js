let text = "Welcome!";
let anime = document.getElementById("skill");
let i = 0;
let delay = 3000;  // 5 seconds delay

function typeText() {
    let interval = setInterval(() => {
        anime.textContent += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(interval);
            setTimeout(() => {
                i = 0;
                anime.textContent = "";
                typeText();
            }, delay);
        }
    }, 200);
}

typeText();
let btn_close = document.getElementsByClassName("close")[0]
let saidbar = document.getElementsByClassName("saidbar")[0]
let menu=document.getElementsByClassName("menu")[0]
let project = document.getElementById("project")
let main = document.getElementsByClassName("main")[0]
let home= document.getElementById("home")
let prijectdiv= document.getElementsByClassName("project")[0]
let contactbtn=document.getElementById("contactbtn")
let contactdiv=document.getElementsByClassName("contacme")[0]
let myskill=document.getElementById("myskill")
let skilldiv=document.getElementsByClassName("skill")[0]
let s_color0=document.getElementsByClassName("s_color0")[0]
let s_color1=document.getElementsByClassName("s_color1")[0]
let s_color2=document.getElementsByClassName("s_color2")[0]
let s_color3=document.getElementsByClassName("s_color3")[0]
let alert = document.getElementsByClassName("gg")[0]
// console.log(alert)
if(alert){

    if(alert.style.display==""){
        setTimeout(()=>{
            alert.style.display="none"
    
        },2000)
    }
}
btn_close.addEventListener('click',()=>{
    saidbar.style.transform= "translate(-500px,0px)"
    // home.style.boxShadow="rgb(250, 92, 14) -4px 2px 8px 3px"
    // saidbar.style.display="none"
    setTimeout(() => {
        
        menu.style.display="block"
    }, 400);
})
menu.addEventListener('click',()=>{
    saidbar.style.transform= "translate(0px,0px)"
    
    // saidbar.style.display="block"
    setTimeout(() => {
        
        menu.style.display="none"
    }, 300);

})
home.addEventListener('click',()=>{
    main.style.display="flex"
    project.style.color="white"
    home.style.color="#fa5c0e"
    prijectdiv.style.display="none"
    contactdiv.style.display="none"
    contactbtn.style.color="white"
    skilldiv.style.display="none"
    myskill.style.color="white"
    
    
})
project.addEventListener('click',()=>{
    main.style.display="none"
    project.style.color="#fa5c0e"
    home.style.color="white"
    prijectdiv.style.display="block"
    contactdiv.style.display="none"
    contactbtn.style.color="white"
    skilldiv.style.display="none"
    myskill.style.color="white"
})


contactbtn.addEventListener('click',()=>{
    main.style.display="none"
    project.style.color="white"
    contactbtn.style.color="#fa5c0e"
    prijectdiv.style.display="none"
    home.style.color="white"
    contactdiv.style.display="flex"
    skilldiv.style.display="none"
    myskill.style.color="white"
    
})

myskill.addEventListener('click',()=>{
    main.style.display="none"
    project.style.color="white"
    contactbtn.style.color="white"
    prijectdiv.style.display="none"
    home.style.color="white"
    skilldiv.style.display="flex"
    contactdiv.style.display="none"
    myskill.style.color="#fa5c0e"

})

function HOME(){
    main.style.display="flex"
    s_color0.style.colo="#fa5c0e"
    s_color2.style.colo="white"
    s_color1.style.colo="white"
    s_color3.style.colo="white"
    prijectdiv.style.display="none"
    contactdiv.style.display="none"
    skilldiv.style.display="none"
    
}

function s_project(){
    main.style.display="none"
    s_color1.style.colo="#fa5c0e"
    s_color0.style.colo="white"
    s_color2.style.colo="white"
    s_color3.style.colo="white"
    prijectdiv.style.display="block"
    contactdiv.style.display="none"
    skilldiv.style.display="none"


}
function s_skill(){
    main.style.display="none"
    prijectdiv.style.display="none"
    skilldiv.style.display="flex"
    contactdiv.style.display="none"
    s_color2.style.colo="#fa5c0e"
    s_color1.style.colo="white"
    s_color0.style.colo="white"
    s_color3.style.colo="white"
    
}
function s_contact(){
    main.style.display="none"
    prijectdiv.style.display="none"
    contactdiv.style.display="flex"
    skilldiv.style.display="none"
    s_color3.style.colo="#fa5c0e"
    s_color0.style.colo="white"
    s_color2.style.colo="white"
    s_color1.style.colo="white"
    

}