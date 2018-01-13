

// TODO_LIST ***
var List = {
  todos: [],
  // displayTodos method to console

  // displayTodos: function() {
  //   if(this.todos.length === 0) {
  //     console.log('Пустий список');
  //   } else {
  //     console.log('МІЙ СПИСОК:');
  //       for (var i = 0; i < this.todos.length; i++) {
  //         // check toggle completed;
  //         if (this.todos[i].completed == true) {
  //           console.log('(x)' + ' ' + this.todos[i].todoText);
  //         } else {
  //           console.log('( )', this.todos[i].todoText);
  //         }
  //       }
  //   }
  //
  // },

  // add new todos ;
  addTodo: function(todoText) {
    var inPut = document.getElementById('addTodoTextInput');
    if (todoText !== '') {
      inPut.classList.remove('add');
      this.todos.push({
          todoText: todoText,
          completed: false
    }

    );
  } else {
    inPut.setAttribute("value", "rtytryty");
    inPut.classList.add('add');

  }


  },
  //changeTodo method;
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  //delete todos method;
  deleteTodo: function(position) {
    this.todos.splice(position,1);
  },
  //toggleComplete
  toggleComplete: function(position) {
    todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  //toggle ALL
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var compleatedTodos = 0;

    // check if totalTodos is: true
    this.todos.forEach(function (todo) {
      if (todo.completed === true) {
        compleatedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
    // if everything is - true, make compleatedTodos - false;
      if (compleatedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });

  }
};


var handlers = {

  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    List.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    List.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();

  },
  deleteTodo: function (position) {
    List.deleteTodo(position);
    view.displayTodos();

  },

  toggleCompleted: function () {
    var toggleCompletePositionInput = document.getElementById('toggleCompletePositionInput');
    List.toggleComplete(toggleCompletePositionInput.valueAsNumber);
    toggleCompletePositionInput.valueAsNumber = '';
    view.displayTodos();

  },
  toggleAllButton: function() {
    List.toggleAll()
    view.displayTodos();

  }
};


var view = {

  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    List.todos.forEach(function (toDo, position) {
      //view display// creates every 'li' element;
      var todoLI = document.createElement('li');
      var toDoTextWCompletition = '';
      if (toDo.completed === true) {
        toDoTextWCompletition = '(x) ' + toDo.todoText;
      } else {
        toDoTextWCompletition = '( ) ' + toDo.todoText;
      }
      todoLI.id = position;
      todoLI.textContent = toDoTextWCompletition;
      todoLI.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLI);
    }, this)
  },



  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'видалити';
    deleteButton.className = 'deleteButton';
    return deleteButton;

  },
  setUpEventListenet: function () {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function (event) {
      console.log(event);
      // get the element, that was clicked on;
      var elementClicked = event.target;
      // check if clicked el was delete Button;
      if (elementClicked.className === 'deleteButton') {
        //run handlers
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));

      }
    })

  }
};

view.setUpEventListenet();
