var compressed = false;

window.onload = initiate;

function initiate(){

	initiateNavigationBar();

	setInputPanel();
}


function initiateNavigationBar(){
	// set le bouton qui permet d'expand et de contracter la barre de navigation
	setExpandedSheet();
	setInputNavButton();

	// set the 3 
	setOutputLinks(); 

	// set the hover effects for outputBtn and its types to modify the style of the button
	setHoverEffect("#outputTypes");
	setHoverEffect("#outputBtn");

}
function setOutputLinks(){
	var graphBtn = $("#graphBtn");
	var customerBtn = $("#costumerBtn");
	var volumeBtn = $("#volumeBtn");

	var graphDiv = $("#graphWrapper");
	var customersDiv = $("#costumerWrapper");
	var volumeWrapper = $("#volumeWrapper");

	// set the onclick function of the buttons

	graphBtn.click(function(){
		showDiv(graphDiv,customersDiv,volumeWrapper);
	});

	customerBtn.click(function(){
		showDiv(customersDiv,graphDiv,volumeWrapper);
	});

	volumeBtn.click(function(){
		showDiv(volumeWrapper,graphDiv,customersDiv);


	});
}

// Montre un seul des 3 div de output
function showDiv(showDiv,hideDiv1,hideDiv2){
	showDiv.css("display","block");
	hideDiv1.css("display","none");
	hideDiv2.css("display","none");
}




function setInputPanel(){
	setInputCloseButton();
}

function setInputNavButton(){
	$("#inputBtn").click(function(){
		scrollToTop();
		$("#inputPanel").slideDown("slow");
		$("#outputPanel").css("margin-top", "10px");
		$("#volumeBody").css("margin-right", "-50px");
		$("#volumeBody").css("padding-left", "5%");
		$("#costumerBody").css("padding-left", "5%");
		$("#costumerBody").css("margin-right", "-10px");
		$("#volumeWrapper .btnWrapper #baseline").css("margin-top", "15px");
		$("#volumeWrapper .btnWrapper #scenario").css("margin-top", "15px");
		$("#volumeWrapper .btnWrapper #compare").css("margin-top", "15px");
	});
}

function setHoverEffect(element){
	$(element).hover(function(){
		var fontSize = "21px";
		if(compressed)
			fontSize = "11px"
		$("#outputBtn").css("font-size",fontSize);
		if(!compressed){
			$("#outputBtn").css("border-style","solid");
			$("#outputBtn").css("border-color","#7c7c7c");
			$("#outputBtn").css("border-width","0px 0px 3px 0px");
		}
		

		$("#outputBtn > #icon").css("color","red");
		$("#outputBtn > #icon").css("font-size","25px");
		$("#outputBtn > #icon").css("left","24px");

	},function(){
		var fontSize = "20px";
		if(compressed)
			fontSize = "10px"
		$("#outputBtn").css("font-size",fontSize);
				$("#outputBtn").css("border-style","none");

		$("#outputBtn > #icon").css("color","gray");
		$("#outputBtn > #icon").css("font-size","24px");
		$("#outputBtn > #icon").css("left","30px");

	});
}
function setInputCloseButton(){

	$("#inputCloseButton").click(function(){
		$("#inputPanel").slideUp("slow");
		
		$("#outputPanel").css("margin-top", "60px");
		$("#volumeBody").css("margin-right", "-60px");
		$("#volumeBody").css("padding-left", "15%");
		$("#costumerBody").css("padding-left", "15%");
		$("#costumerBody").css("margin-right", "80px");
		$("#volumeWrapper .btnWrapper #baseline").css("margin-top", "-15px");
		$("#volumeWrapper .btnWrapper #scenario").css("margin-top", "-15px");
		$("#volumeWrapper .btnWrapper #compare").css("margin-top", "-15px");

	});
}

function setCompressedSheet(){
	// set le bouton pour pouvoir compresser la barre de navigation
	compressed = true;
	
	swapNavigationStyleSheet("navBarStyleCompressed.css");

	setHoverEffect("#outputBtn");
	$("#outputBtn").css("font-size","10px");
	
	var btn = document.getElementById("parametresButton");

	btn.setAttribute("class", "fas fa-angle-double-right");
	btn.onclick = function() { setExpandedSheet()};}
		

function setExpandedSheet(){
	compressed = false;

	// set le bouton pour pouvoir etendre la barre de navigation
	
	
	swapNavigationStyleSheet("navBarStyleExpanded.css");


	setHoverEffect("#outputBtn");
	$("#outputBtn").css("font-size","20px");

	var btn = document.getElementById("parametresButton");
	btn.setAttribute("class", "fas fa-angle-double-left");
	btn.onclick = function() { setCompressedSheet()};}


function swapNavigationStyleSheet(sheet){
	document.getElementById("navBarStyle").setAttribute("href",sheet);
}

function scrollToTop(){
	window.scrollTo({top:0,behavior:'smooth'});
}