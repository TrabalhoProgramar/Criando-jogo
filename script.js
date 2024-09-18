const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button .addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

    var audio = document.getElementById('background-music');
    audio.volume = 1.0; 

