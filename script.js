document.getElementById('y').textContent = new Date().getFullYear();

document.querySelectorAll('#menu a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('menu').classList.remove('open')));

// Formulario: abre el correo con el mensaje. Cambia EMAIL por el de Mego Dev.
const EMAIL = 'diegomegop@gmail.com';
const form=document.getElementById('form');
if(form)form.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `Nombre: ${f.get('nombre')}\nCorreo: ${f.get('email')}\nServicio: ${f.get('servicio')}\n\n${f.get('mensaje')}`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Cotización Mego Dev')}&body=${encodeURIComponent(body)}`;
});
