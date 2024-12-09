const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


const activePage = () => {
    const header = document.querySelector('header');

    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
}, 1100);


    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
}, 1100);


sections.forEach(section => {
    section.classList.remove('active');
});
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
        activePage();

        link.classList.add('active');

        setTimeout(() => {
            sections[idx].classList.add('active');
        }, 1100);
    }
});
});

logoLink.addEventListener('click', () =>{
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');


        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});


// const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
// const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');


// Let index = 0;

// const activePortfolio = () => {
//     const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

//     imgSlide.style.transform = 'translateX(calc(${index * -100}% - ${index * 2}rem))';
// }

// arrowRight.addEventListener('click', () => {
//     if (index < 4) {
//         index++;
//     }
//     else {
//         index = 5;
//         arrowRight.classList.add('disabled');
//     }

//     activePortfolio();
// });

// arrowLeft.addEventListener('click', () => {
//     if (index > 1) {
//         index--;
//         arrowRight.classList.remove('disabled');

//     }
//     else {
//         index = 0;
//     }

//     activePortfolio();
// });





// Select DOM elements
const portfolioCarousel = document.querySelector('.portfolio-carousel .img-slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

// Initialize variables
let currentIndex = 0;

// Function to update the carousel's position
function updateCarousel() {
    const itemWidth = portfolioCarousel.children[0].offsetWidth; // Width of a single item
    const portfolioDetails = document.querySelectorAll('portfolio-detail');

    portfolioCarousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
    
}

// Event listeners for the navigation buttons
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        rightArrow.classList.remove('disabled');
        updateCarousel();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < portfolioCarousel.children.length - 1) {
        currentIndex++;
        leftArrow.classList.remove('disabled');
        updateCarousel();
    }
});

// Ensure proper layout when the window resizes
window.addEventListener('resize', updateCarousel);



//contact form

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        subject : document.getElementById("number").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_hcc2cf8, template_0eskcrq",parms).then(alert("Email Sent!!"))

}


