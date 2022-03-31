const listaCachorros = [];
const imagemCachorro = document.querySelector('#img');
let posicaoAtualArray = 0;
let url = "https://dog.ceo/api/breeds/image/random";
imagemCachorro.src = "./cachorroInicial.jpg";
listaCachorros.push(imagemCachorro.src);

function carregarImagensNovasCachorros() {
    document.querySelector(".carregar").style.visibility = "visible"; 
    
    if(posicaoAtualArray == listaCachorros.length - 1)
    {
        fetch(url, {
            method: 'get'
        })
        .then( async (response) => {
            let responseApi = await response.json();
            imagemCachorro.src = responseApi.message;
            listaCachorros.push(imagemCachorro.src);
            posicaoAtualArray ++;
            document.getElementById("btnPrevious").style.visibility = "visible";
        
            setTimeout( function() 
            {  
                document.querySelector(".carregar").style.visibility = "hidden";
            }, 400) 
        })
        .catch((err) => {
            
            document.getElementById("btnPrevious").style.visibility = "hidden";
            document.querySelector(".carregar").style.visibility = "hidden";
            alert(`O seguinte erro ocorreu durante a requisição ${err}`)
        })
    }
    else if(listaCachorros.length > 0)
    {
        document.getElementById("btnPrevious").style.visibility = "visible";
        document.querySelector(".carregar").style.visibility = "hidden";
        posicaoAtualArray ++;
        imagemCachorro.src = listaCachorros[posicaoAtualArray];
    }
}
function carregarImagensAnterior () {
    posicaoAtualArray --;
    imagemCachorro.src = listaCachorros[posicaoAtualArray];
    if(posicaoAtualArray <= 0){
       document.getElementById("btnPrevious").style.visibility = "hidden";
       posicaoAtualArray = 0;
       imagemCachorro.src = listaCachorros[posicaoAtualArray];
    }
    
}