window.onload = function() {
    generateAndDisplayCaptcha();
};

let btn = document.getElementById('generate_btn');
let fillBtn = document.getElementById('fill_btn');
let captcha;

btn.addEventListener('click', function() {
    generateAndDisplayCaptcha();
});

fillBtn.addEventListener('click', function() {
    document.getElementById('text_input').value = captcha;
});

function generateAndDisplayCaptcha() {
    captcha = generate_captcha(5);
    document.getElementById('captcha').innerText = captcha;
}

function generate_captcha(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

let input_text;
let input = document.getElementById('input');
input.addEventListener('submit', function(event) {
    event.preventDefault();
    input_text = document.getElementById('text_input').value;
    let captcha_verification_result = document.getElementById('captcha_verification_result');
    
    captcha_verification_result.classList.remove("right", "error");
    
    if (captcha === input_text) {
        captcha_verification_result.classList.add("right");
        captcha_verification_result.innerText = "Correct! ✅";
    } else {
        captcha_verification_result.classList.add("error");
        captcha_verification_result.innerText = "Try Again! ❌";
    }
});
