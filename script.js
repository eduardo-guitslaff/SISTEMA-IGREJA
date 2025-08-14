function enviarWhats(event) {
    event.preventDefault(); // corrigido: "preventDefaut" → "preventDefault"
    
    const nome = document.getElementById('nome').value; // adiciona .value para pegar o conteúdo
    const mensagem = document.getElementById('mensagem').value; // idem

    const telefone = '554398018932';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`; // corrigido: "=" estava faltando

    const msgFormatada = encodeURIComponent(texto); // codifica o texto para URL

    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

    window.open(url, '_blank'); // abre em nova aba
}

