// let Status = "close";
// let Light = document.querySelector(".light");
// let Input_password = document.querySelector("#input-password");
// let Password_label = document.querySelector(".password-label");
// let icon = document.querySelector(".icon");
// icon.addEventListener(("click"),()=>{
//     if(Status == "close"){
//         Light.style.display = "none"
//         Input_password.type = "text"
//         Input_password.style.color = "black"
//         if(Input_password.value.lenght == 0) Password_label.style.color = "black";
//         Status = "open";
//     }else{
//         Light.style.display = "none";
//         Password_label.style.color = "white";
//         Input_password.type = "password"
//         Input_password.style.color = "white"
//         Status = "close";
//     }
// })

let Status = "close";
let Light = document.querySelector(".light");
let Input_password = document.querySelector("#input-password");
let Password_label = document.querySelector(".password-label");
let icon = document.querySelector(".icon");
let inputBox = document.querySelector(".input-box");

icon.addEventListener("click", () => {
    if (Status == "close") {
        Light.style.display = "unset";
        Status = "open";
    } else {
        Light.style.display = "none";
        Status = "close";
    }

    // Adiciona ou remove a classe 'active' no contêiner para ativar ou desativar estilos relacionados à luz
    inputBox.classList.toggle('active', Status === 'open');
});
