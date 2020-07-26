
    var list = document.getElementById("list")
    function addTodo(){
        var todo_item = document.getElementById("todo-item")
    
    
    
        var li = document.createElement('li')
        var liText = document.createTextNode(todo_item.value)
        li.appendChild(liText)
    
    
        var delBtn = document.createElement("button")
        var delText = document.createTextNode("DELETE")
        delBtn.appendChild(delText)
        delBtn.setAttribute("class","btn")
        delBtn.setAttribute("onclick","deleteItem(this)")
    
    
        var editBtn = document.createElement("button")
        var editText = document.createTextNode("EDIT")
        editBtn.appendChild(editText)
        editBtn.setAttribute("class","edt")
        editBtn.setAttribute("onclick","editItem(this)")
    
    
        li.appendChild(editBtn)
    
        li.appendChild(delBtn)
    
      
        list.appendChild(li)
        console.log(li)
        todo_item.value=""
    }
    
    
    function deleteItem(e){
        e.parentNode.remove()
    }
    function editItem(e){
        var val = e.parentNode.firstChild.nodeValue;
        var editValue = prompt("Enter edit value",val)
        e.parentNode.firstChild.nodeValue = editValue
    }


    function deleteItem() {
        list.innerHTML = ""
    }
    function delTask(e) {
       e.parentNode.remove()
    }
    function editTask(e) {
        var edit = e.parentNode.firstChild.nodeValue;
        var update = prompt("Update Your Task",edit);
        e.parentNode.firstChild.nodeValue = update
    }