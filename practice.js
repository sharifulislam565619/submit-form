document.getElementById("submit-button").addEventListener("click", function () {
    const inputName = document.getElementById("input-name").value;
    const inputEmail = document.getElementById("input-email").value
    const inputPassword = document.getElementById("input-password").value
    const radio = document.getElementById("radio")
    const radio2 = document.getElementById("radio2")
    const demo = document.getElementById("demo");
    const demo2 = document.getElementById("demo2");
    const demo3 = document.getElementById("demo3");
    demo.innerText = inputName;
    demo2.innerText = inputEmail;
    demo3.innerText = inputPassword;
    if(radio.checked){
        demo4.innerText = radio.value;

    }
    if(radio2.checked){
        demo5.innerText = radio2.value;

    }


})