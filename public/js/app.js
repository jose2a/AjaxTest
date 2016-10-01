$(document).ready(function () {

    // Adding click event to the button
	var btnPhrase = $('#btnPhrase');

	btnPhrase.click(function (e) {
        e.preventDefault();
        showQuote();
	});

	// Function that will get the quotes from the server using jQuery
	function showQuote() {
        $.get('quote/random', function (data, status) {
            console.log(status);
            $('#quote').html(data.text);
            $('#author').html(data.author);
        });
	}

	showQuote();

});