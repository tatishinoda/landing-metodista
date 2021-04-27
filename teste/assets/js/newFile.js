//Submit Form
// this is the id of the form
$("#form-estrangeiro").submit(function (e) {
   e.preventDefault(); // avoid to execute the actual submit of the form.

   var form = $(this);
   var url = form.attr("action");

   $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function () {
         alert("Dados Enviados com Sucesso"); // show response from the php script.
         $('#form-estrangeiro')[0].reset();
      }
   });
});
