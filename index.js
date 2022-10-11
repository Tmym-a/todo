class Square {
    constructor(obj){
        const form = document.getElementById(obj.formName);
        const input = document.getElementById(obj.inputName);
        const ul = document.getElementById(obj.ulName);
        const todos = JSON.parse(localStorage.getItem(obj.todosName));
        
        if (todos) {
            todos.forEach(todo => {
                add(todo);
            })
        }
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log(input.value);
            add();
        });

    function add(todo) {
        let todoText = input.value;
        if (todo) {
            todoText = todo.text;
        }
        if (todoText) {
            const li = document.createElement('li');
            li.innerText = todoText;
            li.classList.add('list-group-item');
            
            if (todo && todo.completed) {
                li.classList.add('text-decoration-line-through');
            }
            li.addEventListener('contextmenu', function(event) {
                event.preventDefault();
                li.remove();
                saveData();
            });
    
            li.addEventListener('click', function() {
                li.classList.toggle('text-decoration-line-through');
                saveData();
            });
            ul.appendChild(li);
            input.value = '';
            saveData();
        }
    }
    
    function saveData() {
        const lists = ul.childNodes
        let todos = [];
        lists.forEach(list =>  {
            let todo = {
                text: list.innerText,
                completed: list.classList.contains('text-decoration-line-through')
            };
            todos.push(todo);
        });
        localStorage.setItem(obj.todosName, JSON.stringify(todos));
    }      
    }
}

const square1 = new Square({
    formName: 'js-form1',
    inputName: 'js-input1',
    ulName: 'js-ul1',
    todosName: 'todos1'
});
const square2 = new Square({
    formName: 'js-form2',
    inputName: 'js-input2',
    ulName: 'js-ul2',
    todosName: 'todos2'
});
const square3 = new Square({
    formName: 'js-form3',
    inputName: 'js-input3',
    ulName: 'js-ul3',
    todosName: 'todos3'
});
const square4 = new Square({
    formName: 'js-form4',
    inputName: 'js-input4',
    ulName: 'js-ul4',
    todosName: 'todos4'
});
