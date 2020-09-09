//--------------------------------
	// Cursos EAD
var poloEad = {
	'Administração': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Análise e Desenvolvimento de Sistemas': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Ciências Contábeis': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Ciência de Dados e Big Data': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Comunicação Digital e Redes Sociais': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Educação Física Bacharelado': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Educação Física Licenciatura': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Engenharia Civil': ['Santa Bárbara do Oeste'],
	'Engenharia de Computação': ['Santa Bárbara do Oeste'],
	'Engenharia de Produção': ['Santa Bárbara do Oeste'],
	'Gestão Ambiental': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Gestão Comercial': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Gestão de Recursos Humanos': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Gestão de Seguros': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Gestão Financeira': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Gestão Pública': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Jogos Digitais': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Jornalismo': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Logística': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Marketing': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Nutrição': ['Piracicaba Taquaral'],
	'Pedagogia': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Processos Gerenciais': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Produção Audiovisual': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Produção Multimídia': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Produção Publicitária': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Segurança Pública': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Serviço Social': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro'],
	'Teologia': ['Piracicaba Taquaral', 'Santa Bárbara do Oeste', 'Piracicaba Centro']
   
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