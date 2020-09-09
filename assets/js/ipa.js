//--------------------------------
	// Cursos EAD
var poloEad = {
	'Administração': ['Porto Alegre'],
	'Análise e Desenvolvimento de Sistemas': ['Porto Alegre'],
	'Ciências Contábeis': ['Porto Alegre'],
	'Ciência de Dados e Big Data': ['Porto Alegre'],
	'Comunicação Digital e Redes Sociais': ['Porto Alegre'],
	'Educação Física Bacharelado': ['Porto Alegre'],
	'Educação Física Licenciatura': ['Porto Alegre'],
	'Engenharia Civil': ['Porto Alegre'],
	'Engenharia de Computação': ['Porto Alegre'],
	'Engenharia de Produção': ['Porto Alegre'],
	'Gestão Ambiental': ['Porto Alegre'],
	'Gestão Comercial': ['Porto Alegre'],
	'Gestão de Recursos Humanos': ['Porto Alegre'],
	'Gestão de Seguros': ['Porto Alegre'],
	'Gestão Financeira': ['Porto Alegre'],
	'Gestão Pública': ['Porto Alegre'],
	'Jogos Digitais': ['Porto Alegre'],
	'Jornalismo': ['Porto Alegre'],
	'Logística': ['Porto Alegre'],
   'Marketing': ['Porto Alegre'],
   'Nutrição': ['Porto Alegre'],
	'Pedagogia': ['Porto Alegre'],
	'Processos Gerenciais': ['Porto Alegre'],
	'Produção Audiovisual': ['Porto Alegre'],
	'Produção Multimídia': ['Porto Alegre'],
	'Produção Publicitária': ['Porto Alegre'],
	'Segurança Pública': ['Porto Alegre'],
	'Serviço Social': ['Porto Alegre'],
	'Teologia': ['Porto Alegre']
   
};

//----------------------------------//
// Cursos Presenciais
var cursosPresencial = {
   'Administração': ['Noturno'],
   'Arquitetura e Urbanismo': ['Noturno', 'Integral'],
   'Biomedicina': ['Noturno'],
   'Ciências Contábeis': ['Noturno'],
   'Design de Interiores': ['Noturno'],
   'Direito': [ 'Noturno'],
   'Educação Física': ['Noturno'],
   'Enfermagem': ['Noturno'],
   'Engenharia Civil': ['Noturno'],
   'Farmácia': ['Noturno'],
   'Fisioterapia': ['Noturno'],
   'Música': ['Noturno'],
   'Nutrição': ['Noturno'],
   'Pedagogia': ['Noturno'],
   'Psicologia': ['Noturno'],
   'Publicidade e Propaganda': ['Noturno']
};
var campusPresencial = {
   'Administração': ['IPA'],
   'Arquitetura e Urbanismo': ['IPA'],
   'Biomedicina': ['IPA'],
   'Ciências Contábeis': ['IPA'],
   'Design de Interiores': ['IPA'],
   'Direito': [ 'IPA'],
   'Educação Física': ['IPA'],
   'Enfermagem': ['IPA'],
   'Engenharia Civil': ['IPA'],
   'Farmácia': ['IPA'],
   'Fisioterapia': ['IPA'],
   'Música': ['IPA'],
   'Nutrição': ['IPA'],
   'Pedagogia': ['IPA'],
   'Psicologia': ['IPA'],
   'Publicidade e Propaganda': ['IPA']
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