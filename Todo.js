const inputBox= document.getElementById("input-box")
const listcontainer= document.getElementById("list-container")

document.getElementById("add-btn").addEventListener("click", addTask)
addEventListener("keydown", (e) =>{
    if(e.key == "Enter"){
       addTask() 
    }
})

function addTask(){
    if(inputBox.value == ""){
        alert("You must write something!!!")    
    }
    else{
        let li= document.createElement("li")
        li.innerHTML= inputBox.value
        let span= document.createElement("span")
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span)
        listcontainer.appendChild(li)
    }
    inputBox.value= "";
    saveData()
}

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

listcontainer.addEventListener("click", (e) => {
    if(e.target.tagName.toUpperCase() === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName.toUpperCase() === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function showTask(){
    listcontainer.innerHTML= localStorage.getItem("data")
}

showTask()