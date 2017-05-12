var imprimicion = document.getElementById("clientes");

function mostrarData(){
	var owner = document.getElementById("dueño").value;
	var lastName = document.getElementById("apellido").value;
	var mail = document.getElementById("correo").value;
	var adress = document.getElementById("direccion").value;
	var phone = document.getElementById("telefono").value;

	var infoTotal = ("<br>" + "Nombre: " + owner + "<br>" + "<br>" + "Apellido: " + lastName +  "<br>" + "<br>" + "Mail: " + mail +  "<br>" + "<br>" + "Dirección: " + adress +  "<br>" + "<br>" + "Teléfono: " + phone);
	imprimicion.innerHTML = (infoTotal);
};