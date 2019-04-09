$(document).ready(function(){ 			 // when the document is ready performs the functions below
        $('body').css("display","none"); // the body section is not displayed immediately after the page loads
        $('body').fadeIn(2000); // the body section appears smoothly on the screen with the fadeIn effect in 2000ms (2.0 seconds)
//above code will be executed each time the page is loaded
        $('a.transition').click(function(event){ // action which will be taken after clicking on the link with the transition class
            event.preventDefault(); // stops the default action (simple redirection to the next page)
            adres = this.href; // the variable adres takes the URL from the clicked link
            $('body').fadeOut(1000, przekierowanieStrony); /* the background disappears smoothly using the fadeOut effect.
                                                           This effect is performed over 1000ms,
                                                           and afterwards, the redirection function is called.*/    
        });
    function przekierowanieStrony() { // redirection function
        window.location = adres; // we are transferred to a new page
    }
});