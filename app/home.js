
class HomeScreen{
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
					+'<a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">'
						+'<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">'
							+'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />'
						+'</svg>'
						+'<span class="ml-2 text-sm font-medium">Dasboard</span>'
					+'</a>'

				+'<div class="flex flex-col items-center w-full mt-2 border-t border-gray-700">'
					
					+'<a id="usersettings" class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">'
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
      +'<h2 id="welcome" style="font-size: 40px; position: relative; left: 500px;color: white;">Welcome user123</h2>'
	  +'<button id="getRecommendations" type="button" class="btn btn-primary" style="background: blue; position: relative; left: 500px;" >Generate Recommendations</button>'
	 +'<div style="color: white;font-size: 25px;padding-left: 80px;padding-bottom: 0px;">Recommendations</div>' 
	  +'<div class="example-header" style="padding-left: 300px; color:white">'
		+'Page Size:'
		+'<select onchange="onPageSizeChanged()" id="data-page-size" style="color:black;background: white;">'
				+'<option value="10" selected>10</option>'
				+'<option value="20">20</option>'
				+'<option value="30">30</option>'
			+'</select>'
		+'</div>'
      +'<div id="myGrid" style="height: 500px; width:500px;display: flex;  justify-content: center;" class="ag-theme-alpine"></div>'  
	  
+'<!-- Button trigger modal -->'
+'<button type="button" class="btn btn-primary" id="data-modal" data-toggle="modal" data-target="#exampleModal" hidden>'
	+'Launch demo modal'
  +'</button>'
  
  +'<!-- Modal -->'
  +'<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'
	+'<div class="modal-dialog" role="document">'
	  +'<div class="modal-content">'
		+'<div class="modal-header">'
		  +'<h5 class="modal-title" id="exampleModalLabel">Enter your rating</h5>'
		  +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
			+'<span aria-hidden="true">&times;</span>'
		  +'</button>'
		+'</div>'
		+'<div class="modal-body" id="data-modal-body">'
		
		+'</div>'
		+'<div class="modal-footer">'
		  +'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
		  +'<button id="saverating" type="button" class="btn btn-primary" data-dismiss="modal" style="background: blue" >Save changes</button>'
		+'</div>'
	  +'</div>'
	+'</div>'
  +'</div>' 
   +' </div>'
		);
		


		this.handleEvents();
		
		
	}
	
	
	
	handleEvents(){
		
		$(this.element).addClass('flex h-screen  space-x-6 bg-gray-100');

		$(this.element).css('background-image', 'url( ../recommender/images/home.jpg )');
		$(this.element).css('background-repeat', 'no-repeat');
		$(this.element).css('background-size', 'cover');

		var columnDefs = [
			{headerName: "Cuisine", field: "cuisine"},
			{headerName: "Rating", field: "rating"},
		  ];
			  
		  // specify the data
		  var rowData = [
			{restro: "restaurant 1", rating: "5", },
			{restro: "restaurant 2", rating: "4", },
		  ];

		  var initialrowData = [
			
		  ];
			  
		  // let the grid know which columns and what data to use
		  var gridOptions = {
			columnDefs: columnDefs,
			rowData: initialrowData,
			defaultColDef: {
				sortable: true,
			  },
			pagination: true,
  			paginationPageSize: 10,
			  onCellClicked: ( event) => {
				//$('#exampleModal').modal('show')
				document.getElementById("data-modal").click();
				// $('#restaurant-name').contents().filter(function() {
				// 	return this.nodeType === Node.TEXT_NODE;
				//   }).remove();
				
				$("#data-modal-body").empty();
				
				$("#data-modal-body").append('<div class="star-container">'
				+'<div class="star"></div>'
				+'<div class="star"></div>'
				+'<div class="star"></div>'
				+'<div class="star"></div>'
				+'<div class="star"></div>'
				+'</div>'
				+'<h1 id="urating" class="rating">0</h1>')
				$("#data-modal-body").append('<div id = "restaurant-name"></div>');
				$('#restaurant-name').append(event.value);
			
			let stars = document.querySelectorAll(".star");
			document.querySelector(".star-container").addEventListener("click", starRating);
			let rating = document.querySelector(".rating");
			
			
			function starRating(e) {
			  stars.forEach((star) => star.classList.remove("star__checked"));
			  const i = [...stars].indexOf(e.target);
			  if (i > -1) {
				stars[i].classList.add("star__checked");
				rating.textContent = `${stars.length - i}`;
			  } else {
				rating.textContent = `${0}`;
			  }
			}
				
			  },
		  };
		  
		  // setup the grid 
		
		var gridDiv = document.querySelector('#myGrid');
		new agGrid.Grid(gridDiv, gridOptions);


	

		  $('#data-page-size').on('change', function() {
			var value= $(this).find(":selected").val();
			//var value = $('#data-page-size').value;
			gridOptions.api.paginationSetPageSize(Number(value));
		});

		
		$('#usersettings').on('click', function () {
			//$(_this.element).empty();
			$("#mainslot").empty();
			$('#mainslot').usersettings();

		  });

		  $('#logout').on('click', function () {
			location.reload();

		  });

		  $('#getRecommendations').on('click', function () {
			gridOptions.api.setRowData(initialrowData);
			$.ajax({
				type: "GET",
				url:  'http://127.0.0.1:5000/api/'+localStorage.getItem("userid")+'/24',
				contentType: "application/json; charset=utf-8",
				success: function(data){
				
					gridOptions.api.setRowData(data.top_recommendations);
				},
	
			  error: function (textStatus, errorThrown) {
				  console.log(', textStatus = ' + textStatus + ", error=" + errorThrown);
			  }
			  });	
		
		  }); 

		  
		  $('h2').text("Welcome! "+ localStorage.getItem("userid"))

		  $('#saverating').on('click', function(){
			console.log('save');
			console.log($('#urating').text())
			console.log($('#restaurant-name').text())

			var jsondata ={"userid":localStorage.getItem("userid"), "cuisine":$('#restaurant-name').text(), "newrating":$('#urating').text()};
			// $.ajax({
			// 	type: "POST",
			// 	url:  'http://127.0.0.1:5000/api/recommedation/update',
			// 	contentType: "application/json; charset=utf-8",
			// 	data: jsondata,
			// 	success: function(data){
				
			// 		if(data.saved==true){
			// 			//alert('updated')

			// 		}
			// 		else{
			// 			//alert('error')
			// 		}
					
			// 	},
	
			//   error: function (textStatus, errorThrown) {
			// 	  console.log(', textStatus = ' + textStatus + ", error=" + errorThrown);
				  
			//   }
			//   });	

		  });
		  
	
		return;
		    
	}

}
