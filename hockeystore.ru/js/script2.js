var buy=document.querySelector('.do_order');
var data=document.querySelectorAll('.inp');
buy.addEventListener('click',function(){
	var flag=true;
	data.forEach(input=>{
		if(input.value.replace(/\s/g,"") == ""||input.value==='****************'){
			input.placeholder='****************';
			flag=false;
		}

	})
	if(flag===false){
		alert('Вы не ввели необходимые данные');
	}
})
function read_cookie(name) {
 var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
 result && (result = JSON.parse(result[1]));
 return result;
}