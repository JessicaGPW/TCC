document.getElementById('footer__form').addEventListener('submit', function(event) {

   $('.footer__form-button').on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host: "smtp.yourisp.com",
            Username: "username",
            Password: "password",
            To: 'them@website.com',
            From: email,
            Subject: "Please add me on your's newsletter",
            Body: 'Hi, whould you like add me? My email is ${email}. Thank you!',
        }).then(
            message => alert(message)
        );
    });
}

    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

 
    
