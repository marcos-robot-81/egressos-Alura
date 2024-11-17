let pista = document.getElementById("qtd-pista");
let superior = document.getElementById("qtd-superior");
let inferior = document.getElementById("qtd-inferior");

function comprar(){
    let option = (document.getElementById("tipo-ingresso")).value;
    let qtde = document.getElementById("qtd").value;

    
    switch ((option)){
        case "pista":
            if((parseInt(pista.textContent) - qtde) >= 0){
            pista.innerHTML=` ${(parseInt(pista.textContent)-(qtde))}`
            }else{ingresso(qtde,option,parseInt(pista.textContent))}
            break
            
        ;
        case "superior":
            if((parseInt(superior.textContent) - qtde) >= 0){
            superior.innerHTML=` ${(parseInt(superior.textContent)-(qtde))}`
        }else{ingresso(qtde,superior,parseInt(superior.textContent))}
            break
        ;
        case "inferior":
            if((parseInt(inferior.textContent) - qtde) >= 0){
            inferior.innerHTML=` ${(parseInt(inferior.textContent)-(qtde))}`
        }else{ingresso(qtde,inferior,parseInt(inferior.textContent))}
            break
        ;
        default:window.alert("erro");
    }
    
}
function ingresso(a,b,c){ // a = Quatidade selecionadas / b = tipo de Ingresso / c = quatidade desponiveis
    if(c == 0){
        window.alert(`Não tem mais igressos desponives para :${b} por favor celecione outro.`)
    }if(c - a < 1){
        window.alert(`O valo de igressos selecionado e maio que os desponiveis que e ${c}`)
    }
    
    
}