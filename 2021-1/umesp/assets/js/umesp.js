<<<<<<< HEAD
// DDD MASK
   function inputHandler(masks, max, event) {
      var c = event.target;
      var v = c.value.replace(/\D/g, "");
      var m = c.value.length > max ? 1 : 0;
      VMasker(c).unMask();
      VMasker(c).maskPattern(masks[m]);
      c.value = VMasker.toPattern(v, masks[m]);
   }

   var telMask = ["(99) 9999-99999", "(99) 99999-9999"];
   var tel = document.querySelector("input#mobilephone");
   VMasker(tel).maskPattern(telMask[0]);
   tel.addEventListener("input", inputHandler.bind(undefined, telMask, 14), false);


$("[name=crmeduc_modalidade_interesse]").on("change", function () {
        // Verifica qual opção escolhida e exibe os campos de acordo
        if (this.value == "191.030.002") {
          $("#cursoEad").attr("required");
          $("#cursosPresencial").removeAttr("required");
          document.getElementById("campos-presencial").style.display = "none";
          document.getElementById("campos-ead").style.display = "block";
          $("input#crmeduc_campus_interesse").val("191.030.006");
        } else {
          $("#cursosPresencial").attr("required");
          $("#cursoEad").removeAttr("required");
          document.getElementById("campos-ead").style.display = "none";
          document.getElementById("campos-presencial").style.display = "block";
          $("input#crmeduc_campus_interesse").val("191.030.002");
        }
        $("form").parsley().reset();
    });
    

//Submit Form
   // this is the id of the form
   $("#form-estrangeiro").submit(function (e) {
      e.preventDefault(); // avoid to execute the actual submit of the form.

      var form = $(this);
      var url = form.attr("action");

      $.ajax({
         type: "POST",
         url: url,
         data: form.serialize(), // serializes the form's elements.
         success: function () {
            alert("Dados Enviados com Sucesso"); // show response from the php script.
            $('#form-estrangeiro')[0].reset();
         }
      });
=======
// DDD MASK
   function inputHandler(masks, max, event) {
      var c = event.target;
      var v = c.value.replace(/\D/g, "");
      var m = c.value.length > max ? 1 : 0;
      VMasker(c).unMask();
      VMasker(c).maskPattern(masks[m]);
      c.value = VMasker.toPattern(v, masks[m]);
   }

   var telMask = ["(99) 9999-99999", "(99) 99999-9999"];
   var tel = document.querySelector("input#mobilephone");
   VMasker(tel).maskPattern(telMask[0]);
   tel.addEventListener("input", inputHandler.bind(undefined, telMask, 14), false);


$("[name=crmeduc_modalidade_interesse]").on("change", function () {
        // Verifica qual opção escolhida e exibe os campos de acordo
        if (this.value == "191.030.002") {
          $("#cursoEad").attr("required");
          $("#cursosPresencial").removeAttr("required");
          document.getElementById("campos-presencial").style.display = "none";
          document.getElementById("campos-ead").style.display = "block";
          $("input#crmeduc_campus_interesse").val("191.030.006");
        } else {
          $("#cursosPresencial").attr("required");
          $("#cursoEad").removeAttr("required");
          document.getElementById("campos-ead").style.display = "none";
          document.getElementById("campos-presencial").style.display = "block";
          $("input#crmeduc_campus_interesse").val("191.030.002");
        }
        $("form").parsley().reset();
    });
    

//Submit Form
   // this is the id of the form
   $("#form-estrangeiro").submit(function (e) {
      e.preventDefault(); // avoid to execute the actual submit of the form.

      var form = $(this);
      var url = form.attr("action");

      $.ajax({
         type: "POST",
         url: url,
         data: form.serialize(), // serializes the form's elements.
         success: function () {
            alert("Dados Enviados com Sucesso"); // show response from the php script.
            $('#form-estrangeiro')[0].reset();
         }
      });
>>>>>>> atualização de arquivos
   });