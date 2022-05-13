let velocidade = 80.5
let limite = 60
let exc = velocidade - limite
console.log(`A velocidade do seu carro é de ${velocidade}km/h.`)
if(velocidade > limite) {
    console.log(`Você ultrapassou o limite de velocidade em ${exc}km/h. Você foi multado.`)
}
console.log(`Dirija sempre com segurança.`)