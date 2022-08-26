import PromptSync from "prompt-sync";

const prompt = PromptSync();

const FactorialNumero = (numero) => {

    if (numero <= 1) return 1

    else {
        return FactorialNumero(numero - 1) * numero

    }
}

console.log(FactorialNumero(prompt('Numero del factorial a calcular: ')))