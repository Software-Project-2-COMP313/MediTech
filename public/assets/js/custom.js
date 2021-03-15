$(window).scroll(function() {
        var sticky = $('.header-menu'),
            scroll = $(window).scrollTop();

        if (scroll >= 70) sticky.addClass('bg-change');
        else sticky.removeClass('bg-change');
    });

			AOS.init({
  
     duration: 1500
});
 $('.toggle-menu').on('click', () => {
      $('body').toggleClass('show-menu');
            
    });
 $('.main-menu a').on('click', () => {
      $('body').removeClass('show-menu');
            
    });
const $menu = $('.toggle-menu');
 $(document).mouseup(function (e) {
        if (!$menu.is(e.target) // if the target of the click isn't the container...
        && $menu.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $('body').removeClass('show-menu');
            $('html').removeClass('no-scroll');
        }
    });
	
	function validateEmail($email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		return emailReg.test( $email );
	}
	
	$( "#submit_button" ).click(function() {
		
		$( ".form-control" ).removeClass( "error animated shake" )
		var name = $("#fname").val();
		var email = $("#email").val();
		var Subject = $("#Subject").val();
		var message = $("#message").val();
		var flag = 0;
		if(name == ''){
			$("#fname").addClass( "error animated shake" );
			flag = 1;
		}
		if(email == ''){
			$("#email").addClass( "error animated shake" );
			flag = 1;
		}
		if( !validateEmail(email)) { 
			$("#email").addClass( "error animated shake" );
			flag = 1;
		}
		if(Subject == ''){
			$("#Subject").addClass( "error animated shake" );
			flag = 1;
		}
		if(message == ''){
			$("#message").addClass( "error animated shake" );
			flag = 1;
		}
		if(flag == 1){
			return false;
		}
		
		$('#submit_button').val("Please wait...");
		
		$.ajax({
			type:'post',
			dataType: "json",
			url:'php/send_mail.php',
			data:{'name':name,'email':email,'subject':Subject,'message':message},
			success:function(data){
				console.log(data);
				if(data.Flag == 200){
					$('#submit_button').val("Your message has been submitted");
					$("#fname").val("");
					$("#email").val("");
					$("#Subject").val("");
					$("#message").val("");
					setTimeout( function(){ 
						$('#submit_button').val("Send Message");
					 }  , 2000 );
				}
			
			}
		});
		
		
		
		
	});
	
	$( "#submitPartner" ).click(function() {
		
		$( ".form-control" ).removeClass( "error animated shake" )
		var name = $("#p_name").val();
		var email = $("#p_email").val();
		var phone = $("#p_phone").val();
		var message = $("#p_msg").val();
		var flag = 0;
		if(name == ''){
			$("#p_name").addClass( "error animated shake" );
			flag = 1;
		}
		if(email == ''){
			$("#p_email").addClass( "error animated shake" );
			flag = 1;
		}
		if( !validateEmail(email)) { 
			$("#p_email").addClass( "error animated shake" );
			flag = 1;
		}
		if(phone == ''){
			$("#p_phone").addClass( "error animated shake" );
			flag = 1;
		}
		if(isNaN(phone)){
			$("#p_phone").addClass( "error animated shake" );
			flag = 1;
		}
		if(message == ''){
			$("#p_msg").addClass( "error animated shake" );
			flag = 1;
		}
		if(flag == 1){
			return false;
		}
		
		$('#submitPartner').text("Please wait...");
		
		$.ajax({
			type:'post',
			dataType: "json",
			url:'php/send_mail_partner.php',
			data:{'name':name,'email':email,'phone':phone,'message':message},
			success:function(data){
				console.log(data);
				if(data.Flag == 200){
					$('#submitPartner').val("Your message has been submitted");
					$("#p_name").val("");
					$("#p_email").val("");
					$("#p_phone").val("");
					$("#p_msg").val("");
					$("#partnermodal").modal('hide');
					$('#submitPartner').text("Submit");
					$( ".form-control" ).removeClass( "error animated shake" )
				}
			
			}
		});
		
		
		
	});
	
	

		