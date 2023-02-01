/**
 * CTA BUTTON
 */
const ctaButton = document.querySelector('a[class="cta"]');
ctaButton.addEventListener('click', function(event){
    event.preventDefault();
    ctaButton.innerHTML = "Soon...";
})

/**
 * FORM SUBMISSION
 */
const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea');
const submitButton = document.querySelector('button[type="submit"]');
const successMessage = document.createElement('div');
const smallMessage = document.createElement('p');
const tickIcon = document.createElement('i');

if (!form || !nameInput || !emailInput || !messageInput) {
    console.error('One of the required elements is missing in the HTML');
}

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('All fields are required');
        return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }

    nameInput.remove();
    emailInput.remove();
    messageInput.remove();
    submitButton.remove();

    tickIcon.classList.add('fas', 'fa-check');
    tickIcon.style.fontSize = '48px';
    tickIcon.style.color = 'green';
    tickIcon.style.marginBottom = '20px';

    successMessage.innerHTML = 'Message sent!';
    successMessage.style.fontSize = '24px';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '20px';

    smallMessage.innerHTML = "Not really, because we cannot afford a server yet. :("
    smallMessage.style += "font-size = 12px; text-align: center; margin: 2px 5px; color: rgba(0,0,0,0);"

    form.appendChild(tickIcon);
    form.appendChild(successMessage);
    form.appendChild(smallMessage);
    setTimeout(function () {
        smallMessage.style.color = "#888888";
    }, 1000);
});