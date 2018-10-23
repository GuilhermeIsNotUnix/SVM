var entrada = "";

window.onload = function() {
    document.getElementById("botao0").addEventListener("click", function() {
        entrada = entrada + 0;
    });
    
    document.getElementById("botao1").addEventListener("click", function() {
        entrada = entrada + 1;
    });
    
    document.getElementById("botao2").addEventListener("click", function() {
        entrada = entrada + 2;
    });
    
    document.getElementById("botao3").addEventListener("click", function() {
        entrada = entrada + 3;
    });
    
    document.getElementById("botao4").addEventListener("click", function() {
        entrada = entrada + 4;
    });
    
    document.getElementById("botao5").addEventListener("click", function() {
        entrada = entrada + 5;
    });
    
    document.getElementById("botao6").addEventListener("click", function() {
        entrada = entrada + 6;
    });
    
    document.getElementById("botao7").addEventListener("click", function() {
        entrada = entrada + 7;
    });
    
    document.getElementById("botao8").addEventListener("click", function() {
        entrada = entrada + 8;
    });
    
    document.getElementById("botao9").addEventListener("click", function() {
        entrada = entrada + 9;
    });
    
    document.getElementById("botaoBranco").addEventListener("click", function() {
        entrada = "";
        alert("Voto em branco");
    });
    
    document.getElementById("botaoCorrige").addEventListener("click", function() {
        alert("Corrigido. Digite de novo seu voto");
    });
    
    document.getElementById("botaoConfirma").addEventListener("click", function() {
        alert(entrada);
        entrada = "";
    });   
}