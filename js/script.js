
var myFotos = new Array();
myFotos[0] = "img/painelpizzas/painelpizzas1.png";
myFotos[1] = "img/painelpizzas/painelpizzas2.png";
myFotos[2] = "img/painelpizzas/painelpizzas3.png";
myFotos[3] = "img/painelpizzas/painelpizzas4.png";
myFotos[4] = "img/painelpizzas/painelpizzas5.png";

var num = 0;

function albumPizzas() {

    len = myFotos.length;
          
    document.getElementById("painelpizzas").src = myFotos[num++];

    if (num == len) {
        num = 0;
    }

}

var myVar = setInterval(function () { albumPizzas() }, 3000);

$("document").ready( function() {
			
	$("#hamburg").click(function(e) {
					 /*$("#menu ul").show(); css("display", "")*/
					$("#menu ul").slideToggle(100);
				});
				
	/*$('#but').click(function () {

		alert("ButtonPressed")
        var _assunto = $('#assunto').val();
        var _nomeRemetente = $('#nomeRemetente').val();
        var _emailremetente = $('#emailRemetente').val();
        var _destinatario = $('#destinatario').val();
        var _mensagem = $('#mensagem').val();

        var model =
        {
            nomeCliente: "pizzaPortuga",
            assunto: _assunto,
            nomeRemetente: _nomeRemetente,
            emailRemetente: _emailremetente,
            destinatario: _destinatario,
            mensagem: _mensagem
        };

        $.ajax({
            type: "POST",
            data: JSON.stringify(model),
            url: "http://52.54.242.89:90/api/EmailAPI",
            contentType: "application/json"

        }).success(function ok() {

         $(location).attr('href', 'confirm.html')

        });

    });  */

	$('#formContato input, #formContato textarea').blur(function () {
        var Id = this.id;

        Id = "#" + Id;

        if ($(Id).val() == "") {
            //alert(Id + "Este campo é obrigatorio");

            $(Id).next().show();
        }
        else {

            $(Id).next().hide();

        };

    });
	
})



