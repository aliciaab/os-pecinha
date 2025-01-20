function translateText() {
    const inputText = document.getElementById("input-text").value;
    const outputTextElement = document.getElementById("output-text");
  
    // Configuração para a chamada da API de tradução de Libras
    fetch(`https://api.exemplo.com/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer SEU_TOKEN_DE_API'
      },
      body: JSON.stringify({ text: inputText })
    })
    .then(response => response.json())
    .then(data => {
      // Exibir o texto traduzido em Português
      outputTextElement.textContent = data.translatedText;
  
      // Carregar o bonequinho 3D com a tradução em Libras
      loadAvatarAnimation(data.signUrl); // Supondo que a API retorne uma URL para a animação em Libras
    })
    .catch(error => {
      console.error("Erro ao traduzir:", error);
      outputTextElement.textContent = "Erro ao realizar a tradução.";
    });
  }
  
  function loadAvatarAnimation(signUrl) {
    const avatarContainer = document.getElementById("avatar");
  
    // Remove animações anteriores, se houver
    avatarContainer.innerHTML = '';
  
    // Inserindo o bonequinho 3D com a animação em Libras
    const animation = document.createElement("iframe");
    animation.src = signUrl;  // Carregando a animação 3D da API
    animation.width = "100%";
    animation.height = "100%";
    animation.style.border = "none";
  
    avatarContainer.appendChild(animation);
  }
    