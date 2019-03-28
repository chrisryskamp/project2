// $(document).ready(function() {
//   // Getting a reference to the input field where user adds a new todo
//   var $newItemInput = $("input.new-item");
//   // Our new todos will go inside the todoContainer
//   var $todoContainer = $(".todo-container");
//   // Adding event listeners for deleting, editing, and adding todos
//   $(document).on("click", "button.delete", deleteTodo);
//   $(document).on("click", "button.complete", toggleComplete);
//   $(document).on("click", ".todo-item", editTodo);
//   $(document).on("keyup", ".todo-item", finishEdit);
//   $(document).on("blur", ".todo-item", cancelEdit);
//   $(document).on("submit", "#todo-form", insertTodo);

//   // Our initial todos array
//   var todos = [];

//   // Getting todos from database when page loads
//   getTodos();

//   // This function resets the todos displayed with new todos from the database
//   function initializeRows() {
//     $todoContainer.empty();
//     var rowsToAdd = [];
//     for (var i = 0; i < todos.length; i++) {
//       rowsToAdd.push(createNewRow(todos[i]));
//     }
//     $todoContainer.prepend(rowsToAdd);
//   }

//   // This function grabs todos from the database and updates the view
//   function getTodos() {
//     $.get("/api/todos", function(data) {
//       todos = data;
//       initializeRows();
//     });
//   }

//   // This function deletes a todo when the user clicks the delete button
//   function deleteTodo(event) {
//     event.stopPropagation();
//     var id = $(this).data("id");
//     $.ajax({
//       method: "DELETE",
//       url: "/api/todos/" + id
//     }).then(getTodos);
//   }

//   // This function handles showing the input box for a user to edit a todo
//   function editTodo() {
//     var currentTodo = $(this).data("todo");
//     $(this).children().hide();
//     $(this).children("input.edit").val(currentTodo.text);
//     $(this).children("input.edit").show();
//     $(this).children("input.edit").focus();
//   }

//   // Toggles complete status
//   function toggleComplete(event) {
//     event.stopPropagation();
//     var todo = $(this).parent().data("todo");
//     todo.complete = !todo.complete;
//     updateTodo(todo);
//   }

//   // This function starts updating a todo in the database if a user hits the "Enter Key"
//   // While in edit mode
//   function finishEdit(event) {
//     var updatedTodo = $(this).data("todo");
//     if (event.which === 13) {
//       updatedTodo.text = $(this).children("input").val().trim();
//       $(this).blur();
//       updateTodo(updatedTodo);
//     }
//   }

//   // This function updates a todo in our database
//   function updateTodo(todo) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/todos",
//       data: todo
//     }).then(getTodos);
//   }

//   // This function is called whenever a todo item is in edit mode and loses focus
//   // This cancels any edits being made
//   function cancelEdit() {
//     var currentTodo = $(this).data("todo");
//     if (currentTodo) {
//       $(this).children().hide();
//       $(this).children("input.edit").val(currentTodo.text);
//       $(this).children("span").show();
//       $(this).children("button").show();
//     }
//   }

//   // This function constructs a todo-item row
//   function createNewRow(todo) {
//     var $newInputRow = $(
//       [
//         "<li class='list-group-item todo-item'>",
//         "<span>",
//         todo.text,
//         "</span>",
//         "<input type='text' class='edit' style='display: none;'>",
//         "<button class='delete btn btn-danger'>x</button>",
//         "<button class='complete btn btn-primary'>✓</button>",
//         "</li>"
//       ].join("")
//     );

//     $newInputRow.find("button.delete").data("id", todo.id);
//     $newInputRow.find("input.edit").css("display", "none");
//     $newInputRow.data("todo", todo);
//     if (todo.complete) {
//       $newInputRow.find("span").css("text-decoration", "line-through");
//     }
//     return $newInputRow;
//   }

//   // This function inserts a new todo into our database and then updates the view
//   function insertTodo(event) {
//     event.preventDefault();
//     var todo = {
//       text: $newItemInput.val().trim(),
//       complete: false
//     };

//     $.post("/api/todos", todo, getTodos);
//     $newItemInput.val("");
//   }
// });




// $( () => {
//   $("#submit").on("click", () => {

//     $.ajax("/api/cards", {
//       type: "POST",
//       data: {
//         question: $("#question").val().trim(),
//         hint: $("#hint").val().trim(),
//         answer: $("#answer").val().trim()
//       }
//     })

//   })
// })
















































// // // Get references to page elements
// // var $exampleText = $("#example-text");
// // var $exampleDescription = $("#example-description");
// // var $submitBtn = $("#submit");
// // var $exampleList = $("#example-list");

// // // The API object contains methods for each kind of request we'll make
// // var API = {
// //   saveExample: function(example) {
// //     return $.ajax({
// //       headers: {
// //         "Content-Type": "application/json"
// //       },
// //       type: "POST",
// //       url: "api/examples",
// //       data: JSON.stringify(example)
// //     });
// //   },
// //   getExamples: function() {
// //     return $.ajax({
// //       url: "api/examples",
// //       type: "GET"
// //     });
// //   },
// //   deleteExample: function(id) {
// //     return $.ajax({
// //       url: "api/examples/" + id,
// //       type: "DELETE"
// //     });
// //   }
// // };

// // // refreshExamples gets new examples from the db and repopulates the list
// // var refreshExamples = function() {
// //   API.getExamples().then(function(data) {
// //     var $examples = data.map(function(example) {
// //       var $a = $("<a>")
// //         .text(example.text)
// //         .attr("href", "/example/" + example.id);

// //       var $li = $("<li>")
// //         .attr({
// //           class: "list-group-item",
// //           "data-id": example.id
// //         })
// //         .append($a);

// //       var $button = $("<button>")
// //         .addClass("btn btn-danger float-right delete")
// //         .text("ｘ");

// //       $li.append($button);

// //       return $li;
// //     });

// //     $exampleList.empty();
// //     $exampleList.append($examples);
// //   });
// // };

// // // handleFormSubmit is called whenever we submit a new example
// // // Save the new example to the db and refresh the list
// // var handleFormSubmit = function(event) {
// //   event.preventDefault();

// //   var example = {
// //     text: $exampleText.val().trim(),
// //     description: $exampleDescription.val().trim()
// //   };

// //   if (!(example.text && example.description)) {
// //     alert("You must enter an example text and description!");
// //     return;
// //   }

// //   API.saveExample(example).then(function() {
// //     refreshExamples();
// //   });

// //   $exampleText.val("");
// //   $exampleDescription.val("");
// // };

// // // handleDeleteBtnClick is called when an example's delete button is clicked
// // // Remove the example from the db and refresh the list
// // var handleDeleteBtnClick = function() {
// //   var idToDelete = $(this)
// //     .parent()
// //     .attr("data-id");

// //   API.deleteExample(idToDelete).then(function() {
// //     refreshExamples();
// //   });
// // };

// // // Add event listeners to the submit and delete buttons
// // $submitBtn.on("click", handleFormSubmit);
// // $exampleList.on("click", ".delete", handleDeleteBtnClick);
