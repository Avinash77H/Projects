function add(){
    let input = document.querySelector("#task").value

    if(!input){
        alert("Please Enter a Task")
    }
    else{
        // create li
    let newElement = document.createElement("li");

    // add remove button

    let btn = document.createElement("button")
   
    btn.innerHTML = "remove";
    btn.setAttribute("class","remove_btn");

   newElement.textContent = " -     " + input;
   newElement.className = "dynamic_li";
   newElement.appendChild(btn);
   
   let output = document.querySelector("#dynamic_id");

   output.appendChild(newElement);
   
   document.querySelector("#task").value= "";

   let click = newElement.querySelector("button");

   click.addEventListener("click",function(){
       output.removeChild(newElement);
   })
    }
    
}

