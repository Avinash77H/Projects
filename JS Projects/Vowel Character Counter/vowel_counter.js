function counter(){
    let input = document.querySelector("#input_field").value;
    let output = document.querySelector("#result");

    let count = 0;
    for(let i = 0 ; i < input.length; i++){
        if(input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u' ||input[i] == 'A' || input[i] == 'E' || input[i] == 'I' || input[i] == 'O' || input[i] == 'U'){
            count ++;
        }
    }

    output.innerHTML = count;
}