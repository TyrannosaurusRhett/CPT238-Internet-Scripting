$(document).ready(function(){
	var $custForm = $("#custForm");
		$fName = $("#fName"),
		$errFName = $("#errFName"),
		$lName = $("#lName"),
		$errLName = $("#errLName"),
		$add1 = $("#add1"),
		$errAdd1 = $("#errAdd1"),
		$add2 = $("#add2"),
		$errAdd2 = $("#errAdd2"),
		$state = $("#state"),
		$errState = $("#errState"),
		$zip = $("#zip"),
		$errZip = $("#errZip"),
		$phone = $("#phone"),
		$errPhone = $("#errPhone"),
		$email = $("#email"),
		$errEmail = $("#errEmail"),
		$ccNum = $("#ccNum"),
		$errCCNum = $("#errCCNum"),
		$none = $("#none"),
		$expMonth = $("#expMonth"),
		$expYear = $("#expYear"),
		$errDate = $("#errDate"),

		//hints begin
		//state hint
		$state.focus(function(){
			$errState.append("Use a two letter abbreviation");
		}).blur(function(){
			$errState.empty();
		});

		//zip code hint
		$zip.focus(function(){
			$errZip.append("Use a 5-digit Zip Code");
		}).blur(function(){
			$errZip.empty();
		});

		//phone number hint
		$phone.focus(function(){
			$errPhone.append("Numbers Only - No Spaces or Dashes");
		}).blur(function(){
			$errPhone.empty();
		});

		//email hint
		$email.focus(function(){
			$errEmail.append("Example - john@doe.com");
		}).blur(function(){
			$errEmail.empty();
		});

		//credit card hint
		$ccNum.focus(function(){
			$errCCNum.append("Numbers Only - No Spaces or Dashes");
		}).blur(function(){
			$errCCNum.empty();
		});
		//hints end

		//validation begin
		$custForm.submit(function(event){
			var pattern = /^[a-z ]+$/i,
				addPatt = /^[a-z0-9 ]+$/i,
				statePatt = /^[a-z]+$/i
				numPatt = /^[0-9]+$/,
				emailPatt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
				errors = 0;

			$(".errMsg").empty();

			//check first name
			if (($fName.val().length > 1) && ($fName.val().length < 21)) {
				if(!pattern.test($fName.val())){
					$errFName.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
				}
			}
			else{
				$errFName.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
			}

			//check last name
			if (($lName.val().length > 1) && ($lName.val().length < 21)) {
				if(!pattern.test($lName.val())){
					$errLName.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
				}
			}
			else{
				$errLName.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
			}

			//city check
			if (($city.val().length > 1) && ($city.val().length < 21)) {
				if(!pattern.test($city.val())){
					$errcity.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
				}
			}
			else{
				$errCity.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
			}

			//address 1 check
			if (($add1.val().length > 1) && ($add1.val().length < 21)) {
				if(!addPatt.test($add1.val())){
					$errAdd1.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
				}
			}
			else{
				$errAdd1.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
			}

			//address 2 check
			f (($add2.val().length > 1) && ($add2.val().length < 21)) {
				if(!addPatt.test($add2.val())){
					$errAdd2.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
				}
			}
			else{
				$errAdd2.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
			}

			//state check
			if (($state.val().length != 2) || (!statePatt.test($state.val()))){
				$errState.append("Required: Must contain a two letter State abbreviation!");
				errors += 1;
			}

			//zip code check
			if (($zip.val().length != 5) || (!numPatt.test($zip.val()))){
				$errZip.append("Required: Must contain a 5 number Zip Code!");
				errors += 1;
			}

			//phone check
			if (($phone.val().length != 10) || (!numPatt.test($phone.val()))){
				$errPhone.append("Required: Must contain a 10 digit number with no space or dashes!");
				errors += 1;
			}

			//email check
			if (!emailPatt.test($email.val())){
				$errEmail.append("Required: Must be a valid e-mail address!");
				errors += 1;
			}

			//credit card check
			if($none.is(":checked")){

			}
			else{
				if(($ccNum.val().length >= 13) && ($ccNum.val().length <= 16)){
					if(!numPatt.test($ccNum.val())){
						$errCCNum.append("Must contain a 13-16 digit number with no space or dashes!");
						errors += 1;
					}
				}
				else{
					$errCCNum.append("Must contain a 13-16 digit number with no space or dashes!");
					errors += 1;
				}
			}

			//credit card date check
			if($none.is(":checked")){

			}
			else{
				if (($expMonth.val() == "") || ($expYear.val() == "")){
					$errDate.append("Must select a Month and Year!");
					errors +=1;
				}
			}

			//error count
			if (errors > 0){
				$custForm.prepend('<p class="errMsg">Please edit the marked fields below to fix errors.</p>');
				event.preventDefault();
			}
		});	
});