$(document).ready(function(){
	$('#um').click(function(){
		document.forms.display.value +="1";
	});
	$('#dois').click(function(){
		document.forms.display.value +="2";
	});
	$('#tres').click(function(){
		document.forms.display.value +="3";
	});
	$('#quatro').click(function(){
		document.forms.display.value +="4";
	});
	$('#cinco').click(function(){
		document.forms.display.value +="5";
	});
	$('#seis').click(function(){
		document.forms.display.value +="6";
	});
	$('#sete').click(function(){
		document.forms.display.value +="7";
	});
	$('#oito').click(function(){
		document.forms.display.value +="8";
	});
	$('#nove').click(function(){
		document.forms.display.value +="9";
	});
	$('#zero').click(function(){
		document.forms.display.value +="0";
	});
	$('#add').click(function(){
		document.forms.display.value +="+";
	});
	$('#subs').click(function(){
		document.forms.display.value +="-";
	});
	$('#multi').click(function(){
		document.forms.display.value +="*";
	});
	$('#divide').click(function(){
		document.forms.display.value +="/";
	});
	$('#dot').click(function(){
		document.forms.display.value +=".";
	});
	$('#equal').click(function(){
		if (display.value == "") {
			alert("Por favor clique em qualquer numero para realizar um calculo")
		}else{
			document.forms.display.value =
			eval(document.forms.display.value);
		}
	});
	$('#clear').click(function(){
		document.forms.display.value ="" ;
	});
})