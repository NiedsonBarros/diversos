function calc() {resultado
    let modo = document.getElementById("modoVini").value.toUpperCase();

    switch (modo) {
        case "FELIZ": return document.getElementById("resultado").innerHTML =
            `<p>FELIZ!!</p>
<img src="./feliz.png" style="height: 500px">`
            break;
        case "TRABALHADOR": return document.getElementById("resultado").innerHTML =
            `<p>TRABALHADOR!!</p>
<img src="./trabalhador.png" style="height: 400px; width: 700px";>`
            break;
        case "FESTEIRO": return document.getElementById("resultado").innerHTML =
            `<p>FESTEIRO!!</p>
<img src="./festeiro.png" style="height: 400px; width: 700px";>`
            break;
        case "SENSUAL": return document.getElementById("resultado").innerHTML =
            `<p>SENSUAL!!</p>
<img src="./sensual.png" style="height: 500px">`
            break;
        case "SENSUAL DEMAIS": return document.getElementById("resultado").innerHTML =
            `<p>SENSUAL!!</p>
<img src="./sensual2.png" style="height: 500px">`
            break;
        case "SENSUAL DEMAIS DA CONTA": return document.getElementById("resultado").innerHTML =
            `<p>SENSUAL DEMAIS DA CONTA!!</p>
<img src="./sensual3.png" style="height: 500px">`
            break;
        default: return alert("Ei Tabacudo opção inválida, tente outra!")
    }
}