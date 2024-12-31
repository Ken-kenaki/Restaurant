const faqQuestion = document.querySelectorAll('.faq-question');



faqQuestion.forEach(faq => {
    faq.addEventListener('click', () => {
        // faqAnswer.forEach(answer => {
            faq.classList.toggle('active-faq');
        });
    });
// });