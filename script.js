
let todos=[]
let idItem = 1
function addTodo(){

    var addTodoElement =document.getElementById("add-todo")
    console.log(addTodoElement.value)

    if (addTodoElement.value == "livrinho vermelho") {
        alert("you should not be looking at social media :(")
        return
    }

    var item = `
        <li id="`+ idItem +`">
            <div class="schedule-content">
                <div class="schedule-text">
                    <span>`+ addTodoElement.value +`</span>
                </div>
                <div class="left-button">
                    <button class="Yes" onclick="finishElement(`+ idItem +`)">✓</button>
                    <button class="No" onclick="removeElement(`+ idItem +`)" >X</button>
                </div>
            </div>  
        </li> 
    `

    var listElement = document.getElementById("list-todo")
    // 选择 'listElement' 并向其中添加一个新的 HTML 项，item 是我们添加到 'insertAdjacentHTML' 命令中的变量，因此 item 可以是任何 HTML 元素。
    listElement.insertAdjacentHTML('beforeend', item)

   
    idItem = idItem + 1
}
function removeElement(id){
    var element = document.getElementById(id)
    element.remove()
}
function finishElement(id){
    var element = document.getElementById(id)
    var finishElement = document.getElementById("finish-todo")
    finishElement.insertAdjacentElement('beforeend', element)
    
}
function searchElement(){
//  作业：
// 1- 通过id选择输入元素，然后你需要访问 'value' 属性。将其添加到一个新变量中。
// 2- 在if语句中使用新变量的 '.includes' 方法，以确保你在过滤用户输入的值。
    var searchElement1 = document.getElementById("search-box").value
    var todo = Array.from( document.getElementById("list-todo").children)
    var finish = Array.from( document.getElementById("finish-todo").children)
    var list =[]
    list = list.concat(todo)
    list = list.concat(finish)
    list.forEach(item => {
        item.style.display = "none"
        if (item.innerText.includes(searchElement1)) {
            item.style.display = "block"
        }
    })

   
}
function refresh(){
    var searchElement1 = document.getElementById("search-box").value
    var todo = Array.from( document.getElementById("list-todo").children)
    var finish = Array.from( document.getElementById("finish-todo").children)
    var list =[]
    list = list.concat(todo)
    list = list.concat(finish)
    if(searchElement1 == ""){
        list.forEach(item => {
            item.style.display = "block"
        })
    }
}
var input = document.getElementById("search-box");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("Searchbutton").click();
    }
});
var input1 = document.getElementById("add-todo");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("Savebutton").click();
    }
});

