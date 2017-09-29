$(function() {

    $('form input[type=submit]').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/koldovsky@gmail.com",
            method: "POST",
            data: { 
                clientName: $('#client-name').val(),
                accountBalance: $('#account-balance').val()},
            dataType: "json"
        });
    });

});