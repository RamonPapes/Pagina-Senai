var openList = document.getElementById("openList");
var sidebar = document.getElementById("sidebar");
var exitList = document.getElementById("exitList");


openList.addEventListener('click', ()=>{
    if(!openList.classList.contains("hidden")){
        openList.classList.add("hidden");
        sidebar.classList.remove("hidden");
    }
})

exitList.addEventListener('click',()=>{
    if(!sidebar.classList.contains("hidden")){
        openList.classList.remove("hidden");
        sidebar.classList.add("hidden");
    }
})

function confirmar(){
    alert('Parabéns pelo cadastro, iremos te redirecionar para a página principal')
}