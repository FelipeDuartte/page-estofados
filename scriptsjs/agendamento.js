  document
        .getElementById("form-agendamento")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const nome = document.getElementById("nome").value;
          const endereco = document.getElementById("endereco").value;
          const detalhes = document.getElementById("detalhes").value;

          const mensagem = `Olá! Gostaria de agendar um serviço de limpeza de estofados.%0A%0A*Nome:* ${nome}%0A*Endereço:* ${endereco}%0A*Detalhes:* ${detalhes}`;

          const telefone = "3185791409";

          window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
        });