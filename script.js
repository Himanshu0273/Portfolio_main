	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    };

    $(document).ready(function() {
        $('#custom-button').click(function() {
          $.ajax({
            type: 'POST',
            url: 'https://hook.us1.make.com/f55u27geiavdxh03q0m1q6n5cdlgmy9j', // Replace with your actual webhook URL
            data: $('#contact-form').serialize(),
            success: function(response) {
              // Handle success (e.g., show a thank-you message)
              console.log('Form submitted successfully:', response);
              // Reset the form after submission
              document.getElementById('contact-form').reset();
            },
            error: function(error) {
              // Handle errors (e.g., display an error message)
              console.error('Form submission failed:', error);
            }
          });
        });
      });