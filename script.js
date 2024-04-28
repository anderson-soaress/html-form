const password = document.querySelector("#password")
const confirm_password = document.querySelector("#confirm_password")
const btn_submit = document.querySelector(".btn-submit")
const invalid_password_msg = document.querySelector(".invalid_password")
const form = document.querySelector(".register")

btn_submit.addEventListener("click", () => {
    if (password.value == confirm_password.value){
        form.submit()
    } else {
        invalid_password_msg.style.display = 'inline'
    }
})