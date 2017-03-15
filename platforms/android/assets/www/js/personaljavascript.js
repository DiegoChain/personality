// JavaScript Document

function buscarpersonal(){
	
	var div = document.getElementById("divcontenido");
	
	var contar = 1;

		var pers = sessionStorage.getItem("personal");
		var personal = JSON.parse(pers); 				
					
			for(var i = 0; i < personal.length; i++){
							
				var boton = document.createElement("button");
					boton.type = "button";
					boton.className = "btnombre";
					boton.textContent = personal[i].Nombre;
					boton.value = personal[i].Id;
					boton.onclick = function(){
									sessionStorage.setItem("userid",this.value);
									sessionStorage.setItem("username",this.textContent);  
         		
									$.mobile.changePage( "dialogo.html", { transition: "flip"});

									};
				
				var div2 = document.createElement("div");
					div2.className = "ui-grid-solo";
									
					$(div2).append(boton);
					$(div).append(div2);
				
			}
}

function abrirpopupfaltas(){
	$("#popupfaltas").popup("open");
}
function cerrarpopupfaltas(){
	$("#popupfaltas").popup("close");
}
function abrirpopupadelantos(){
	$("#popupadelantos").popup("open");
}
function cerrarpopupadelantos(){
	$("#popupadelantos").popup("close");
}
function abrirpopupquincena(){
	$("#popupquincena").popup("open");
}
function cerrarpopupquincena(){
	$("#popupquincena").popup("close");
}
function abrirpopupotros(){
	$("#popupotros").popup("open");
}
function cerrarpopupotros(){
	$("#popupotros").popup("close");
}
function abrirpopupboletaspago(){
	$("#popupboletaspago").popup("open");
}
function cerrarpopupboletaspago(){
	$("#popupboletaspago").popup("close");
}
function abrirpopupcalendario(){
	$("#popupcalendario").popup("open");
}
function cerrarpopupcalendario(){
	$("#popupcalendario").popup("close");
}


function spinner(texto){
	
		$.mobile.loading( "show", {
            text: texto,
            textVisible: true,
            theme: "d",
            textonly: false,
            
  			});
}

function guardarfalta(){

	var idpersonal = sessionStorage.getItem("userid");
	var nombrepersonal = sessionStorage.getItem("username");
	var tipofalta = document.getElementById("seltipofalta").value;
		switch (tipofalta){
	    case "1":
	        var nomfalta = "Sin Licencia"
	        break;
	    case "2":
	        var nomfalta = "Con Licencia"
	        break;
		case "3":
	        var nomfalta = "Falta Medica"
	        break;
	    }
	
	var fechafalta = document.getElementById("fchfalta").value;
		
		spinner("Guardando Falta");
		
		var archivoValidacion = "http://www.condominioalejandria.com/apppersonal/guardarfalta.php?jsoncallback=?";
		
		$.getJSON( archivoValidacion, { idpersonal : idpersonal, nombrepersonal : nombrepersonal, tipofalta : tipofalta, nomfalta : nomfalta, fechafalta : fechafalta})
					.done(function(respuesta) {
					
						if(respuesta == "ok"){
							alert("Registro con Exito.");
								$.mobile.changePage( "personal.html", { transition: "flip"} );	

						}else{
							alert("Algo Salio Mal");
						}
			})
		
		$.mobile.loading( "hide" );	
		
}

function guardaradelanto(){

	var idpersonal = sessionStorage.getItem("userid");
	var nombrepersonal = sessionStorage.getItem("username");
	
	var montoadelanto = document.getElementById("montoadelanto").value;
	var fechaadelanto = document.getElementById("fchadelanto").value;
		
		spinner("Guardando Adelanto");
		
		var archivoValidacion = "http://www.condominioalejandria.com/apppersonal/guardaradelanto.php?jsoncallback=?";
		
		$.getJSON( archivoValidacion, { idpersonal : idpersonal, nombrepersonal : nombrepersonal, montoadelanto : montoadelanto, fechaadelanto : fechaadelanto})
					.done(function(respuesta) {
					
						if(respuesta == "ok"){
							alert("Registro con Exito.");
								$.mobile.changePage( "personal.html", { transition: "flip"} );	

						}else{
							alert("Algo Salio Mal");
						}
			})
		
		$.mobile.loading( "hide" );	

}

function calcularquincena(){
	var idpersonal = sessionStorage.getItem("userid");
		
	var archivoValidacion = "http://www.condominioalejandria.com/apppersonal/calcularquincena.php?jsoncallback=?";
	
	$.getJSON( archivoValidacion, { idpersonal : idpersonal})
					.done(function(respuesta) {
						console.log(respuesta);
						var quincena = parseFloat(respuesta).toFixed( 2 );	
						document.getElementById("montoquincena").value = quincena;
			})
}


function guardarotros(){

	var idpersonal = sessionStorage.getItem("userid");
	var nombrepersonal = sessionStorage.getItem("username");
	var fecha = document.getElementById("fchotros").value;
	var monto = document.getElementById("montootros").value;
	var detalle = document.getElementById("detalleotros").value;
	 	
		spinner("Guardando Otros");
		
		var archivoValidacion = "http://www.condominioalejandria.com/apppersonal/guardarotros.php?jsoncallback=?";
		
		$.getJSON( archivoValidacion, { idpersonal : idpersonal, nombrepersonal : nombrepersonal, fecha : fecha, monto : monto, detalle : detalle})
					.done(function(respuesta) {
					
						if(respuesta == "ok"){
							alert("Registro con Exito.");
								$.mobile.changePage( "personal.html", { transition: "flip"} );	

						}else{
							alert("Algo Salio Mal");
						}
			})
		
		$.mobile.loading( "hide" );	
		
}

function guardarquincena(){

	var idpersonal = sessionStorage.getItem("userid");
	var nombrepersonal = sessionStorage.getItem("username");
	var fecha = document.getElementById("fchquincena").value;
	var monto = document.getElementById("montoquincena").value;
	 	
		spinner("Guardando Quincena");
		
		var archivoValidacion = "http://www.condominioalejandria.com/apppersonal/guardarquincena.php?jsoncallback=?";
		
		$.getJSON( archivoValidacion, { idpersonal : idpersonal, nombrepersonal : nombrepersonal, fecha : fecha, monto : monto})
					.done(function(respuesta) {
					
						if(respuesta == "ok"){
							alert("Registro con Exito.");
								$.mobile.changePage( "personal.html", { transition: "flip"} );	

						}else{
							alert("Algo Salio Mal");
						}
			})
		
		$.mobile.loading( "hide" );	
		
}


function darbaja(){

	var idpersonal = sessionStorage.getItem("userid");
	var fecha = sessionStorage.getItem("today");
	var nombrepersonal = sessionStorage.getItem("username");
	
	var txtpregunta = "Esta Seguro que desea dar de baja a " + nombrepersonal + " ?"
	var respuesta = confirmar(txtpregunta);
		
		if(respuesta == "ok"){
		var archivoValidacion = "http://www.condominioalejandria.com/apppersonal/darbaja.php?jsoncallback=?";
		
		$.getJSON( archivoValidacion, { idpersonal : idpersonal, fecha : fecha})
					.done(function(respuesta) {
					
						if(respuesta == "ok"){
							alert("Registro con Exito.");
								$.getJSON('http://www.condominioalejandria.com/apppersonal/listapersonal.php',function(data){
										if(sessionStorage.getItem("personal") !== null){
											sessionStorage.removeItem("personal");
											sessionStorage.setItem("personal", JSON.stringify(data));
										}else{
											sessionStorage.setItem("personal", JSON.stringify(data));
										}
								});	
										$.mobile.changePage( "index.html", { transition: "flip"} );	
										location.reload(); 

						}else{
							alert("Algo Salio Mal");
						}
			})
		
		$.mobile.loading( "hide" );	
		
	console.log(fecha);
		}
}

function confirmar(texto) {
    
    var r = confirm(texto);
    if (r == true) {
        return "ok";
    } else {
        return "no";
    }
   
}

function selboletapago(){
	
	var selboletapago = document.getElementById("selboletapago");
		selboletapago.options.length = 0;

	var pers = sessionStorage.getItem("personal");
	var personal = JSON.parse(pers); 				
	
	var option = document.createElement("option");
		option.value = "0";
		option.text = "Todos";
		selboletapago.add(option);
											
		for(var i = 0; i < personal.length; i++){
							
			var option = document.createElement("option");
				option.value = personal[i].Id;
				option.text = personal[i].Nombre;
				selboletapago.add(option);
				
			}
			
			var myselect = $("#selboletapago");
			myselect.selectmenu("refresh");
}

function selanioinfos(){
	var fecha = new Date();
	var ano = fecha.getFullYear();
	var anoinit = (parseInt(ano)-5);
	var anofin = (parseInt(ano)+1);
	
	var selanioinfos = document.getElementById("selanioinfos");
		selanioinfos.options.length = 0;
	
		for(var i = 0; i < 5; i++){
							
			var option = document.createElement("option");
				option.value = (parseInt(anofin)-1);
				option.text = (parseInt(anofin)-1);
				selanioinfos.add(option);
				
				anofin = (parseInt(anofin)-1);
				
			}
	var myselect = $("#selanioinfos");
		myselect.selectmenu("refresh");		
	
}

function fchparainto(mesescogido, mesescogidonumero){
	var anioescogido = document.getElementById("selanioinfos");
	var valoranio = anioescogido.value;
	
	var mesaniotexto = mesescogido + " del " + valoranio;
	
	$('.ui-dialog').dialog('close');
	
	if(sessionStorage.getItem("fchblspago") !== null){
		sessionStorage.removeItem("fchblspago");
		sessionStorage.setItem("fchblspago", mesaniotexto);
	}else{
		sessionStorage.setItem("fchblspago", mesaniotexto);
	}
	
	if(sessionStorage.getItem("anioescogido") !== null){
		sessionStorage.removeItem("anioescogido");
		sessionStorage.setItem("anioescogido",anioescogido.value);
	}else{
		sessionStorage.setItem("anioescogido", anioescogido.value);
	}
	
	if(sessionStorage.getItem("mesescogido") !== null){
		sessionStorage.removeItem("mesescogido");
		sessionStorage.setItem("mesescogido",mesescogidonumero);
	}else{
		sessionStorage.setItem("mesescogido",mesescogidonumero);
	}
	
	if(sessionStorage.getItem("mesaniotexto") !== null){
		sessionStorage.removeItem("mesaniotexto");
		sessionStorage.setItem("mesaniotexto",mesaniotexto);
	}else{
		sessionStorage.setItem("mesaniotexto",mesaniotexto);
	}
}


function okblspago(){
//	$.mobile.changePage( "blspago2.html", { transition: "flip"} );	
	var personal = document.getElementById("selboletapago").value;
	var mes = sessionStorage.getItem("mesescogido");
	var anio = sessionStorage.getItem("anioescogido");
	var mesaniotexto = sessionStorage.getItem("mesaniotexto");
		
	var titulo = "Boleta de Pago de " + mesaniotexto;
	var divtabla = document.getElementById('TablaBlsPago');
	
	var archivoValidacion = "http://www.condominioalejandria.com/apppersonal/blspago.php?jsoncallback=?";
		
	var contar = 0;	
	var totalpago = 0;
	var contarpdf = 1;
	
	var txt = "";

		$.getJSON( archivoValidacion, { personal : personal, mes : mes, anio : anio})
					.done(function(respuesta) {
						console.log(respuesta);
						var tabla = '<table cellspacing="5" align="center" >';
						
						console.log("generating pdf...");
						var doc = new jsPDF();	
						var linea = 30;
							while(contar < respuesta.length){
								var suma = 0;
                				tabla += '<tr><td colspan="2" align="center">'+titulo+'</td></tr>';
								tabla += '<tr><td colspan="2"></td></tr>';
								doc.setFontSize(16);
								doc.text(titulo, 60, linea);
								linea = parseInt(linea) + 10;
								txt = respuesta[contar].Nombre;
								
								tabla += '<tr><td colspan="2"> Nombre : '+txt+'</tr></td>';
								tabla += '<tr><td colspan="2"></td></tr>';
								
								doc.text(respuesta[contar].Nombre, 30, linea);
								doc.setFontSize(12);
								linea = parseInt(linea) + 10;
								tabla += '<tr>';
                				tabla += '</tr>';
								
								
								for (x = contar; x < respuesta.length; x++) { 				
									var id = respuesta[x].Id;
										if(contar < (respuesta.length - 1)){
											var id2 = respuesta[x + 1].Id;
										}
										
										suma = parseFloat(suma) + parseFloat(respuesta[contar].Monto);
										suma = parseFloat(suma).toFixed( 2 );
										
										txt = respuesta[contar].Tipo + ' ' + respuesta[contar].Subtipo;
																
										tabla += '<tr><td>'+ txt + '</td><td align="right">' + respuesta[contar].Monto + '</td></tr>';	
												
										doc.text(txt, 40, linea);
										txt = respuesta[contar].Monto2;
										doc.text(txt, 120, linea);
										
										linea = parseInt(linea) + 10;						
										contar = contar + 1;	
							    		
									if(contar == respuesta.length){
										tabla += '<tr><td style="border-top:1px solid #000000"">Total :</td><td style="border-top:1px solid #000000"" align="right">' + suma + '</td></tr>';
										tabla += '<tr><td colspan="2">&nbsp;</td></tr>';	
										tabla += '<tr><td colspan="2">&nbsp;</td></tr>';
										doc.text('------------------------------------------------------------------------------------------', 35, linea);
											linea = parseInt(linea) + 10;	
										doc.setFontSize(16);
										doc.text('Total :           '+ suma, 100, linea);
										doc.setFontSize(12);
											linea = 30;	
											
									}
									if (id !== id2 ){
										tabla += '<tr><td style="border-top:1px solid #000000"">Total :</td><td style="border-top:1px solid #000000"" align="right">' + suma + '</td></tr>';
										tabla += '<tr><td colspan="2">&nbsp;</td></tr>';	
										tabla += '<tr><td colspan="2">&nbsp;</td></tr>';	
										doc.text('------------------------------------------------------------------------------------------', 35, linea);
											linea = parseInt(linea) + 10;
										doc.setFontSize(16);
										doc.text('Total :           '+ suma, 100, linea);
										doc.setFontSize(12);
												doc.addPage();
												linea = 30;	
																	
										
										break;
									};
									
								};
									totalpago = parseFloat(totalpago) + parseFloat(suma);
									totalpago = parseFloat(totalpago).toFixed( 2 );	
									contarpdf = parseInt(contarpdf) + 1;
							};
								
									tabla += '<tr><td colspan="2" style="border:1px solid #000000" align="center"> Total para Pagos : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + totalpago + '</td></tr>';						
									
										tabla += '<tr><td colspan="2">&nbsp;</td></tr>';
                						tabla += '</table>';
										$('#prueba').html( tabla );
											
											var txtpregunta = "Guardar Registro ?"
											var respuesta = confirmar(txtpregunta);
					
												if(respuesta == "ok"){
													
													



var pdfOutput = doc.output();
alert( pdfOutput );
 
//NEXT SAVE IT TO THE DEVICE'S LOCAL FILE SYSTEM
alert("file system...");
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
 
   alert(fileSystem.name);
   alert(fileSystem.root.name);
   alert(fileSystem.root.fullPath);
 
   fileSystem.root.getFile("test.pdf", {create: true}, function(entry) {
      var fileEntry = entry;
      alert(entry);
 
      entry.createWriter(function(writer) {
         writer.onwrite = function(evt) {
         alert("write success");
      };
 
      alert("writing to file");
         writer.write( pdfOutput );
      }, function(error) {
         alert(error);
      });
 
   }, function(error){
      alert(error);
   });
},
function(event){
 alert( evt.target.error.code );
});







													// doc.save(mesaniotexto + '.pdf')


												}
						
					
			})
	
								

}