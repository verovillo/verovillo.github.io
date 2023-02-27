document.getElementById("hora").addEventListener("click", function(){
    console.log("Veamos la hora");
    document.getElementById("btn-1").innerHTML=Date()
});

function myFunction() {
    let text;
    let person = prompt("Por favor, ingresa tu nombre:", "Jorge");
    if (person == null || person == "") {
        text = "Cancelado.";
    } else {
        text = "Hola " + person + "! Gracias por tomarte el tiempo de ver mi página 🙂.";
    }
    document.getElementById("saludo").innerHTML = text;
    }


function numFav() {
    let texto
    let numero = prompt("Adivina cuál es mi número favorito (1-10): ")
    if (numero == null || numero == ""){
        texto = "Para jugar vuelve a intentarlo e ingresa un número."
    }else if(numero == "8"){
        texto = "Adivinaste, el número " + numero + " es mi favorito.";
    }else {
        texto = "Fallaste! vuelve a intentarlo"
    }
    document.getElementById("adivinanza").innerHTML = texto;
}

