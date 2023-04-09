
class RegistrationScreen{
	constructor(element,settings){
		this.settings = settings;
		this.element = $(element);
		
		return this.init();
	}
	
	init(){
		
		$(this.element).append('<div class="container">'
		+'<div class="loginBox"> <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px">'
		  +'<h3>Register</h3>'
		  +'<form >'
			  +'<div class="inputBox"> '
			  	+'<p id="regmsg" >Enter all information</p>'
				 +'<input id="uname" type="text" name="Username" placeholder="Username">'
				 +'<input id="pass" type="password" name="Password" placeholder="Password">'
				 +'<input id="pass2" type="password" name="Password" placeholder="Confirm Password">'
				+'</div>'
				  +'<input type="submit" name="" id ="register" value="Register">'
		  +'</form>'
		//   +'<a href="#">Forget Password<br> </a>'
		  +'<div class="text-center">'
			+'<p>Already a User? <a href="#!" id="signin">SignIn</a></p>'
		   +'</div>'
		  
	  +'</div>'
   +'</div>');
		


		this.handleEvents( );
		
		
	}
	
	
	
	handleEvents(){
		
		
	var _this= this;

			$('#regmsg').hide();
	     
		      $('#signin').on('click', function () {
				//$(_this.element).empty();
				$("#mainslot").empty();
				$('#mainslot').loginscreen();

		      });

			  $('#register').on('click', function (event) {
				//$(_this.element).empty();
				event.preventDefault();

				if(!$('#uname').val() || !$('#pass').val() || !$('#pass2').val()){
					$("#regmsg").show();
					return;
				}

				//$("#mainslot").empty();
				//$('#mainslot').loginscreen();

				var jsondata ={"username": $('#uname').val() , "password":$('#pass').val()};

				//Create the user and redirect to login screen
				$.ajax({
					type: "POST",
					url:  'http://127.0.0.1:5001/signup',
					data: JSON.stringify({"username": $('#uname').val() , "password":$('#pass').val()}),
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					success: function(data){
					
						if(data.message){
							alert('user created')
							$("#mainslot").empty();
							$('#mainslot').loginscreen();

						}
						else{
							$("#regmsg").show();
						}
						
					},
		
				  error: function (textStatus, errorThrown) {
					  console.log(', textStatus = ' + textStatus + ", error=" + errorThrown);
					  $("#regmsg").show();
				  }
				  });	
		      });
		      
		      

		    
	}

}
