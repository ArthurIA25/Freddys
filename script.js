document.addEventListener('DOMContentLoaded', function() {
    // Função para atualizar cargos baseado na experiência
    window.updateCargos = function() {
        const experienciaSelect = document.getElementById('experiencia');
        const cargoSelect = document.getElementById('cargo');
        const experienciaValue = experienciaSelect.value;

        // Limpa opções anteriores
        cargoSelect.innerHTML = '<option value="">Selecione sua experiência primeiro</option>';

        if (experienciaValue === 'nenhuma') {
            // Para nenhuma experiência: desabilita e mostra mensagem
            cargoSelect.innerHTML = '<option value="">Nenhum cargo disponível para iniciantes. Ganhe experiência primeiro!</option>';
            cargoSelect.disabled = true;
        } else {
            // Para 1-2 anos ou mais: só mostra "Guarda Noturno"
            cargoSelect.innerHTML = `
                <option value="">Selecione o cargo</option>
                <option value="guarda-noturno">Guarda Noturno</option>
            `;
            cargoSelect.disabled = false;
        }

        // Reseta o valor do cargo
        cargoSelect.value = '';
    };

    const form = document.getElementById('candidaturaForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede envio real
        
        // Verifica se cargo é compatível
        const experienciaValue = document.getElementById('experiencia').value;
        const cargoValue = document.getElementById('cargo').value;
        
        if (experienciaValue === 'nenhuma' || cargoValue !== 'guarda-noturno') {
            alert('Por favor, selecione uma experiência válida e o cargo disponível (Guarda Noturno).');
            return;
        }
        
        // Coleta dados do formulário
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        console.log('Formulário enviado:', data); // Mostra no console do browser (F12)
        
        alert('Candidatura enviada com sucesso! Entraremos em contato em breve para a vaga de Guarda Noturno.');
        
        // Limpa o formulário
        form.reset();
        updateCargos(); // Reseta cargos também
    });
});