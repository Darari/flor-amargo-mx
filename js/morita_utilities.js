$(document).ready(function() {

    $("#Contacto_btn").click(function(){

        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var msg_subject = $("#message").val();

        var valid01 = 1;
        var valid02 = 1;
        var valid03 = 1;
        var valid04 = 1;

        
        if(name.length != 0){
            $('#name').css("border-color", "#a6a6a6");
            $('#name').css("border-width", "1px");
            valid01 = 1;
        } else{
            $('#name').css("border-color", "#f65275");
            $('#name').css("border-width", "4px");
            valid01 = 0;
        }
        
        if(phone.length != 0){
            $('#phone').css("border-color", "#a6a6a6");
            $('#phone').css("border-width", "1px");
            valid02 = 1;
        } else{
            $('#phone').css("border-color", "#f65275");
            $('#phone').css("border-width", "4px");
            valid02 = 0;
        }
        
        if(email.length != 0){
            $('#email').css("border-color", "#a6a6a6");
            $('#email').css("border-width", "1px");
            valid03 = 1;
        } else{
            $('#email').css("border-color", "#f65275");
            $('#email').css("border-width", "4px");
            valid03 = 0;
        }
        
        if(msg_subject.length > 0){
            $('#message').css("border-color", "#a6a6a6");
            $('#message').css("border-width", "1px");
            valid04 = 1;
        } else{
            $('#message').css("border-color", "#f65275");
            $('#message').css("border-width", "4px");
            valid04 = 0;
        }

        if(valid01 == 1 && valid02 == 1 && valid03 == 1 && valid04 == 1) {

            $.contactForm = {
                Nombre: name,
                Telefono: phone,
                Correo: email,
                Mensaje: msg_subject
            };

            swal({
                title: '<br /><div class="sk-spinner sk-spinner-chasing-dots"> <div class="sk-dot1"></div><div class="sk-dot2"></div></div><br />',
                text: "Enviando información...",
                allowEscapeKey: false,
                showConfirmButton: false
            })
            
            ServiceHandler.SendMail($.contactForm,function(response){
                swal({
                    title: '¡Muchas gracias!',
                    text: '¡Gracias por suscribirte! Te llegará a tu correo información sobre mis próximos lanzammientos, presentaciones y muchas sorpresas más..',
                    text: 'En breve analizaremos tu información y te contactaremos..',
                    timer: 9000
                }).then(
                    function () {
                        window.location.href = "https://www.floramargo.mx/";
                    }, function (dismiss) {
                        window.location.href = "https://www.floramargo.mx/";
                    }
                );
            });

        } else {
            swal("Datos incompletos","Revisa los datos y vuelve a intentar.","warning");
        }
    });

});