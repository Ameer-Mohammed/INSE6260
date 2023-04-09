
class LicenseMenu{
	constructor(element,settings){
		this.settings = settings;
		this.element = $(element);
		this.form_name = 'activate-licenseview';
		this.labels = JSON.parse(localStorage.getItem("activate-licenseview"));
		return this;
	}
	
	getFormName(){
		return this.form_name;
	}
	
	getLabels(){
		
		if(this.labels==null){
			this.labels = JSON.parse(localStorage.getItem("activate-licenseview"));
		}
		return this.labels;
	}
	
	init(){
		
		$(this.element).append('<div class="row top-padding">'
			    +'<div class="twelve columns">'
		        +'<div id="'+this.getFormName()+'_modal" class="modal" data-aauielemid="al-modal">'
		            +'<div class="modal-content">'
		                +'<div class="modal-header">'
		                    +'<h1 class="modal-title">'+this.getLabels()['activate-licenseview.title']+'</h1>'
		                +'</div>'

		                +'<div class="modal-body-wrapper">'
		                    +'<div class="modal-body">'
		                       
		                        //+getInputText({ "name": "serialkey", "label": this.getLabels()["activate-licenseview.serialkey"], "id": this.getFormName()+"_serialkey" })

		                        +'<div class="field">'
		                            +'<label for="serialkey" id="'+this.getFormName()+'_serialkeytext"></label>'
		                            +'<input id="'+this.getFormName()+'_serialkey" name="serialkey" type="text" data-aauielemid="al-serialkey" />'
		                        +'</div>'

		                        +'<div class="modal-buttonset">'
		                            +'<button type="button"  id="'+this.getFormName()+'_Activate-cancel" class="btn-modal">'+this.getLabels()["activate-licenseview.cancel"]+'</button>'
		                            +'<button type="button" id="'+this.getFormName()+'_Activate-next" class="btn-modal-primary" data-aauielemid="al-next">'+this.getLabels()["activate-licenseview.next"]+'</button>'
		                        +'</div>'
		                    +'</div>'
		                +'</div>'
		            +'</div>'
		        +'</div>'

		        +'<div id="'+this.getFormName()+'_sucessmodal" class="modal" data-aauielemid="al-sucessmodal">'
		            +'<div class="modal-content">'
		                +'<div class="modal-header">'
		                    +'<h1 class="modal-title">'+this.getLabels()["activate-licenseview.activation"]+'</h1>'
		                +'</div>'

		                +'<div class="modal-body-wrapper">'
		                    +'<div class="modal-body">'
		                        +'<div class="field">'
		                            +'<label for="context-name">'+this.getLabels()["activate-licenseview.activationmessage"]+'</label>'
		                        +'</div>'

		                        +'<div class="field">'
		                            +'<label for="expirydate" id="'+this.getFormName()+'_expirydate" data-aauielemid="al-expirydate"></label>'
		                        +'</div>'

		                        +'<div class="modal-buttonset">'
		                            +'<button type="button" id="'+this.getFormName()+'_Activate-finish" class="btn-modal-primary" data-aauielemid="al-finish">'+this.getLabels()["activate-licenseview.activationfinish"]+'</button>'
		                        +'</div>'
		                    +'</div>'
		                +'</div>'
		            +'</div>'
		        +'</div>'
		        +'<div id="'+this.getFormName()+'_errormodal" class="modal" data-aauielemid="al-errormodal">'
		            +'<div class="modal-content">'
		                +'<div class="modal-header">'
		                    +'<h1 class="modal-title">'+this.getLabels()['activate-licenseview.activationerror']+'</h1>'
		                +'</div>'

		                +'<div class="modal-body-wrapper">'
		                    +'<div class="modal-body">'
		                        +'<div class="field">'
		                            +'<label for="context-name">'+this.getLabels()["activate-licenseview.activationerrormessage"]+'</label>'
		                        +'</div>'

		                        +'<div class="field">'
		                            +'<label for="currentexpirydate" id="'+this.getFormName()+'_currentexpirydate" data-aauielemid="al-currentexpirydate"></label>'
		                        +'</div>'

		                        +'<div class="modal-buttonset">'
		                            +'<button type="button" id="'+this.getFormName()+'_Activation-retry" class="btn-modal-primary" data-aauielemid="al-retry">'+this.getLabels()["activate-licenseview.activationretry"]+'</button>'
		                            +'<button type="button" class="btn-modal">'+this.getLabels()["activate-licenseview.cancel"]+'</button>'
		                        +'</div>'
		                    +'</div>'
		                +'</div>'
		            +'</div>'
		        +'</div>'
		    +'</div>'
		+'</div>');
		
		//$(this.element).append('</div>');

		$('#mainslot').initialize({	locale: getSohoLocale()});

		this.render().handleEvents();
		
	}
	
	render(){
		return this;
	}
	
	handleEvents(){
		
		
		var _this=this;
		
		 var showactivationpopup = function(){

		        $('#'+_this.getFormName()+'_serialkey').val("");//empty the serialkey
		        var aaWebAppURL = "http://localhost";
		        var url = aaWebAppURL + '/get/serial-key';

		        $.ajax({
		            type: "GET",
		            url: url,
		            headers: {
			            'Authorization':localStorage.getItem("jwtToken")
			        },
		            contentType: "application/json; charset=utf-8",
		            dataType: "json",
		            success: function(data) {

		                var key = data.values["serial-key"];
		                $("#"+_this.getFormName()+"_serialkeytext").empty();
		                $("#"+_this.getFormName()+"_serialkeytext").append(_this.getLabels()["activate-licenseview.serialkeymessage"]);
		                $("#"+_this.getFormName()+"_serialkeytext").append(key);
		                
		                $('body').modal({
		                    content: $('#'+_this.getFormName()+'_modal')
		                });
		            },
		            error: function(jqXHR, textStatus, errorThrown) {
		                console.log('logging query failed, textStatus = ' + textStatus + ", error=" + errorThrown);
		            }
		        });

		    };

		      $('#'+_this.getFormName()+'_Activate-next').on('click', function () {

		        $('#maincontent').trigger('start.busyindicator');

		        var activationkey = ' ';
		        if($('#'+_this.getFormName()+'_serialkey').val()){
		            activationkey = $('#'+_this.getFormName()+'_serialkey').val();
		        }
		       
		       console.log("license")

		        $.ajax({
		            type: "POST",
		            url: "http://localhost/validate/serial-key",
		            headers: {
			            'Authorization':localStorage.getItem("jwtToken")
			        },
		            contentType: "application/json; charset=utf-8",
		            dataType: "json",
		            data: activationkey,
		            success: function(response) {

		                if(response.success == true){

		                    let expirydate = response.values["expirydate"];
		                    //var dateString = expirydate.toLocaleDateString("en-US")
		                    //console.log(dateString) // Output: 2020-07-21

		                    $("#"+_this.getFormName()+"_expirydate").empty();
		                    $("#"+_this.getFormName()+"_expirydate").append(_this.getLabels()["activate-licenseview.licensemessage"]);
		                    $("#"+_this.getFormName()+"_expirydate").append(expirydate);
		                    $('body').modal({
		                        content: $('#'+_this.getFormName()+'_sucessmodal')
		                      });
		              
		                }
		               else{

		                  let currentexpirydate = response.values["currentexpirydate"];

		                  $("#"+_this.getFormName()+"_currentexpirydate").empty();
		                  $("#"+_this.getFormName()+"_currentexpirydate").append(_this.getLabels()["activate-licenseview.licenserroremessage"]);
		                  $("#"+_this.getFormName()+"_currentexpirydate").append(currentexpirydate);

		                  $('body').modal({
		                    content: $('#'+_this.getFormName()+'_errormodal')
		                  });

		               }

		               $('#maincontent').trigger('complete.busyindicator');
		            },
		            error: function(jqXHR, textStatus, errorThrown) {
		                console.log('logging query failed, textStatus = ' + textStatus + ", error=" + errorThrown);
		            }
		        });

		       
		      });
		      
		   

			  showactivationpopup();

			     
		      $('#'+this.getFormName()+'_Activation-retry').on('click', function () {

		        showactivationpopup();

		      });
		      
		      $('#'+this.getFormName()+'_Activate-finish').on('click', function () {

			        $('#maincontent').trigger('complete.busyindicator');
			     });

		    
	}

}
