



function counter(){
    let input = document.querySelector("#input_field").value;
    
   let output = document.querySelector("#result");

   let x = [];

   x = input.split(" ");

   output.innerHTML = x.length;
}