/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    SOME_CONSTANTS : false,  // some constant


    // Application Constructor
    initialize: function() {
        console.log("console log init");
        this.bindEvents();
        this.initFastClick();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    initFastClick : function() {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    },
    // Phonegap is now ready...
	onDeviceReady: function() {
			$.ajaxSetup({ cache:false });
			
			 var f = new Date();
			
			 var day = f.getDate();
			 var month = f.getMonth() + 1;
			 var year = f.getFullYear();
			
				if (month < 10) month = "0" + month;
    			if (day < 10) day = "0" + day;
			var today = year + "-" + month + "-" + day;  
			sessionStorage.setItem("today", today);
			
			spinner("Cargando Datos Personal");
			
			$.getJSON('http://www.condominioalejandria.com/apppersonal/listapersonal.php',function(data){
						if(sessionStorage.getItem("personal") !== null){
							sessionStorage.removeItem("personal");
							sessionStorage.setItem("personal", JSON.stringify(data));
						}else{
							sessionStorage.setItem("personal", JSON.stringify(data));
						}
				});	
				
			$.mobile.loading( "hide" );		

// Asignar Valores Iniciales a Pagina PERSONAL
	   		
		$(document).on("pageshow", "#personal", function( event ) {
			
			buscarpersonal();
			
		});	 
// FIN DE PAGEINIT PERSONAL
		

// Asignar Valores Iniciales a Pagina DIALOGO
	   		
		$(document).on("pageshow", "#dialogo", function( event ) {
			
			document.getElementById("fchfalta").value = today;
			document.getElementById("fchadelanto").value = today;
			document.getElementById("fchquincena").value = today;
			document.getElementById("fchotros").value = today;
			
			var idpersonal = sessionStorage.getItem("userid");
			var nombrepersonal = sessionStorage.getItem("username");
				$(username).text(nombrepersonal);
			
		});	 
// FIN DE PAGEINIT DIALOGO
	
// Asignar Valores Iniciales a Pagina BLSPAGO
	   		
		$(document).on("pageshow", "#blspago", function( event ) {
			
			selboletapago();
			
			if(sessionStorage.getItem("fchblspago") !== null){
				var fchblspago = sessionStorage.getItem("fchblspago");
				document.getElementById("fchblspago").value = fchblspago;
			}
				
		});	 
// FIN DE PAGEINIT BLSPAGO

// Asignar Valores Iniciales a Pagina CALENDARIO
	   		
		$(document).on("pageshow", "#calendario", function( event ) {
			
			selanioinfos();
			
		});	 
// FIN DE PAGEINIT CALENDARIO

    }
};
