//--------------------------------
	// Cursos EAD
var poloEad = {
	'Administração': ['Praça da Liberdade'],
	'Análise e Desenvolvimento de Sistemas': ['Praça da Liberdade'],
	'Ciências Contábeis': ['Praça da Liberdade'],
	'Ciência de Dados e Big Data': ['Praça da Liberdade'],
	'Comunicação Digital e Redes Sociais': ['Praça da Liberdade'],
	'Educação Física Bacharelado': ['Praça da Liberdade'],
	'Educação Física Licenciatura': ['Praça da Liberdade'],
	'Engenharia Civil': ['Praça da Liberdade'],
	'Engenharia de Computação': ['Praça da Liberdade'],
	'Engenharia de Produção': ['Praça da Liberdade'],
	'Gestão Ambiental': ['Praça da Liberdade'],
	'Gestão Comercial': ['Praça da Liberdade'],
	'Gestão de Recursos Humanos': ['Praça da Liberdade'],
	'Gestão de Seguros': ['Praça da Liberdade'],
	'Gestão Financeira': ['Praça da Liberdade'],
	'Gestão Pública': ['Praça da Liberdade'],
	'Jogos Digitais': ['Praça da Liberdade'],
	'Jornalismo': ['Praça da Liberdade'],
	'Logística': ['Praça da Liberdade'],
   'Marketing': ['Praça da Liberdade'],
   'Nutrição': ['Praça da Liberdade'],
	'Pedagogia': ['Praça da Liberdade'],
	'Processos Gerenciais': ['Praça da Liberdade'],
	'Produção Audiovisual': ['Praça da Liberdade'],
	'Produção Multimídia': ['Praça da Liberdade'],
	'Produção Publicitária': ['Praça da Liberdade'],
	'Segurança Pública': ['Praça da Liberdade'],
	'Serviço Social': ['Praça da Liberdade'],
	'Teologia': ['Praça da Liberdade']
   
};

//----------------------------------//
// Cursos Presenciais
var cursosPresencial = {
   'Administração': ['Noturno'],
   'Arquitetura e Urbanismo': ['Noturno', 'Integral'],
   'Bioinformática': ['Noturno'],
   'Biomedicina': ['Noturno'],
   'Ciência da Computação': ['Noturno'],
   'Ciências Biológicas': ['Noturno'],
   'Ciências Contábeis': ['Noturno'],
   'Ciências de Dados': ['Noturno'],
   'Design de Interiores': ['Noturno'],
   'Direito': [ 'Noturno'],
   'Educação Física': ['Noturno'],
   'Enfermagem': ['Noturno'],
   'Engenharia Biomédica': ['Noturno'],
   'Engenharia Civil': ['Noturno'],
   'Farmácia': ['Noturno'],
   'Fisioterapia': ['Noturno'],
   'Medicina Veterinária': ['Noturno'],
   'Pedagogia': ['Noturno'],
   'Psicologia': ['Noturno'],
   'Teologia': ['Noturno']
};
var campusPresencial = {
   'Administração': ['Izabela Hendrix'],
   'Arquitetura e Urbanismo': ['Izabela Hendrix'],
   'Bioinformática': ['Izabela Hendrix'],
   'Biomedicina': ['Izabela Hendrix'],
   'Ciência da Computação': ['Izabela Hendrix'],
   'Ciências Biológicas': ['Izabela Hendrix'],
   'Ciências Contábeis': ['Izabela Hendrix'],
   'Ciências de Dados': ['Izabela Hendrix'],
   'Design de Interiores': ['Izabela Hendrix'],
   'Direito': [ 'Izabela Hendrix'],
   'Educação Física': ['Izabela Hendrix'],
   'Enfermagem': ['Izabela Hendrix'],
   'Engenharia Biomédica': ['Izabela Hendrix'],
   'Engenharia Civil': ['Izabela Hendrix'],
   'Farmácia': ['Izabela Hendrix'],
   'Fisioterapia': ['Izabela Hendrix'],
   'Medicina Veterinária': ['Izabela Hendrix'],
   'Pedagogia': ['Izabela Hendrix'],
   'Psicologia': ['Izabela Hendrix'],
   'Teologia': ['Izabela Hendrix']
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