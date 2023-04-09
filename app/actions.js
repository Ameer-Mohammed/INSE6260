$.fn.loginscreen = function (settings) {
	

	
	//$('#mainslot').trigger('start.busyindicator');
	//$('#mainslot').empty();
    return this.each(function () {
           instance = $.data(this, 'datagrid', new LoginScreen(this, settings));

      return instance;
    });
  };

  $.fn.userregisterscreen = function (settings) {
	

	
    //$('#mainslot').trigger('start.busyindicator');
    //$('#mainslot').empty();
      return this.each(function () {
             instance = $.data(this, 'datagrid', new RegistrationScreen(this, settings));
  
        return instance;
      });
    };


  $.fn.homescreen = function (settings) {
	

	
    //$('#mainslot').trigger('start.busyindicator');
    //$('#mainslot').empty();
      return this.each(function () {
             instance = $.data(this, 'datagrid', new HomeScreen(this, settings));
  
        return instance;
      });
    };

    $.fn.usersettings = function (settings) {
	

	
      //$('#mainslot').trigger('start.busyindicator');
      //$('#mainslot').empty();
        return this.each(function () {
               instance = $.data(this, 'datagrid', new UserSettings(this, settings));
    
          return instance;
        });
      };