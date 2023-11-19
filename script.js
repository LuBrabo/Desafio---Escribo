function somatorio (number){
    
    let soma = 0;

        for (let i = 0; i < number; i++){
            if (i % 3 == 0 || i % 5 == 0){
                soma += i;
            }
        }
        return soma;
}

var number = prompt("Digite um valor");
    while(number < 0){
      number = prompt("Digite um valor válido");
    }