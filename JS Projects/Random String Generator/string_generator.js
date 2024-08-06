const char_str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';




function generator(){
    let number =(document.getElementById("input").value);
    let result = "";

    
    
    
    if(isNaN(number) || number < 0 || number > 62){
        document.getElementById("output_str").innerHTML = "please enter a number between 1 to 62"
    } 
    else{
        for(let i = 0; i < number; i++){
            let x = Math.floor(Math.random() *  62 );
            result += char_str[x];
        }
    
        document.getElementById("output_str").innerHTML = result;
    }
}


