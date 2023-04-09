
class LoginScreen{
	constructor(element,settings){
		this.settings = settings;
		this.element = $(element);
		
		return this.init();
	}
	
	init(){
		
		$(this.element).append(
		'<div class="container">'
      +'<div class="loginBox"> <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px">'
        +'<h3>Sign in here</h3>'
        +'<form >'
            +'<div class="inputBox"> '
				+'<p id="cred" >User name or Password is invalid</p>'
               +'<input id="uname" type="text" name="Username" placeholder="Username" required>'
               +'<input id="pass" type="password" name="Password" placeholder="Password" required>'
			   +'<p id="msg" >Enter the credentials</p>'
              +'</div>'
                +'<input type="submit" name="" id ="login" value="Login">'
        +'</form>'
        // +'<a href="#">Forget Password<br> </a>'
        +'<div class="text-center">'
          +'<p>Not a user? <a href="#!" id="register">Register</a></p>'
         +'</div>'
        
    +'</div>'
 +'</div>');
		


		this.handleEvents();
		
		
	}
	
	
	
	handleEvents(){
		
		
	var _this= this;
	$("#msg").hide();
	$("#cred").hide();
	     
		      $('#login').on('click', function () {
				//$(_this.element).empty();
				
			

				

				localStorage.setItem("userid",$('#uname').val());


				if(!$('#uname').val() || !$('#pass').val() ){
					$("#msg").show();
					return;
				}
				var jsondata ={"username":$('#uname').val(), "password":$('#pass').val()};
				// $.ajax({
				// 	type: "POST",
				// 	url:  'http://127.0.0.1:5000/api/login',
				// 	contentType: "application/json; charset=utf-8",
				// 	data: jsondata,
				// 	success: function(data){
					
				// 		if(data.authenticated==true){
				// 			$("#mainslot").empty();
				// 			$('#mainslot').homescreen();
				// 		}
				// 		else{
				// 			$("#cred").show();
				// 		}
						
				// 	},
		
				//   error: function (textStatus, errorThrown) {
				// 	  console.log(', textStatus = ' + textStatus + ", error=" + errorThrown);
				// 	  $("#cred").show();
				//   }
				//   });	
			
			  
				 $("#mainslot").empty();
				 $('#mainslot').homescreen();

				
		      });

			  
			  $('#register').on('click', function(){
				$("#mainslot").empty();
				$("#mainslot").userregisterscreen();
			  });
		      
		      

		    
	}

}
