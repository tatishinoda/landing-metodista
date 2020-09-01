// Cursos EAD
var poloEad = {
   'Administração': ['Santa Maria'],
   'Análise e Desenvolvimento De Sistemas': ['Santa Maria'],
   'Ciência de Dados e Big Data': ['Santa Maria'],
   'Ciências Contábeis': ['Santa Maria'],
   'Comunicação Digital e Redes Sociais': ['Santa Maria'],
   'Educação Física (Bacharelado)': ['Santa Maria'],
   'Educação Física (Licenciatura)': ['Santa Maria'],
   'Gestão Ambiental': ['Santa Maria'],
   'Gestão Comercial': ['Santa Maria'],
   'Gestão de Recursos Humanos': ['Santa Maria'],
   'Gestão de Seguros': ['Santa Maria'],
   'Gestão Financeira': ['Santa Maria'],
   'Gestão Pública': ['Santa Maria'],
   'Jogos Digitais': ['Santa Maria'],
   'Jornalismo': ['Santa Maria'],
   'Logística': ['Santa Maria'],
   'Marketing': ['Santa Maria'],
   'Pedagogia': ['Santa Maria'],
   'Processos Gerenciais': ['Santa Maria'],
   'Produção Audiovisual': ['Santa Maria'],
   'Produção Multimídia': ['Santa Maria'],
   'Produção Publicitária': ['Santa Maria'],
   'Segurança Pública': ['Santa Maria'],
   'Serviço Social': ['Santa Maria'],
   'Teologia': ['Santa Maria']
};

//----------------------------------//
// Cursos Presenciais
var cursosPresencial = {
   'Ciências Contábeis': ['manhã', 'noite'],
   'Direito': ['manhã', 'tarde', 'noite'],
   'Educação Física': ['manhã', 'tarde', 'noite'],
   'Gestão de Recursos Humanos': ['manhã', 'tarde', 'noite'],
   'Logística': ['manhã', 'tarde', 'noite']
};
var campusPresencial = {
   'Ciências Contábeis': ['Centenário'],
   'Direito': ['Centenário'],
   'Educação Física': ['Centenário'],
   'Gestão de Recursos Humanos': ['Centenário'],
   'Logística': ['Centenário']
};

// --------------- EAD ------------------
// Quando muda o curso, muda o turno
$('#cursosEad').on('change', function () {
   // Define o valor como variável
   var selectValue = $(this).val();
   // Limpa o campo e adiciona o primeiro item
   $('#poloEad').empty();
   $('#poloEad').append("<option value='' disabled selected>POLO</option>");
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
   $('#turnoPresencial').append("<option value='' disabled selected>TURNO</option>");
   // items dentro de cada select
   for (i = 0; i < cursosPresencial[selectValue].length; i++) {
      // retorno dos itens
      $('#turnoPresencial').append("<option value='" + cursosPresencial[selectValue][i] + "'>" + cursosPresencial[selectValue][i] + "</option>");
   }
});
// Quando muda o curso, muda o turno
$('#cursosPresencial').on('change', function () {
   // Define o valor como variável
   var selectValue = $(this).val();
   // Limpa o campo e adiciona o primeiro item
   $('#campusPresencial').empty();
   $('#campusPresencial').append("<option value='' disabled selected>Selecione o Campus</option>");
   // items dentro de cada select
   for (i = 0; i < campusPresencial[selectValue].length; i++) {
      // retorno dos itens
      $('#campusPresencial').append("<option value='" + campusPresencial[selectValue][i] + "'>" + campusPresencial[selectValue][i] + "</option>");
   }
});