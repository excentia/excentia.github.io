  function validateEmptyField(valor) {
  	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  	  return false;
  	}
  	return true;
  }
  
  function validateEmail(email) { 
		var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.test(email);
	}
  
  function getInputValue(id) {
		return document.getElementById(id).value;	
  }
	
  $(document).ready(function() {
    $(".modalbox").fancybox();
    $("#form").submit(function() { return false; });
    
    $("#send").on("click", function(){    
    	var emailval     = getInputValue("email");
		var nameval      = getInputValue("name");
		var surnameval   = getInputValue("surname");
		var companyval   = getInputValue("company");
		var mailvalid    = validateEmail(emailval);
		var namevalid    = validateEmptyField(nameval);
		var surnamevalid = validateEmptyField(surnameval);
		var companyvalid = validateEmptyField(companyval);
				
		if(mailvalid == false) {
			$("#email").addClass("error");
		}
		else if(mailvalid == true){
			$("#email").removeClass("error");
		}
		
		if(namevalid == false) {
			$("#name").addClass("error");
		}
		else if(namevalid == true){
			$("#name").removeClass("error");
		}
		
		if(surnamevalid == false) {
			$("#surname").addClass("error");
		}
		else if(surnamevalid == true){
			$("#surname").removeClass("error");
		}
		
		if(companyvalid == false) {
			$("#company").addClass("error");
		}
		else if(companyvalid == true){
			$("#company").removeClass("error");
		}
				
		if(mailvalid == true) {			
			if(namevalid && surnamevalid && companyvalid) {
				var url = 'https://www.qalitax.com/descargas/product/'+product+'?';
				url += 'customerEmail=' + emailval;
				url += '&customerName=' + nameval;
				url += '&customerSurnames=' + surnameval;
				url += '&customerCompany=' + companyval;
				parent.$.fancybox.close();
				parent.$.fancybox.open('<div class="message text-center"><p class="text-center">¡Gracias por descargar nuestro producto!</p><p>Si tu descarga no se ha iniciado ponte en <a target=blank_ href="https://excentia.atlassian.net/servicedesk/customer/portal/12">contacto con nosotros</a></p></div>');
				window.location.href=url;
			  }
		}
    	
    });
  });