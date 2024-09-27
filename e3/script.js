function changeColor(){
    var choice = document.getElementById("choice").value;
    if(choice=="yellow"){
        choice = "gold"; //o amarelo msm fica difícil de ler no fundo branco
    }
    var h1 = document.getElementById("h1");
    h1.style.color = choice;
    var p = document.getElementById("p");
    p.style.color = choice;
    var lb = document.getElementById("lb");
    lb.style.color = choice;
}