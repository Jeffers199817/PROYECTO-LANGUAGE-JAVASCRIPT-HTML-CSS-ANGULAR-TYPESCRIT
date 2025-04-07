function cambiarTexto() { 
    
    let texto = document.getElementById("parrafo");
    texto.textContent="Este es el nuevo contenido";

    texto.style.color = "blue";
    texto.style.animation = "mover 2s infinite";
    texto.style.animationComposition = "replace";
}