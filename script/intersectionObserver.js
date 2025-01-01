const header = document.querySelector('.header-container');
const sectionOne = document.querySelector('.hero-section');
const sectionTwo = document.querySelector('.services');
const sectionThree = document.querySelector('.review-section');
const sectionFour = document.querySelector('.faq-section');
const footer = document.querySelector('.footer-container');
const sections = document.querySelectorAll('section'); // Select all sections

const options = {
    threshold: 0.5,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(callBackFuntion, options);

sections.forEach(section => {
    observer.observe(section);
});

function callBackFuntion(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === sectionOne) {
                sectionOne.setAttribute('id','hero-section-active');
                console.log(sectionOne);
            }
            if (entry.target === sectionTwo) {
                sectionTwo.setAttribute('id','services-active');
                console.log(sectionTwo);
            }
            if (entry.target === sectionThree) {
                sectionThree.setAttribute('id','review-section-active');
                console.log(sectionThree);
            }
            if (entry.target === sectionFour) {
                sectionFour.setAttribute('id','faq-section-active');
                console.log(sectionFour);
            }
            if (entry.target === footer) {
                footer.setAttribute('id','footer-active');
                console.log(footer);
            }

            observer.unobserve(entry.target);
        }



    });
}




