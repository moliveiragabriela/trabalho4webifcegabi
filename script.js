function carregarArmarios() {
    fetch('armarios.json')
        .then(response => response.json())
        .then(data => {
            const armariosContainer = document.getElementById('armarios-container');
            const armariosContainer2 = document.getElementById('armarios-container-2');

            function alterar(armario) {
                if (armario.classList.contains('livre')) {
                    armario.classList.remove('livre');
                    armario.classList.add('manutencao');
                    armario.innerText = "Em manutenção";
                } else if (armario.classList.contains('manutencao')) {
                    armario.classList.remove('manutencao');
                    armario.classList.add('bloqueado');
                    armario.innerText = "Bloqueado";
                } else if (armario.classList.contains('bloqueado')) {
                    armario.classList.remove('bloqueado');
                    armario.classList.add('livre');
                    armario.innerText = "Livre";
                }
            }

            data.primeiroAndar.forEach(armario => {
                const div = document.createElement('div');
                div.classList.add('armario', 'livre');
                div.innerText = "Livre";
                div.onclick = function() {
                    alterar(this);
                };
                armariosContainer.appendChild(div);
            });

            data.segundoAndar.forEach(armario => {
                const div = document.createElement('div');
                div.classList.add('armario', 'livre');
                div.innerText = "Livre";
                div.onclick = function() {
                    alterar(this);
                };
                armariosContainer2.appendChild(div);
            });
        });
}

carregarArmarios();
