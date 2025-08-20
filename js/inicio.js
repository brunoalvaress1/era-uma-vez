 // Atualiza o ano do rodapé
      document.getElementById('ano').textContent = new Date().getFullYear();

      // Abre imagem no modal
      const imgModal = document.getElementById('imgModal');
      const modalImg = document.getElementById('modalImg');
      imgModal.addEventListener('show.bs.modal', (event) => {
        const trigger = event.relatedTarget;
        const src = trigger?.getAttribute('data-img');
        if (src) modalImg.src = src;
      });
      imgModal.addEventListener('hidden.bs.modal', () => { modalImg.src = ''; });

      // Botões de orçamento nos cards de preço preenchem o campo "Pacote"
      document.querySelectorAll('[data-plan]').forEach(btn => {
        btn.addEventListener('click', () => {
          const plano = btn.getAttribute('data-plan');
          document.querySelector('select[name="pacote"]').value = plano;
          document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
        });
      });

      // Exemplo de envio do formulário (intercepta e monta link de WhatsApp)
      const form = document.getElementById('formContato');
      const btnWhats = document.getElementById('btnWhats');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        const msg = `Olá, gostaria de orçamento para o *${data.pacote}* no dia ${data.data}.\n` +
                    `Nome: ${data.nome}\nTelefone: ${data.telefone}\n` +
                    `Convidados: ${data.convidados || '—'}\n` +
                    `Detalhes: ${data.mensagem || '—'}`;
        const phone = '5519996281803'; // <— coloque o DDI+DDD+número do salão
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
      });

      // Botão WhatsApp isolado (sem submeter)
      btnWhats.addEventListener('click', (e) => {
        e.preventDefault();
        const phone = '5519996281803'; // <— troque pelo número real
        window.open(`https://wa.me/${phone}`, '_blank');
      });


    
    // Animação ao scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.gallery-item').forEach((el) => {
      observer.observe(el);
    });
    document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        // Fecha a navbar usando o método Bootstrap
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
});