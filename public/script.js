document.getElementById('diagForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const url = document.getElementById('siteUrl').value;
    const resultDiv = document.getElementById('diagResult');
    const form = document.getElementById('diagForm');

    form.classList.add('hidden');
    resultDiv.classList.remove('hidden');

    // Simulate analysis steps
    const progress = resultDiv.querySelector('.progress');
    const content = resultDiv.querySelector('.result-content p');

    let steps = [
        "Verificando tempo de carregamento...",
        "Analisando meta tags de SEO...",
        "Testando responsividade mobile...",
        "Validando certificados de segurança...",
        "Análise concluída! Gerando PDF..."
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
        if (currentStep < steps.length) {
            content.textContent = steps[currentStep];
            progress.style.width = ((currentStep + 1) / steps.length * 100) + '%';
            currentStep++;
        } else {
            clearInterval(interval);
            content.innerHTML = `<strong>Análise concluída para: ${url}</strong><br><br>Encontramos 4 pontos críticos que podem estar custando vendas ao seu negócio. <br><br> <a href="https://wa.me/5551933009151?text=Quero%20receber%20o%20relatório%20do%20meu%20site:%20${url}" class="btn-primary" style="display:inline-block; margin-top:10px;">Receber Relatório no WhatsApp</a>`;
        }
    }, 1500);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
