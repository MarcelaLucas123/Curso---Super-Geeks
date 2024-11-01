// window.alert("Olá mundo!")

// boleana
var chuva = false
var sol = true

// number 
var idade = 15
var altura =1.70

// string 
var nome = "Marecela"
var dia = "30"

console.log(chuva)
console.log(nome)
console.log(idade)

console.log(typeof(chuva))
console.log(typeof(nome))
console.log(typeof(idade))

console.log(10+10)


var aluno1
aluno1 = "Ana"
aluno1 = "João"

let aluno2
aluno2 = "julia"
aluno2 = "pedro"

const aluno3 = "rafaela"
// aluno3 = "carlos" não podemos mudar váriaveis const


function exemploVar(){
    var x = 10
    
    if (true){
        var x = 20
        console.log("dentro do if" + x)
    }
    console.log("fora do if" + x)
}

function exemploLet(){
    let y = 10
    
    if (true){
        let y = 20
        console.log("dentro do if" + y)
    }
    console.log("fora do if" + y)
}

exemploVar()
exemploLet()

