class Tasklist {
    constructor(doing){
        this.doing = doing;
    }
}

function addTaskList(){
    const task = document.getElementById("InputAdd").value;
    const list = new Tasklist(task);
    console.log(list)
    document.getElementById('result').innerHTML += `<div id= "results"><p id="list1">${list.doing}</p>button>`

}