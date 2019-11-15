var compressed = false;
var inputVisible = false;
var outputClick = false;
var isUpdated = false;
var lastFocusedCS;
var lastFocusedVW;

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
	var homeBtn = $("#homeBtn");
	var graphBtn = $("#graphBtn");
	var customerBtn = $("#costumerBtn");
	var volumeBtn = $("#volumeBtn");

	var recontractBtn = $("#recontract");
	var baselineBtn = $("#baseline");


	var graphDiv = $("#graphWrapper");
	var customersDiv = $("#costumerWrapper");
	var volumeWrapper = $("#volumeWrapper");

	recontractBtn.addClass("focusState");
	baselineBtn.addClass("focusState");
	lastFocusedCS = recontractBtn;
	lastFocusedVW = baselineBtn;
	

	// set the onclick function of the buttons
	homeBtn.click(function(){
		outputClick = false;
		$("#outputBtn > #icon").css("color","gray");
		$("#homeBtn > #icon").css("color","red");
		graphDiv.css("display","none");
		volumeWrapper.css("display","none");
		customersDiv.css("display","none");
		
	});

	graphBtn.click(function(){
		outputClick = true;
		showDiv(graphDiv,customersDiv,volumeWrapper);
		$("#homeBtn > #icon").css("color","gray");
		
	});

	customerBtn.click(function(){
		outputClick = true;
		showDiv(customersDiv,graphDiv,volumeWrapper);
		$("#homeBtn > #icon").css("color","gray");
	});

	volumeBtn.click(function(){
		outputClick = true;
		showDiv(volumeWrapper,graphDiv,customersDiv);
		$("#homeBtn > #icon").css("color","gray");


	});

	$(".typeBtn").hover(function(){
		if(!$(this).css("border-color") != "rgb(255, 0, 0)"){
			$(this).addClass("hoverState");
		}
	}, function() {
		$(this).removeClass("hoverState");
	});

	// CONSUMER SEGMENTATION (OUTPUT) - BTN WRAPPER
	$("#costumerWrapper > .btnWrapper > .typeBtn").click(function(){
		var btn =  $(document.getElementById($(this)[0].id));
		if(lastFocusedCS[0] != btn[0]){
			btn.addClass("focusState");

			if(lastFocusedVW != null){
				lastFocusedCS.removeClass("focusState");
			}
			lastFocusedCS = btn;
		}
		var image = document.getElementById("imgCS");
		if(!isUpdated){
			if(btn[0].id == "recontract"){
				image.src = "img/meta-chart.png";
			}
			else if(btn[0].id == "new"){
				image.src = "img/meta-chart2.png";
			}else{
				image.src = "img/meta-chart3.png";
			}
		}else{
			if(btn[0].id == "recontract"){
				image.src = "img/meta-chart4.png";
			}
			else if(btn[0].id == "new"){
				image.src = "img/meta-chart5.png";
			}else{
				image.src = "img/meta-chart6.png";
			}
		}
	});

	// BASELINE VS SCENARIO (OUTPUT) - BTN WRAPPER
	$("#volumeWrapper > .btnWrapper > .typeBtn").click(function(){
		var btn =  $(document.getElementById($(this)[0].id));
	
		if(lastFocusedVW[0] != btn[0]){
			btn.addClass("focusState");

			if(lastFocusedVW != null){
				lastFocusedVW.removeClass("focusState");
			}
			lastFocusedVW = btn;
		}
		var image = document.getElementById("imgVL");
		if(!isUpdated){
			if(btn[0].id == "baseline"){
				image.src = "img/meta-chart3.png";
			}
			else if(btn[0].id == "scenario"){
				image.src = "img/meta-chart.png";
			}else{
				image.src = "img/meta-chart2.png";
			}
		}else{
			if(btn[0].id == "baseline"){
				image.src = "img/meta-chart5.png";
			}
			else if(btn[0].id == "scenario"){
				image.src = "img/meta-chart6.png";
			}else{
				image.src = "img/meta-chart4.png";
			}
		}
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
		if($("#inputBtn > #icon").css("color") == "rgb(255,0,0)"){
			setInputCloseButton();
		}else{
			inputVisible = true;
		scrollToTop();
		$("#inputPanel").slideDown("slow");
		$("#inputBtn > #icon").css("color","red");

		if(compressed){
			$("#costumerBody").css("padding-right","10%");
			$("#volumeBody").css("padding-right","10%");
			$(".btnWrapper").css("width", "20%");
			
		}else{
			$("#costumerBody").css("padding-right","-20%");
			$("#volumeBody").css("margin-right", "-50px");
			$(".btnWrapper").css("width", "20%");
			
		}

		$("#outputPanel").css("margin-top", "10px");
		$("#volumeBody").css("padding-left", "5%");
		$("#costumerBody").css("padding-left", "5%");
		$("#costumerBody").css("margin-right", "-10px");
		}
		
	});
}

function setHoverEffect(element){
	$(element).hover(function(){
		var fontSize = "21px";
		if(compressed)
			fontSize = "11px";
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
		if(!outputClick)
			$("#outputBtn > #icon").css("color","gray");
		$("#outputBtn > #icon").css("font-size","24px");
		$("#outputBtn > #icon").css("left","30px");

	});
}
function setInputCloseButton(){

	$("#inputCloseButton").click(function(){
		inputVisible = false;
		$("#inputPanel").slideUp("slow");
		$("#inputBtn > #icon").css("color","gray");
		
		if(compressed){
			$("#volumeBody").css("padding-right","20%");
		}else{
			$("#volumeBody").css("margin-right", "-60px");
		}

		$("#outputPanel").css("margin-top", "60px");
		$("#volumeBody").css("padding-left", "15%");
		$("#costumerBody").css("padding-left", "15%");
		$("#costumerBody").css("margin-right", "80px");
		$(".btnWrapper").css("float", "left");
		$(".btnWrapper").css("width", "");

	});
}

function setCompressedSheet(){
	// set le bouton pour pouvoir compresser la barre de navigation
	compressed = true;
	
	swapNavigationStyleSheet("navBarStyleCompressed.css");

	//Recentre le customerBody et le volumeBody lorsque le menu est compressé
	if(inputVisible){
		$("#costumerBody").css("padding-right","10%");
		$("#volumeBody").css("padding-right","10%");
		$(".btnWrapper").css("width", "20%");
	}else{
		$("#costumerBody").css("padding-right","25%");
		$("#volumeBody").css("padding-right","20%");
		$(".btnWrapper").css("width", "");
	}
	$("#costumerBody").css("width","60%");
	$("#costumerBody img").css("padding-left", "15%");
	$("#volumeBody").css("width","60%");
	$("#volumeBody img").css("padding-left", "15%");
	$("#graphWrapper").css("width","52%");
	$("#graphWrapper").css("padding-left","20%");

	setHoverEffect("#outputBtn");
	$("#outputBtn").css("font-size","10px");
	
	var btn = document.getElementById("parametresButton");

	btn.setAttribute("class", "fas fa-angle-double-right");
	btn.onclick = function() { setExpandedSheet()};}
		

function setExpandedSheet(){
	compressed = false;

	// set le bouton pour pouvoir etendre la barre de navigation
	
	
	swapNavigationStyleSheet("navBarStyleExpanded.css");

	//Recentre le customerBody

	$("#costumerBody").css("width","70%");
	$("#costumerBody").css("padding-right","1%");
	$("#costumerBody img").css("padding-left", "0%");
	$("#volumeBody").css("width","70%");
	$("#volumeBody").css("padding-right","5%");
	$("#volumeBody img").css("padding-left", "0");
	$("#graphWrapper").css("width","60%");
	$("#graphWrapper").css("padding-left","15%");


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

// Inputs changes
changeInputs = function () {
	isUpdated = true;
	var imgCS = document.getElementById("imgCS");
	var imgVL = document.getElementById("imgVL");
	var imgGraph = document.getElementById("imgGraph");

	if(lastFocusedCS[0].id == "recontract"){
		imgCS.src = "img/meta-chart4.png";
	}else if(lastFocusedCS[0].id == "new"){
		imgCS.src = "img/meta-chart5.png";
	}else if(lastFocusedCS[0].id == "compareCS"){
		imgCS.src = "img/meta-chart6.png";
	}
	if(lastFocusedVW[0].id == "baseline"){
		imgVL.src = "img/meta-chart5.png";
	}else if(lastFocusedVW[0].id == "scenario"){
		imgVL.src = "img/meta-chart6.png";
	}else if(lastFocusedVW[0].id == "compareVW"){
		imgVL.src = "img/meta-chart4.png";
	}
	imgGraph.src = "img/graphMAJ.png";
  
}
