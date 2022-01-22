let imc = () => {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const imc_user = document.getElementById("resultado")
    var calc_imc = peso / (altura * altura)
    var peso_ideal_minimo = (altura * altura) * 18.5
    var peso_ideal_maximo = (altura * altura) * 24.9 
    if (calc_imc < 18.5) {
        imc_user.textContent = `${nome} você está abaixo do peso. Seu IMC é de ${calc_imc.toFixed(2)}. Seu peso ideal 
        varia entre ${peso_ideal_minimo.toFixed(2)} e ${peso_ideal_maximo.toFixed(2)}`
    }
    else if (calc_imc < 25) {
        imc_user.textContent = `${nome} você está no peso ideal. Seu IMC é de ${calc_imc.toFixed(2)}. Seu peso ideal 
        varia entre ${peso_ideal_minimo.toFixed(2)} e ${peso_ideal_maximo.toFixed(2)}`
    }
    else if (calc_imc < 30) {
        imc_user.textContent = `${nome} você está com sobrepeso. Seu IMC é de ${calc_imc.toFixed(2)}. Seu peso ideal 
        varia entre ${peso_ideal_minimo.toFixed(2)} e ${peso_ideal_maximo.toFixed(2)}`
    }
    else if (calc_imc < 35) {
        imc_user.textContent = `${nome} você está com obesidade grau I. Seu IMC é de ${calc_imc.toFixed(2)}. Seu peso ideal 
        varia entre ${peso_ideal_minimo.toFixed(2)} e ${peso_ideal_maximo.toFixed(2)}`
    }
    else if (calc_imc < 40) {
        imc_user.textContent = `${nome} você está com obesidade grau II. Seu IMC é de ${calc_imc.toFixed(2)}. Seu peso ideal 
        varia entre ${peso_ideal_minimo.toFixed(2)} e ${peso_ideal_maximo.toFixed(2)}`
    }
    else if (calc_imc > 40) {
        imc_user.textContent = `${nome} você está com obesidade grau III. Seu IMC é de ${calc_imc.toFixed(2)}. Seu peso ideal 
        varia entre ${peso_ideal_minimo.toFixed(2)} e ${peso_ideal_maximo.toFixed(2)}`
    }
}


calcular.addEventListener('click', imc);