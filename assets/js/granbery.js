//--------------------------------
	// Cursos EAD
var poloEad = {
	'Administração': ['Juiz de Fora'],
	'Análise e Desenvolvimento de Sistemas': ['Juiz de Fora'],
	'Ciências Contábeis': ['Juiz de Fora'],
	'Ciência de Dados e Big Data': ['Juiz de Fora'],
	'Comunicação Digital e Redes Sociais': ['Juiz de Fora'],
	'Educação Física Bacharelado': ['Juiz de Fora'],
	'Educação Física Licenciatura': ['Juiz de Fora'],
	'Engenharia Civil': ['Juiz de Fora'],
	'Engenharia de Computação': ['Juiz de Fora'],
	'Engenharia de Produção': ['Juiz de Fora'],
	'Gestão Ambiental': ['Juiz de Fora'],
	'Gestão Comercial': ['Juiz de Fora'],
	'Gestão de Recursos Humanos': ['Juiz de Fora'],
	'Gestão de Seguros': ['Juiz de Fora'],
	'Gestão Financeira': ['Juiz de Fora'],
	'Gestão Pública': ['Juiz de Fora'],
	'Jogos Digitais': ['Juiz de Fora'],
	'Jornalismo': ['Juiz de Fora'],
	'Logística': ['Juiz de Fora'],
	'Marketing': ['Juiz de Fora'],
	'Pedagogia': ['Juiz de Fora'],
	'Processos Gerenciais': ['Juiz de Fora'],
	'Produção Audiovisual': ['Juiz de Fora'],
	'Produção Multimídia': ['Juiz de Fora'],
	'Produção Publicitária': ['Juiz de Fora'],
	'Segurança Pública': ['Juiz de Fora'],
	'Serviço Social': ['Juiz de Fora'],
	'Teologia': ['Juiz de Fora']
   
};

//----------------------------------//
// Cursos Presenciais
var cursosPresencial = {
   'Administração': ['Noturno'],
   'Arquitetura e Urbanismo': ['Noturno'],
   'Direito': ['Matutino', 'Noturno'],
   'Educação Física': ['Noturno'],
   'Engenharia Civil': ['Noturno'],
   'Pedagogia': ['Noturno'],
   'Psicologia': ['Noturno'],
   'Sistemas de Informação': ['Noturno']
};
var campusPresencial = {
   'Administração': ['Granbery'],
   'Arquitetura e Urbanismo': ['Granbery'],
   'Direito': ['Granbery'],
   'Educação Física': ['Granbery'],
   'Engenharia Civil': ['Granbery'],
   'Pedagogia': ['Granbery'],
   'Psicologia': ['Granbery'],
   'Sistemas de Informação': ['Granbery']
};

// --------------- EAD ------------------
// Quando muda o curso, muda o turno
$('#cursosEad').on('change', function () {
   // Define o valor como variável
   var selectValue = $(this).val();
   // Limpa o campo e adiciona o primeiro item
   $('#poloEad').empty();
   $('#poloEad').append("<option value='' disabled selected>Selecione o polo</option>");
   // items dentro de cada select
   for (i = 0; i < poloEad[selectValue].length; i++) {
      // retorno dos itens
      $('#poloEad').append("<option value='" + poloEad[selectValue][i] + "'>" + poloEad[selectValue][i] + "</option>");
   }
});

// --------------- Presencial -------------------------
// Quando muda o curso, muda o turno
$('#cursosPresencial').on('change', function() {
 // Define o valor como variável
   var selectValue = $(this).val();
   // Limpa o campo e adiciona o primeiro item
   $('#turnoPresencial').empty();
   $('#turnoPresencial').append("<option value='default' disabled selected>Selecione o turno</option>");
   // items dentro de cada select
   for (i = 0; i < cursosPresencial[selectValue].length; i++) {
      // retorno dos itens
      $('#turnoPresencial').append("<option value='" + cursosPresencial[selectValue][i] + "'>" + cursosPresencial[selectValue][i] + "</option>");
   }
});
// Quando muda o curso, muda o campus
$('#cursosPresencial').on('change', function () {
   // Define o valor como variável
   var selectValue = $(this).val();
   // Limpa o campo e adiciona o primeiro item
   $('#campusPresencial').empty();
   $('#campusPresencial').append("<option value='default' disabled selected>Selecione o Campus</option>");
   // items dentro de cada select
   for (i = 0; i < campusPresencial[selectValue].length; i++) {
      // retorno dos itens
      $('#campusPresencial').append("<option value='" + campusPresencial[selectValue][i] + "'>" + campusPresencial[selectValue][i] + "</option>");
   }
});

// Curso Direito - Unimep
// $('#campusPresencial').on('change', function enableElements() {
//    // verifica a condição
//    if ($('#cursosPresencial').val() == "Direito" && $('#campusPresencial').val() == "Taquaral") {
//       // desativa quando necessário
//       $("#turnoPresencial").children().each(function () {
//          if ($(this).val() == 'Matutino') {
//             $(this).prop('disabled', false);
//          }
//       });
//    } else {
//       $("#turnoPresencial").children().each(function () {
//          if ($(this).val() == 'Matutino') {
//             $(this).prop('disabled', true);
//          }
//       });   
//    }
// });