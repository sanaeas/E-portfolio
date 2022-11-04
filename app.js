// template_vcy23fp
// service_r9qhxpy
// vokDZ_2EC3M5g1460


function toggleModal() {
    return document.body.classList.toggle("modal__open");
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm('service_r9qhxpy', 'template_vcy23fp', event.target, 'vokDZ_2EC3M5g1460')
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
              "The email service is temporarily unavailable. Please contact me directly on sanaassim1@gmail.com"
            );
        });
}

function toggleContrast() {
    return document.body.classList.toggle("dark-theme");
}