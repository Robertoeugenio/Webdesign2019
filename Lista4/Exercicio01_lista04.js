// exercicio A 

function funcaoA() {
    var exA = document.getElementById("exemploA").value;

    var expA = /^\d\d\/\d\d\/(\d\d|\d\d\d\d)$/    // ou   == >  /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/ 
    if (expA.test(exA))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}

//EXERCÍCIO B
function funcaoB() {
    var expB = document.getElementById("exemploB").value;
    var exB = /^ \d\d\d\.\d\d\d\.\d\d\d\-\d\d$/    // ou   == > /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

    if (exB.test(expB))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO C
function funcaoC() {
    var expC = document.getElementById("exemploC").value;
    var exC =  /^IFTM-\d\d\d\/\d\d\d\-\w{2}$/i       // ou ==>  /^IFTM-\d{3}\/\d{3}-\w{2}$/i;

    if (exC.test(expC))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
function funcaoD() {
    var expD = document.getElementById("exemploD").value;
    var exD = /^MT-\d{2}.\d{3}-IFTM$/i

    if (exD.test(expD))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO E
function funcaoE() {
    var expE = document.getElementById("exemploE").value;
    var exE = /^MT-\d{2}.\d{3}-(I|i)(F|f)(T|t)(M|m)$/

    if (exE.test(expE))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}

//EXERCÍCIO F
function funcaoF() {
    var expF = document.getElementById("exemploF").value;
    var exF = /^M\s{0,1}T-\d{2}.\d{3}-I\s{0,1}F\s{0,1}T\s{0,1}M$/i

    if (exF.test(expF))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}

//EXERCÍCIO G
function funcaoG() {
    var expG = document.getElementById("exemploG").value;
    var exG = /^(M|m)\s?(T|t)-\d{2}.\d{3}-(I|i)\s?(F|f)\s?(T|t)\s?(M|m) Uberlândia( Centro)?$/

    if (exG.test(expG))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO H
function funcaoH() {
    var expH = document.getElementById("exemploH").value;

    //telefone sem nada
    //var padraoH = /^\d{5}-\d{4}$/

    //telefone com ddd
    var exH = /^\+\d{1,3}\(\d{2}\)\d{5}-\d{4}$/

    if (exH.test(expH))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO I
function funcaoI() {
    var expI = document.getElementById("exemploI").value;
    var exI = /^\(\d{1,3}\)\d{5}-\d{4}$/

    if (exI.test(expI))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO J
function funcaoJ() {
    var expJ = document.getElementById("exemploJ").value;

    //valor monetário
    //var padraoJ = /^R\$$/

    //com casas decimais
    //var padraoJ = /^R\$\d{1},\d{1,2}$/

    //até 999
    //var padraoJ = /^R\$\d{1,3},\d{1,2}$/

    //um ou três dígitos no começo; ponto e três dígitos zero ou infinitas vezes; separados por ponto; vírgula e dois dígitos no final
    //var padraoJ = /^R\$\d{1,3}(.\d{3})*,\d{2}$/;

    //um ou três dígitos no começo; ponto e três dígitos zero ou três vezes; separados por ponto; vírgula e dois dígitos no final
    var exJ = /^R\$\d{1,3}(.\d{3}){0,3},\d{2}$/;

    if (exJ.test(expJ))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO K
function funcaoK() {
    var expK = document.getElementById("exemploK").value;

    //qualquer valor separado por :
    //var padraoK = /^\d{2}:\d{2}:\d{2}:\d{2}$/;

    //horas de 0 a 23
    //var padraoK = /^([0][0-9]|[1][0-9]|[2][0-3]):\d{2}:\d{2}:\d{2}$/;

    //horas de 0 a 23; minutos de 0 a 59;
    //var padraoK = /^([0][0-9]|[1][0-9]|[2][0-3]):([0-5][0-9]):\d{2}:\d{2}$/;

    //horas de 0 a 23; minutos de 0 a 59; segundos de 0 a 59;
    var exK = /^([0][0-9]|[1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9]):([0-9][0-9])$/;

    if (exK.test(expK))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO L
function funcaoL() {
    var expL = document.getElementById("exemploL").value;
    var exL =  /^[\w\._-]{5}&[A-Pa-p]+\.[aeiou]+\.[A-Za-z0-5]*-[^\d]+,\W{2}\.[^ab01]+$/;

    if (exL.test(expL))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
