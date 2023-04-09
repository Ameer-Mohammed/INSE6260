
class LoginScreen{
	constructor(element,settings){
		this.settings = settings;
		this.element = $(element);
		
		return this.init();
	}
	
	init(){
		
		$(this.element).append('<div class="container">'
		+'<div class="d-flex justify-content-center align-items-center" style="height: 100vh">'
		  +'<form>'
			  
			  +'<div class="form-outline mb-4">'
				+'<input type="email" id="form2Example1" class="form-control" />'
				+'<label class="form-label" for="form2Example1">Email address</label>'
			  +'</div>'
			

			  +'<div class="form-outline mb-4">'
				+'<input type="password" id="form2Example2" class="form-control" />'
				+'<label class="form-label" for="form2Example2">Password</label>'
			  +'</div>'
			
		
			  +'<div class="row mb-4">'
				+'<div class="col d-flex justify-content-center">'
				  +'<!-- Checkbox -->'
				  +'<div class="form-check">'
					+'<input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />'
					+'<label class="form-check-label" for="form2Example31"> Remember me </label>'
				  +'</div>'
				+'</div>'
			
				
			  +'</div>'
			
			  +'<!-- Submit button -->'
			  +'<button type="button" id="login" class="btn btn-primary btn-block mb-4">Sign in</button>'
			
			  +'<!-- Register buttons -->'
			  +'<div class="text-center">'
				+'<p>Not a user? <a href="#!">Register</a></p>'
				
				
		
			  +'</div>'
			+'</form>'
		+'</div>'
	  +'</div>'
	  +'<script type="text/javascript" src="js/mdb.min.js"></script>');
		


		this.handleEvents();
		
		
	}
	
	
	
	handleEvents(){
		
		
	var _this= this;
	     
		      $('#login').on('click', function () {
				//$(_this.element).empty();
				$("#mainslot").empty();
				$('#mainslot').homescreen();

		      });0
		      
		      

		    
	}

}
