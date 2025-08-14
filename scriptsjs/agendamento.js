const fotoEstofado = document.getElementById("foto-estofado");
const preview = document.getElementById("preview");

fotoEstofado.addEventListener("change", () => {
  preview.innerHTML = ""; 

  const arquivos = fotoEstofado.files;

  for (let i = 0; i < arquivos.length; i++) {
    const arquivo = arquivos[i];

    const container = document.createElement("div");
    container.style.marginBottom = "15px";

    const progress = document.createElement("progress");
    progress.max = 100;
    progress.value = 0;
    progress.style.width = "200px";
    progress.style.display = "block";
    progress.style.marginTop = "10px";

    const img = document.createElement("img");
    img.style.width = "150px";
    img.style.marginTop = "10px";
    img.style.display = "none"; "carregamento"

    container.appendChild(progress);
    container.appendChild(img);
    preview.appendChild(container);

    const reader = new FileReader();

    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100);
        progress.value = percent;
      }
    };

    reader.onload = () => {
      img.src = reader.result;
      img.style.display = "block";
      progress.style.display = "none";
    };

    reader.readAsDataURL(arquivo);
  }
});
// Manipulação do envio do formulário
document.getElementById("form-agendamento")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const detalhes = document.getElementById("detalhes").value;
    const arquivos = fotoEstofado.files;

    if (arquivos.length === 0) {
      alert("⚠️ Você precisa enviar pelo menos uma foto do estofado antes de continuar!");
      return; 
    }

    let nomesFotos = [];
    for (let i = 0; i < arquivos.length; i++) {
      nomesFotos.push(arquivos[i].name);
    }

    const mensagem = `Olá! Gostaria de agendar um serviço de limpeza de estofados.%0A%0A*Nome:* ${nome}%0A*Endereço:* ${endereco}%0A*Detalhes:* ${detalhes}%0A*Fotos selecionadas:* ${nomesFotos.join(", ")}`;

    const telefone = "31999450717";

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
  });