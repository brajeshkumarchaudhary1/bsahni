let body=document.getElementsByTagName("body")[0];
let toggler=document.getElementById("input-toggler");
toggler.addEventListener('click',()=>{
   if(toggler.checked){
     body.style.backgroundColor="#080912E8";
   }
   
   
   else{
      body.style.backgroundColor="#DCDDE8";
   }
})