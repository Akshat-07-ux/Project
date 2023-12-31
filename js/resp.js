burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', ()=>{
     rightNav.classList.toggle('v-class-resp');
     navList.classList.toggle('v-class-resp');
     navbar.classList.toggle('h-nav-resp');
})

function submitForm() {
     // Perform form submission processing here (e.g., send data to a server)
 
     // Redirect to the main page (index.html) after submission
     window.location.href = 'index.html';
 }


    
 