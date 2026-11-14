// Configure o WhatsApp real da empresa: 55 + DDD + número, apenas dígitos.
const WHATSAPP_NUMBER = '';
const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento da Pest Control Brothers.');
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.whatsapp-link').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    if (!WHATSAPP_NUMBER) { alert('WhatsApp ainda não configurado. Adicione o número em script.js.'); return; }
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + message, '_blank', 'noopener,noreferrer');
  });
});