const h3 = document.querySelector('h3#mensagem');
const banners = ['Os melhores do Brasil!', 'Qualidade e preço baixo!'];
let  contador = 0;

function trocarBanner() {
	contador = (contador + 1) % 2;

	h3.textContent = banners[contador];
};

setInterval(trocarBanner, 1000);
