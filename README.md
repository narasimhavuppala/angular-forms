# AngularForms

# Steps
 ## Add BootStrap
  - Add BootStrap  :  npm install bootstrap  --save
  - Import BootStrap into the styles .css
  - Run the App whether it works or not
  
 ## Add basic Login form with username and password
 
    <form class="container form-group">

	  <div class="form-group">

		<label for="userName">userName:</label>
		<input class="form-control" type="text" name="userName">

	  </div>

	  <div class="form-group">
		<label for="password">Password</label>
		<input class="form-control" type="text" name="password">
	  </div>
	  <input class="btn btn-Primary btn-success" type="submit" value="submit">

	</form>