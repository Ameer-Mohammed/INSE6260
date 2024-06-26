
class UserSettings{
	constructor(element,settings){
		this.settings = settings;
		this.element = $(element);
		
		return this.init();
	}
	
	init(){
		
		$(this.element).append(
			'<div class="flex flex-col items-center w-40 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">'
			+'<a class="flex items-center w-full px-3 mt-3" href="#">'
				+'<svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">'
					+'<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />'
				+'</svg>'
				+'<span class="ml-2 text-sm font-bold">System</span>'
			+'</a>'
			+'<div class="w-full px-2">'
				<!-- +'<div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">' -->
					+'<a id="home" class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">'
						+'<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">'
							+'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />'
						+'</svg>'
						+'<span class="ml-2 text-sm font-medium">Dasboard</span>'
					+'</a>'

				+'<div class="flex flex-col items-center w-full mt-2 border-t border-gray-700">'
					
					+'<a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">'
						+'<svg class="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">'
							+'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />'
						+'</svg>'
						+'<span class="ml-2 text-sm font-medium">User Settings</span>'
					+'</a>'
					
				+'</div>'
			+'</div>'
			+'<a id="logout" class="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">'
				+'<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">'
					+'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />'
				+'</svg>'
				+'<span class="ml-2 text-sm font-medium">Logout</span>'
			+'</a>'
		+'</div>'
		+'<div >'
+'<div >'
       +'<h5  style="color: white; padding-top: 10px;">Update your password</h5>'
	   +'<p id="pmsg" style="color: #28e6e6;">Enter the information</p>'
	   +'<form>'
	 
	   +' <div class="form-group" style="padding-block: 10px;color: white;">'
	   +' <label for="enterpassword">Password</label>'
	   +' <input id ="pass" type="password" class="form-control" id="enterpassword" aria-describedby="emailHelp" placeholder="Enter password">'
	   +' </div>'

	   +' <div class="form-group" style="padding-block: 10px;color: white;">'
	   +' <label for="confirmpassword">Confirm Password</label>'
	   +' <input id="pass2" type="password" class="form-control" id="confirmpassword" aria-describedby="emailHelp" placeholder="Confirm password">'
	   +' </div>'

	   +'<button id="update" style="background-color: blue; padding-block: 10px;"class="btn btn-primary">Update</button>'
		+'</form>'
	  
+'</div>'
  

   +' </div>'
	);
		


		this.handleEvents();
		
		
	}
	
	
	
	handleEvents(){
		
		$(this.element).addClass('flex h-screen  space-x-6 bg-gray-100');
		$("#pmsg").hide();

		$('#home').on('click', function () {
			//$(_this.element).empty();
			$("#mainslot").empty();
			$('#mainslot').homescreen();

		  });

		  $('#update').on('click', function () {
			event.stopPropagation();
			if(!$('#pass').val() || !$('#pass2').val()){
				$("#pmsg").show();
				return;
			}
			var jsondata ={"userid":localStorage.getItem("userid"), "newpassword":$('#pass').val()};
			$.ajax({
				type: "POST",
				url:  'http://127.0.0.1:5000/api/update',
				contentType: "application/json; charset=utf-8",
				data: jsondata,
				success: function(data){
				
					if(data.updated==true){
						alert('updated')

					}
					else{
						alert('error')
					}
					
				},
	
			  error: function (textStatus, errorThrown) {
				  console.log(', textStatus = ' + textStatus + ", error=" + errorThrown);
				  $("#pmsg").show();
			  }
			  });	

		  });

		  

		  $('#logout').on('click', function () {
			location.reload();

		  });
		 
	
		return;
		    
	}

}
