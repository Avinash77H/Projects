let answer = document.getElementById("counter")

let sub_btn = document.getElementById("sub_btn")

let add_btn = document.getElementById("add_btn")

// add_btn.addEventListener('click',function(){
    

//     let x = document.getElementById('counter').innerHTML


//     x += 1;

    
// });


function increment(){
    let x = parseInt(answer.innerText);

    x += 1;

    answer.innerText = x;
}

function decrement(){
    let x = parseInt(answer.innerText)

    x -= 1;

    answer.innerText = x;
}



