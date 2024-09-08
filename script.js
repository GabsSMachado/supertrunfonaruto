//Aqui começa a função para gerar o num aleatorio e jogar no input text
function gerarNumero1(min,max) {
    let resultadoGerado1 = document.querySelector(".resultado")
    min = Math.ceil(min);
    max = Math.floor(max);
    let numeroAleatorio1 = Math.floor(Math.random() * (max - min) + min);
    resultadoGerado1.value = numeroAleatorio1;
}

function gerarNumero2(min,max) {
    let resultadoGerado2 = document.querySelector(".roleta")
    min = Math.ceil(min);
    max = Math.floor(max);
    let numeroAleatorio2 = Math.floor(Math.random() * (max - min) + min);
    resultadoGerado2.value = numeroAleatorio2;
}
// Está duplicado pois foi a única forma que encontrei para satsfazer a necessidade.

function buscarPersonagem(){
    let exibir = document.getElementById("personagem-um");

    let entradaID = document.getElementById("#resultado").value;

    let armazenarResultados = "";

    for (let ninja of ninjas) {
        let boneco = ninja.id;

        if(boneco.includes(entradaID)){
            armazenarResultados += (`
                <div class="personagem-um">
                    <h3>${ninjas.nomeDoPersonagem}</h3>
                    <img src="narutinho.png" alt="Imagem do naruto">
                    <p>Força : ${ninjas.forca}</p>
                    <p>Habilidades : ${ninjas.jutsuPrincipal} </p>
                    <button type="submit" onclick="gerarNumero1(1, 30)" id="gerarNumeroAleatorio">!</button>
                    <input type="text" class="resultado" id="resultado">
                    <button type="submit" onclick="buscarPersonagem()" id="pesquisarPersonagem">Fight</button> 
                </div>
                `
            )
        }
        if (entradaID == ""){
            exibir.innerHTML = "Nenhum resultado encontrado"
        } else {
            exibir.innerHTML = armazenarResultados
        }
        
    }
}