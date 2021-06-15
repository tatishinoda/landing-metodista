$(function () {

	var link = $('#navbar a.dot');

	// Move to specific section when click on menu link
	link.on('click', function (e) {
		var target = $($(this).attr('href'));
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 600);
		$(this).addClass('active');
		e.preventDefault();
	});

	// Run the scrNav when scroll
	$(window).on('scroll', function () {
		scrNav();
	});

	// scrNav function 
	// Change active dot according to the active section in the window
	function scrNav() {
		var sTop = $(window).scrollTop();
		$('section').each(function () {
			var id = $(this).attr('id'),
				offset = $(this).offset().top - 1,
				height = $(this).height();
			if (sTop >= offset && sTop < offset + height) {
				link.removeClass('active');
				$('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
			}
		});
	}
	scrNav();
});

//MODAL 

$("#modal__state").change(function () {
	$(".tabs").toggle();
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}


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
		});