// Substitua pelo WhatsApp verdadeiro da empresa (55 + DDD + número).
const WHATSAPP_NUMBER = '';
const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento da Pest Control Brothers.');
document.querySelectorAll('a[href*="wa.me"], [data-whatsapp]').forEach(el => {
  el.addEventListener('click', event => {
    if (!WHATSAPP_NUMBER) { event.preventDefault(); alert('WhatsApp ainda não configurado. Adicione o número em script.js.'); return; }
    event.preventDefault(); window.open('https://wa.me/'+WHATSAPP_NUMBER+'?text='+message,'_blank','noopener,noreferrer');
  });
});