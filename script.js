const prior = document.getElementById("priority");
const task = document.getElementById("task");
const high = document.getElementById("listhigh");
const med = document.getElementById("listmed");
const low = document.getElementById("listlow");
const but = document.getElementById("add");
const progress = document.getElementById("progress");
let total = 0;
let done=0;
let notdone=0;
but.addEventListener("click", () => {
    //create a html element for teh task
    let newTask = document.createElement("li");
    newTask.innerText = task.value;
    newTask.style.color = "#06283D";
    newTask.style.textAlign = "left";

    if (prior.value == "1") {
        high.appendChild(newTask);
    }
    else if (prior.value == "2") {
        med.appendChild(newTask);
    }
    else if (prior.value == "3") {
        low.appendChild(newTask);
    }
    total++;
    //delete button for the tasks   
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "✘";
    deleteButton.classList = "btn btn-outline-danger";
    deleteButton.style.marginLeft = "200px";
    deleteButton.style.borderRadius = "50%";
    newTask.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {  notdone++;
        newTask.remove();
        prog();
      
    })
    //done button 
    let doneButton = document.createElement("button");
    doneButton.innerText = "✓";
    doneButton.classList = "btn btn-outline-success";
    doneButton.style.marginLeft = "0px";
    doneButton.style.borderRadius = "50%";
    newTask.appendChild(doneButton);
    doneButton.addEventListener("click", () => {
        done++;
        newTask.remove();
        prog();
        
    })

    //progress bar
    function prog (){
    let percentage = (done / total) * 100;
    progress.style.width = percentage + "%";
    progress.setAttribute("aria-valuenow", percentage);
    progress.innerText = percentage.toFixed(0) + "%";}
}
)
