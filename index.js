function romano2int(romano){
    let Romano = romano.toUpperCase()

    let n = 0

    const numeros = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000  
    }

    for(let i = 0; i < Romano.length; i++){
        let atual = Romano[i]
        let proximo = Romano[i+1]

        if(proximo && numeros[proximo] < numeros[atual]){
            n -= numeros[atual]
        }else{
            n += numeros[atual]
        }
        
    }
    return n
}