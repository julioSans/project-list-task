$(document).ready(function(){
  // função para adicionar tarefa na lista
  function addTask(taskName) {
    $('#taskList').append('<li><input type ="checkBox">' + taskName + '</li>'); 
  }

  // submissão do formulário
  $('#taskForm').submit(function(event)  {
    event.preventDefault();
    var taskName = $('#taskInput').val(); 
    addTask(taskName); 
    $('#taskInput').val(''); // limpando o campo de entrada
  });

  // marcar/desmarcar tarefa ao clicar
  $('#taskList').on('change', 'input[type="checkbox"]', function(){
    $(this).closest('li').toggleClass('completed', this.checked); 
});  
  // limpando lista ao clicar no botão de reset 
  $('#reset-button').on('click', function() {
    $('#taskList').empty(); // essa function  remove todos os elementos filhos do elemento selecionado 
  }); 
});