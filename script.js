document.getElementById('y').textContent=new Date().getFullYear();
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('menu').classList.remove('open')));
var MAIL='sergiomegop@gmail.com',WA='51904228816';
var form=document.getElementById('form');
if(form){
 var txt=function(){var f=new FormData(form);return 'Nombre: '+f.get('nombre')+'\nCorreo: '+f.get('email')+'\nServicio: '+f.get('servicio')+'\n\n'+f.get('mensaje')};
 form.addEventListener('submit',function(e){e.preventDefault();location.href='mailto:'+MAIL+'?subject='+encodeURIComponent('Cotización Mego Dev')+'&body='+encodeURIComponent(txt())});
 document.getElementById('sendwa').addEventListener('click',function(){if(!form.reportValidity())return;window.open('https://wa.me/'+WA+'?text='+encodeURIComponent('Hola Mego Dev, quiero una cotización.\n\n'+txt()),'_blank')});
}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});document.querySelectorAll('.section .container>*').forEach(function(el){el.classList.add('reveal');io.observe(el)})}
