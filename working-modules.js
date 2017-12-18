jQuery( document ).ready( function() {
	var imgsrc;
	var imgChecker;
	var openCategory;

	jQuery( "#module-down" ).attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
	jQuery( "#module-down2" ).attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
	jQuery( "#module-down3" ).attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
	jQuery("#open-info1").toggleClass("active");
	var moduleHeight = jQuery("#acc-content1").height();
	jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
	jQuery( "#acc-content1" ).css('display','block');
	jQuery( "#acc-content2" ).hide();
	jQuery( "#acc-content3" ).hide();
	jQuery( ".brochures" ).hide();

	jQuery( "#open-info1" ).click( function() { 
		moduleHeight = jQuery("#acc-content1").height();;
		var x=jQuery("#acc-content1").css('display'); //In Ground Categories
		var y=jQuery("#open-info2").hasClass( "active" ); // Above Ground
		var z=jQuery("#open-info3").hasClass( "active" ); // Commercial

		if (x === 'none' && y === false && z === false) {
			subcategories("#acc-content1", "#module-down", "#open-info1");
		} else if (x === 'block' && y ===  false && z === false) {
			jQuery("#open-info1").toggleClass("active");
			activeHeightAdjusment("#open-info1");
			arrows("#module-down");
			jQuery("#acc-content1").slideToggle("200");
		} else if ( y === true || z === true ) {
			removeAGModule();
		} 
		openCategory = ''; // maybe delete
	});

	function subcategories (content, arrowDiv, currentTab) {
		var j;
		var arr = [];		
		var openedBrochures = "false";

		jQuery(".brochures").each( function() {
			arr[i] = jQuery(this).css('display');
			i++;
		});

		for (j=0; j<arr.length; j++) { 
			if (arr[j] === 'block') {
				openedBrochures = "true";
			} 
		}

		if (openedBrochures === "true") {
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			jQuery(content).toggle('slide' , { direction: "left" }, 800); 
			openCategory.toggle('slide' , { direction: "right" }, 800); 
			jQuery(arrowDiv).attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
		} else {
			jQuery(currentTab).toggleClass("active");
			activeHeightAdjusment(currentTab);
			arrows(jQuery(arrowDiv));
			jQuery(content).slideToggle("200");	
		}
		openCategory = '';
	}

	function activeHeightAdjusment(currentTab) {
		var buttonStatus = jQuery(currentTab).hasClass('active');
		if(buttonStatus === true) {
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
		} else {
			jQuery(".module-ctn").animate({ height: '0px' }, 800);
		}
	}

	function arrows (arrowDiv) { 
		var imgsrc = jQuery(arrowDiv).attr("src"); 
		imgCheker = "/assets/images/pools/content/literature-portal/module-arrow-up.png";
		if (imgsrc === imgCheker) {
			jQuery(arrowDiv).attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
		} else {
			jQuery(arrowDiv).attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
		}
	}

	var IGround = {
		tab : jQuery("#open-info1"),
		arrowDiv : jQuery("#module-down"),
		content : jQuery("#acc-content1")
	}
	var AGround = {
		tab : jQuery("#open-info2"),
		arrowDiv : jQuery("#module-down2"),
		content : jQuery("#acc-content2")
	}
	var commercial = {
		tab : jQuery( "#open-info3" ),
		arrowDiv : jQuery("#module-down3"),
		content : jQuery("#acc-content3")
	}

	function removeAGModule () {
		AGround.tab.removeClass("active");
		IGround.tab.addClass("active");
		jQuery( ".brochures" ).hide();
		jQuery(".module-ctn").animate({ height: moduleHeight }, 800);

		IGround.content.css('display','block');
		AGround.content.css('display','none');
		IGround.arrowDiv.attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
		AGround.arrowDiv.attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
	}

	function removeIGModule () {
		IGround.tab.removeClass("active");
		AGround.tab.addClass("active");
		jQuery( ".brochures" ).hide();
		jQuery(".module-ctn").animate({ height: moduleHeight }, 800);

		AGround.content.css('display','block');
		IGround.content.css('display','none');
		AGround.arrowDiv.attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
		IGround.arrowDiv.attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
	}



	jQuery( "#open-info2" ).click( function() {
		var moduleHeight = jQuery("#acc-content2").height();;
		
		var y=jQuery("#acc-content2").css('display');
		var x=jQuery("#open-info1").hasClass( "active" );
		var z=jQuery("#open-info3").hasClass( "active" );
		if (x === false  && y === 'none' && z === false ) {
			subcategories("#acc-content2", "#module-down2", "#open-info2");
		} else if (y === 'block' && x === false && z === false) {
			jQuery("#open-info2").toggleClass("active");
			activeHeightAdjusment("#open-info2");
			arrows("#module-down2");
			jQuery("#acc-content2").slideToggle("200");
		} else if (x === true || z === true) {
			removeIGModule();
		} 
		openCategory = '';
	});

	/*jQuery( "#open-info3" ).click( function() {
		var i = 0;
		var j;
		var w = "false";
		var arr = [];
		jQuery(".brochures").each( function() { 
			arr[i] = jQuery(this).css('display'); i++; 
		});
		var x=jQuery("#open-info1").hasClass( "active" );
		var y=jQuery("#open-info2").hasClass( "active");
		var z=jQuery("#acc-content3").css('display');
		if (x === false && y === false && z === 'none') {
			for (j=0; j<arr.length; j++) {
				if (arr[j] === 'block') {
					w = "true";
				} 
			}
			if (w === "true") {
				moduleHeight = jQuery("#acc-content3").height();
				jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
				jQuery("#acc-content3").toggle('slide' , { direction: "left" }, 800);
				openCategory.toggle('slide' , { direction: "right" }, 800);
				jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			} else {
				jQuery("#open-info3").toggleClass("active");
				var imgsrc = jQuery("#module-down3").attr("src");
				var imgChecker = "/assets/images/pools/content/literature-portal/module-arrow-up.png";
				var buttonStatus = jQuery("#open-info3").hasClass('active');
				if(imgsrc === imgChecker) {
					jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
				} else {
					jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
				}
				if(buttonStatus === true) {
					moduleHeight = jQuery("#acc-content3").height();
					jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
				} else {
					jQuery(".module-ctn").animate({ height: '0px' }, 800);
				}
				jQuery("#acc-content3").slideToggle("200");		
			}
		} else if (x === false && y === false && z === 'block') {
			jQuery("#open-info3").toggleClass("active");
			var imgsrc = jQuery("#module-down3").attr("src");
			var imgChecker = "/assets/images/pools/content/literature-portal/module-arrow-up.png";
			var buttonStatus = jQuery("#open-info3").hasClass('active');
			if(imgsrc === imgChecker) {
				jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			} else {
				jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			}
			if(buttonStatus === true) {
				moduleHeight = jQuery("#acc-content3").height();
				jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			} else {
				jQuery(".module-ctn").animate({ height: '0px' }, 800);
			}
			jQuery("#acc-content3").slideToggle("200");
		} else if (x === true || y === true) {
			jQuery("#open-info1").removeClass("active");
			jQuery("#open-info2").removeClass("active");
			jQuery("#open-info3").addClass("active");
			jQuery( ".brochures" ).hide();
			moduleHeight = jQuery("#acc-content3").height();
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#acc-content1").css('display','none');
			jQuery("#acc-content2").css('display','none');
			jQuery("#acc-content3").css('display','block');
		} 
		openCategory = '';
	});*/

	/* 									Breadcrumb Link  									*/
	
	jQuery(".md_breadcrumb_link").click(function(){
		var i = 0;
		var j;
		var w = "false";
		var arr = [];
		jQuery(".brochures").each( function() { 
			arr[i] = jQuery(this).css('display'); i++; 
		});
		for (j=0; j<arr.length; j++) {
			if (arr[j] === 'block') {
				w = "true";
			} 
		}
		if (w === "true") {
			moduleHeight = jQuery("#acc-content1").height();
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			jQuery("#acc-content1").toggle('slide' , { direction: "left" }, 800);
			openCategory.toggle('slide' , { direction: "right" }, 800);
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
		}
	});
	
	jQuery(".md_breadcrumb_link2").click(function(){
		var i = 0;
		var j;
		var w = "false";
		var arr = [];
		jQuery(".brochures").each( function() { 
			arr[i] = jQuery(this).css('display'); i++; 
		});
		for (j=0; j<arr.length; j++) {
			if (arr[j] === 'block') {
				w = "true";
			} 
		}
		if (w === "true") {
			moduleHeight = jQuery("#acc-content2").height();
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			jQuery("#acc-content2").toggle('slide' , { direction: "left" }, 800);
			openCategory.toggle('slide' , { direction: "right" }, 800);
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
		}
	});

	/* jQuery(".md_breadcrumb_link3").click(function(){
		var i = 0;
		var j;
		var w = "false";
		var arr = [];
		jQuery(".brochures").each( function() { 
			arr[i] = jQuery(this).css('display'); i++; 
		});
		for (j=0; j<arr.length; j++) {
			if (arr[j] === 'block') {
				w = "true";
			} 
		}
		if (w === "true") {
			moduleHeight = jQuery("#acc-content3").height();
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			jQuery("#acc-content3").toggle('slide' , { direction: "left" }, 800);
			openCategory.toggle('slide' , { direction: "right" }, 800);
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
		}
	}); */

	/* 									Brochures - subcategory  									*/
	
	jQuery("a[name = 'categories']").click( function() {
		var category = jQuery(this).attr("class");
		moduleHeight = jQuery("#" + category + "ochures").height();
		openCategory = jQuery("#" + category + "ochures");

		jQuery("#acc-content1").toggle('slide' , { direction: "left" }, 800);
		openCategory.toggle('slide' , { direction: "right" }, 800);
		jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
		jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-left.png");
	});

	jQuery("a[name = 'categories2']").click( function() {
		var category = jQuery(this).attr("class");
		moduleHeight = jQuery("#" + category + "ochures").height();
		openCategory = jQuery("#" + category + "ochures");

		jQuery("#acc-content2").toggle('slide' , { direction: "left" }, 800);
		openCategory.toggle('slide' , { direction: "right" }, 800);
		jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
		jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-left.png");
	});

	/* jQuery("a[name = 'categories3']").click( function() {
		var category = jQuery(this).attr("class");
		moduleHeight = jQuery("#" + category + "ochures").height();
		jQuery("#acc-content3").toggle('slide' , { direction: "left" }, 800);
		openCategory = jQuery("#" + category + "ochures");
		jQuery("#" + category + "ochures").toggle('slide' , { direction: "right" }, 800);
		jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
		jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-left.png");
	}); */

		/* 									Collapse Button									*/
	
	jQuery(".collapse").click(function(){
		var i = 0;
		var j;
		var w = "false";
		var arr = [];
		jQuery(".brochures").each( function() { 
			arr[i] = jQuery(this).css('display'); i++; 
		});
		for (j=0; j<arr.length; j++) {
			if (arr[j] === 'block') {
				w = "true";
			} 
		}
		if (w === "true") {
			moduleHeight = jQuery("#acc-content1").height();
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			jQuery("#acc-content1").toggle('slide' , { direction: "left" }, 800);
			openCategory.toggle('slide' , { direction: "right" }, 800);
			jQuery("#acc-content1").slideUp("slow");
			jQuery(".module-ctn").animate({ height: '0px' }, 800);
			jQuery("#open-info1").removeClass("active"); 
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
		} else {
			jQuery("#acc-content1").slideUp("slow");
			jQuery(".module-ctn").animate({ height: '0px' }, 800);
			jQuery("#open-info1").removeClass("active"); 
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
		}
	});

	jQuery(".collapse-2").click(function(){
		var i = 0;
		var j;
		var w = "false";
		var arr = [];
		jQuery(".brochures").each( function() { 
			arr[i] = jQuery(this).css('display'); i++; 
		});
		for (j=0; j<arr.length; j++) {
			if (arr[j] === 'block') {
				w = "true";
			} 
		}
		if (w === "true") {
			moduleHeight = jQuery("#acc-content2").height();
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			jQuery("#acc-content2").toggle('slide' , { direction: "left" }, 800);
			openCategory.toggle('slide' , { direction: "right" }, 800);
			jQuery("#acc-content2").slideUp("slow");
			jQuery(".module-ctn").animate({ height: '0px' }, 800);
			jQuery("#open-info2").removeClass("active"); 
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
		} else {
			jQuery("#acc-content2").slideUp("slow");
			jQuery(".module-ctn").animate({ height: '0px' }, 800);
			jQuery("#open-info2").removeClass("active"); 
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
		}
	});
	
	/*  jQuery(".collapse-3").click(function(){
		var i = 0;
		var j;
		var w = "false";
		var arr = [];
		var obj = jQuery(".brochures").each( function() { arr[i] = jQuery(this).css('display'); i++; } );
		for (j=0; j<arr.length; j++) {
			if (arr[j] === 'block') {
				w = "true";
			} 
		}
		if (w === "true") {
			moduleHeight = jQuery("#acc-content3").height();
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			jQuery("#acc-content3").toggle('slide' , { direction: "left" }, 800);
			openCategory.toggle('slide' , { direction: "right" }, 800);
			jQuery("#acc-content3").slideUp("slow");
			jQuery(".module-ctn").animate({ height: '0px' }, 800);
			jQuery("#open-info3").removeClass("active"); 
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
		} else {
			jQuery("#acc-content3").slideUp("slow");
			jQuery(".module-ctn").animate({ height: '0px' }, 800);
			jQuery("#open-info3").removeClass("active"); 
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
		}
	}); */

	/* 									 MOBILE DROPDOWN									*/
	
	jQuery(".module-categorydropsp").click(function(){
		jQuery("#categorydropopt").slideToggle("200");	
		
	});
	
	jQuery("#option-content1").click(function(){	
	    
	    var i = 0;
		var j;
		var w = "false";
		var arr = [];
		jQuery(".brochures").each( function() { 
			arr[i] = jQuery(this).css('display'); i++; 
		});
		var a=jQuery("#open-info2").hasClass( "active" );
		var b=jQuery("#open-info3").hasClass( "active" );
		var x=jQuery("#acc-content2").css('display');
		var y=jQuery("#acc-content3").css('display');
		
		if (x === 'none' && y === 'none') {
			for (j=0; j<arr.length; j++) {
				if (arr[j] === 'block') {
					w = "true";
				} 
			}
			if (w === "true") {
				moduleHeight = jQuery("#acc-content1").height();
				jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
				jQuery("#acc-content1").toggle('slide' , { direction: "left" }, 800);
				openCategory.toggle('slide' , { direction: "right" }, 800);
				jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			} else {
				jQuery("#open-info1").toggleClass("active");
				var imgsrc = jQuery("#module-down").attr("src");
				var imgChecker = "/assets/images/pools/content/literature-portal/module-arrow-up.png";
				var buttonStatus = jQuery("#open-info1").hasClass('active');
				if(imgsrc === imgChecker) {
					jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
				} else {
					jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
				}
				moduleHeight = jQuery("#acc-content1").height();
				var container = jQuery('#acc-content1').css('display');
				if( container === 'none' ) {
					jQuery("#acc-content1").slideToggle("200");	
					jQuery('.module-ctn').animate({height: moduleHeight}, 800);
				}
				if( container === 'block' ) {
					jQuery("#acc-content1").slideToggle("200");	
					jQuery('.module-ctn').animate({height: '0px'}, 800);
				}
			}	
		} 
		if (x === 'block' || y === 'block') {
			jQuery( ".brochures" ).hide();
			jQuery("#acc-content2").css('display','none');
			jQuery("#acc-content3").css('display','none');
			jQuery("#acc-content1").css('display','block');
			jQuery("#open-info2").removeClass("active");
			jQuery("#open-info3").removeClass("active");
			jQuery("#open-info1").addClass("active");
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			moduleHeight = jQuery("#acc-content1").height();
			jQuery(".module-ctn").animate({ height: moduleHeight });
		}
		if (a === true || b === true) {
			jQuery("#open-info2").removeClass("active");
			jQuery("#open-info3").removeClass("active");
			jQuery("#open-info1").addClass("active");
			jQuery( ".brochures" ).hide();
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#acc-content2").css('display','none');
			jQuery("#acc-content3").css('display','none');
			jQuery("#acc-content1").css('display','block');
		}
		jQuery("#module-categorydropmenu-txt").text( "In Ground Pools" );
	});

	jQuery("#option-content2").click(function(){
		
		var i = 0;
		var j;
		var w = "false";
		var arr = [];
		jQuery(".brochures").each( function() { 
			arr[i] = jQuery(this).css('display'); i++; 
		});
		var a=jQuery("#open-info1").hasClass( "active" );
		var b=jQuery("#open-info3").hasClass( "active" );	
	    var x=jQuery("#acc-content1").css('display');
		var y=jQuery("#acc-content3").css('display');
		if (x === 'none' && y === 'none') {
			for (j=0; j<arr.length; j++) {
				if (arr[j] === 'block') {
					w = "true";
				} 
			}
			if (w === "true") {
				moduleHeight = jQuery("#acc-content2").height();
				jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
				jQuery("#acc-content2").toggle('slide' , { direction: "left" }, 800);
				openCategory.toggle('slide' , { direction: "right" }, 800);
				jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			} else {
				jQuery("#open-info2").toggleClass("active");
				var imgsrc = jQuery("#module-down2").attr("src");
				var imgChecker = "/assets/images/pools/content/literature-portal/module-arrow-up.png";
				var buttonStatus = jQuery("#open-info2").hasClass('active');
				if(imgsrc === imgChecker) {
					jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
				} else {
					jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
				}
				moduleHeight = jQuery("#acc-content2").height();
				var container = jQuery('#acc-content2').css('display');
				if( container === 'none' ) {
					jQuery("#acc-content2").slideToggle("200");	
					jQuery('.module-ctn').animate({height: moduleHeight}, 800);
				}
				if( container === 'block' ) {
					jQuery("#acc-content2").slideToggle("200");	
					jQuery('.module-ctn').animate({height: '0px'}, 800);
				}	
			}	
		} 
		if (x === 'block' || y === 'block') {
			jQuery( ".brochures" ).hide();
			jQuery("#acc-content1").css('display','none');
			jQuery("#acc-content3").css('display','none');
			jQuery("#acc-content2").css('display','block');
			jQuery("#open-info1").removeClass("active");
			jQuery("#open-info3").removeClass("active");
			jQuery("#open-info2").addClass("active");
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			moduleHeight = jQuery("#acc-content2").height();
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
		}
		if (a === true || b === true) {
			jQuery("#open-info1").removeClass("active");
			jQuery("#open-info3").removeClass("active");
			jQuery("#open-info2").addClass("active");
			jQuery( ".brochures" ).hide();
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#acc-content1").css('display','none');
			jQuery("#acc-content3").css('display','none');
			jQuery("#acc-content2").css('display','block');
		}
		jQuery("#module-categorydropmenu-txt").text( "Above Ground Pools" );
	});
	
	jQuery("#option-content3").click(function(){
		
		var i = 0;
		var j;
		var w = "false";
		var arr = [];
		jQuery(".brochures").each( function() { 
			arr[i] = jQuery(this).css('display'); i++; 
		});
		var a=jQuery("#open-info2").hasClass( "active" );
		var b=jQuery("#open-info1").hasClass( "active" );
		var x=jQuery("#acc-content1").css('display');
		var y=jQuery("#acc-content2").css('display');
		if (x === 'none' && y === 'none') {
			for (j=0; j<arr.length; j++) {
				if (arr[j] === 'block') {
					w = "true";
				} 
			}
			if (w === "true") {
				moduleHeight = jQuery("#acc-content3").height();
				jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
				jQuery("#acc-content3").toggle('slide' , { direction: "left" }, 800);
				openCategory.toggle('slide' , { direction: "right" }, 800);
				jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			} else {
				jQuery("#open-info3").toggleClass("active");
				var imgsrc = jQuery("#module-down3").attr("src");
				var imgChecker = "/assets/images/pools/content/literature-portal/module-arrow-up.png";
				var buttonStatus = jQuery("#open-info3").hasClass('active');
				if(imgsrc === imgChecker) {
					jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
				} else {
					jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
				}
				moduleHeight = jQuery("#acc-content3").height();
				var container = jQuery('#acc-content3').css('display');
				if( container === 'none' ) {
					jQuery("#acc-content3").slideToggle("200");	
					jQuery('.module-ctn').animate({height: moduleHeight}, 800);
				}
				if( container === 'block' ) {
					jQuery("#acc-content3").slideToggle("200");	
					jQuery('.module-ctn').animate({height: '0px'}, 800);
				}
			}	
		} 
		if (x === 'block' || y === 'block') {
			jQuery( ".brochures" ).hide();
			jQuery("#acc-content1").css('display','none');
			jQuery("#acc-content2").css('display','none');
			jQuery("#acc-content3").css('display','block');
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			moduleHeight = jQuery("#acc-content3").height();
			jQuery(".module-ctn").animate({ height: moduleHeight }, 800);
			jQuery("#open-info1").removeClass("active");
			jQuery("#open-info2").removeClass("active");
			jQuery("#open-info3").addClass("active");
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
		}

		if (a === true || b === true) {
			jQuery("#open-info1").removeClass("active");
			jQuery("#open-info2").removeClass("active");
			jQuery("#open-info3").addClass("active");
			jQuery( ".brochures" ).hide();
			jQuery("#module-down3").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-up.png");
			jQuery("#module-down").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#module-down2").attr("src" , "/assets/images/pools/content/literature-portal/module-arrow-down.png");
			jQuery("#acc-content1").css('display','none');
			jQuery("#acc-content2").css('display','none');
			jQuery("#acc-content3").css('display','block');
		}
		jQuery("#module-categorydropmenu-txt").text( "Commercial Pools" );  /* calls in text drop down (inner html jquery) */
	});
	jQuery( window ).resize(function() {
		var adjustedMod = 0;
		var temp;
		var i = 0;
		var j = 0;
		var w = jQuery( '#acc-content1' ).css('display'); 
		var x = jQuery( '#acc-content2' ).css('display');
		var y = jQuery( '#acc-content3' ).css('display');
		var arr = [];
		var harr =[];
		var obj = jQuery(".brochures").each( function() { temp=jQuery(this); arr[i] = temp.css('display'); harr[i] = temp.height(); i++; } );
		if( w === 'block') {
			adjustedMod = jQuery("#acc-content1").height();
			jQuery(".module-ctn").css('height', adjustedMod + 'px' );
		} 
		if( x === 'block') {
			adjustedMod = jQuery("#acc-content2").height();
			jQuery(".module-ctn").css('height', adjustedMod + 'px' );
		} 
		if( y === 'block') {
			adjustedMod = jQuery("#acc-content3").height();
			jQuery(".module-ctn").css('height', adjustedMod + 'px' );
		} 
		for(j=0; j<arr.length; j++) {
			if (arr[j] === 'block') {
				adjustedMod = harr[j];
				jQuery(".module-ctn").css('height', adjustedMod + 'px' );
			} 
		}
					
	});
});