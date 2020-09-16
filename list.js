$(document).ready(function () {
  
  $("#add").click(function(){
    $("#todo-list").append(`
    <tr style='tr:nth-child(even) {background-color: #f2f2f2;}'>
      <td>${$('#title').val()}</td>
      <td>${$('#rating').val()}</td>
      <td><button class="remove" style="color:white;background:red">Delete</button></td>
    </tr>
    `)
  });
  
  $(document).on("click", "button.remove", function(){
    $(this).parent().parent().remove();  
  })
});

