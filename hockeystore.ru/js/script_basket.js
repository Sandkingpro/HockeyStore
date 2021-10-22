var sum=0;
window.onload=function(){
    //if(localStorage.getItem('cost')!==null){
        //sum=localStorage.getItem('cost')
    //}
    
    if(read_cookie("cost")!=null){
        sum=read_cookie("cost");
    }
    if(sum===0){
        document.querySelector('.buy').style.display="none";
    }
    else{
        document.querySelector('.buy').style.display='block';
    }
    var array= [""];
    let ul = document.querySelector('.order');
    //array=JSON.parse(localStorage.getItem("repeats"));
    array=read_cookie("repeats");
    console.log(array);
    if(array===null){
        array=[];
    }
    if(read_cookie("basket")!==null)
    {
         //var list = JSON.parse(localStorage.getItem("basket"));
         var list=read_cookie("basket");
         console.log(list);
        for(let j=0;j<list.length;j++)
        {
        var name=list[j].name;
        var img=list[j].img;
        var price=list[j].price;
        var count;
        count=list[j].count;
        var k=0;
        if(array!=null && array.length!==0){
        for(let i=0;i<array.length;i++){
        if(array[i]===img){
            k=1;
        }
    }
    }
    
    
    //ul.innerHTML=localStorage.getItem("items");
    ul.innerHTML=read_cookie("items");
    if(read_cookie("event")!==null && k!==1)
    {
        let li = document.createElement('li');
        let div=document.createElement('div');
        let ulc=document.createElement('ul');
        let li1=document.createElement('li');
        let li2=document.createElement('li');
        let li3=document.createElement('li');
        let remove=document.createElement('input');
        remove.classList.add("remove");
        let plus=document.createElement('input');
        plus.classList.add("plus");
        let counter=document.createElement('div')
        counter.classList.add("counter");
        
        plus.setAttribute('src',"Site_icons/plus.png")
        remove.setAttribute('src',"Site_icons/remove.png")
        plus.setAttribute('type','image');
        remove.setAttribute('type','image');
        counter.textContent=count;
        li1.appendChild(remove);
        li2.appendChild(counter);
        li3.appendChild(plus);
        ulc.appendChild(li1);
        ulc.appendChild(li2);
        ulc.appendChild(li3);
        div.appendChild(ulc);
        let image = new Image();
        image.classList.add('img');
        let p=document.createElement('p');
        p.classList.add('name');
        let h1=document.createElement('h1');
        h1.classList.add('price');
        let h2=document.createElement('h2');
        h2.classList.add("basket-currency");
        h2.textContent='руб.'
        p.textContent=name;
        h1.textContent=price;
        sum=parseInt(sum)+parseInt(price)*parseInt(count);
        //localStorage.setItem('cost',sum);
        bake_cookie("cost",sum);
        image.setAttribute('src',img);
        array.push(img);
        console.log(array);
        //localStorage.setItem('repeats',JSON.stringify(array))
        bake_cookie("repeats",array);
        let del=document.createElement('input');
        del.setAttribute('src','Site_icons/del.png')
        del.setAttribute('type','image');
        del.classList.add('del');
        div.appendChild(image);
        div.appendChild(p);
        div.appendChild(h1);
        div.appendChild(h2);
        li.appendChild(div);
        li.appendChild(del);
        ul.appendChild(li);

       
    }
    document.querySelector('.value').textContent=sum+' руб.';
    //localStorage.setItem('items',ul.innerHTML);
    bake_cookie("items",ul.innerHTML);
    document.querySelector('.buy').style.display="block";
    
        }
        const deleteList = document.querySelectorAll('.del');

deleteList.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentNode.parentNode.removeChild(btn.parentElement);
        //localStorage.setItem('items',ul.innerHTML);
        bake_cookie("items",ul.innerHTML);
        const inp=btn.parentNode.querySelector('.counter');
        const currentValue=inp.textContent;
        const curprice=btn.parentNode.querySelector('.price').textContent;
        sum=parseInt(sum)-parseInt(curprice)*(parseInt(currentValue));
        if(sum===0){
            clear();
        }
        document.querySelector('.value').textContent=sum+' руб.';
        //localStorage.setItem('cost',sum) ;
        bake_cookie("cost",sum);
        //var new_list = JSON.parse(localStorage.getItem("basket"));
        var new_list=read_cookie("basket");
        console.log(new_list);
        var obj={'name':btn.parentNode.querySelector('.name').textContent,'img':btn.parentNode.querySelector('.img').getAttribute('src'),'price':btn.parentNode.querySelector('.price').textContent,'count':btn.parentNode.querySelector('.counter').textContent};
        console.log(obj);
        let i=new_list.findIndex(el=>el.name===obj.name);
        if(i >= 0) {
             new_list.splice(i,1);
        }   
        //localStorage.setItem('basket',JSON.stringify(new_list));
        bake_cookie("basket",new_list);
        let j =array.findIndex(el=>el===btn.parentNode.querySelector('.img').getAttribute('src'));
        if(j >= 0) {
             array.splice(j,1);
        }
        //localStorage.setItem('repeats',JSON.stringify(array));
        bake_cookie("repeats",array);
    });
}); 

        var btns= document.querySelectorAll(".plus");
console.log(btns);
var minus=document.querySelectorAll('.remove');
btns.forEach(btn=>{
  btn.addEventListener('click',function(){
      const inp=this.parentElement.parentElement.querySelector('.counter');
      const currentValue=inp.textContent;
       const curprice=this.parentElement.parentElement.parentElement.querySelector('.price').textContent;
      let newValue;
      if(parseInt(currentValue)<5)
      {
        newValue=parseInt(currentValue)+1;
        inp.textContent=newValue;
        sum=parseInt(sum)+parseInt(curprice)*(parseInt(newValue)-parseInt(currentValue));
        document.querySelector('.value').textContent=sum+' руб.';
        //localStorage.setItem('cost',sum) ;
        //localStorage.setItem('items',ul.innerHTML);
        bake_cookie("cost",sum);
        bake_cookie("items",ul.innerHTML);
      }
      
  })
})
minus.forEach(btn=>{
  btn.addEventListener('click',function(){
      const inp=this.parentElement.parentElement.querySelector('.counter');
      const currentValue=inp.textContent;
      const curprice=this.parentElement.parentElement.parentElement.querySelector('.price').textContent;
      let newValue;
      if(parseInt(currentValue)>1)
      {
        newValue=parseInt(currentValue)-1;
        inp.textContent=newValue;
        sum=parseInt(sum)-parseInt(curprice)*(parseInt(currentValue)-parseInt(newValue));
        document.querySelector('.value').textContent=sum+' руб.';
        //localStorage.setItem('cost',sum) ;
        //localStorage.setItem('items',ul.innerHTML);
        bake_cookie("cost",sum);
        bake_cookie("items",ul.innerHTML);
      }

       
  })
})
        //localStorage.removeItem('event');
        delete_cookie("event");
    }
   
}
var clearbtn=document.querySelector('.clear')
clearbtn.addEventListener('click',clear);
function clear(){
     //localStorage.clear();
    delete_cookie("event");
     delete_cookie("repeats");
     delete_cookie("basket");
     delete_cookie("cost");
     delete_cookie("items");
    $('.order').hide();
    document.querySelector('.value').textContent='0 руб.';
    document.querySelector('.buy').style.display='none';
}
function bake_cookie(name, value) {
  var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;','max-age=259200;'].join('');
  document.cookie = cookie;
}
function read_cookie(name) {
 var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
 result && (result = JSON.parse(result[1]));
 return result;
}
function delete_cookie(name) {
  document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
}
