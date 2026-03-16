let contador= 0;
const elige =document.querySelector("#eligePokemon");
const elige2 =document.querySelector("#pokemones");
const contact =document.querySelector("#contacto");

function agregarProducto(){
    contador++;
    
   $("#pokebolas").text(contador);
}
elige.addEventListener("click", ()=>{
    
    window.scrollTo({
        top:500,
        behavior:"smooth",
    });
});
elige2.addEventListener("click", ()=>{
    
    window.scrollTo({
        top:500,
        behavior:"smooth",
    });
});
contact.addEventListener("click", ()=>{
    
    window.scrollTo({
        top:5000,
        behavior:"smooth",
    });
});
