document.getElementById('screenshotBtn').addEventListener('click', function (){
    // per nascondere il bottone dello screenshot dalla foto catturata
    this.classList.add('hidden');

    // per prendere lo screenshot
    html2canvas(document.documentElement, {
        scale: window.devicePixelRatio, // catturare  i pixel del device
        logging: true, // far partite il log per il debug
        useCORS: true,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    }).then(canvas =>{
        //creare un'immagine
        var image = canvas.toDataURL("image/png").replace("image/png").replace("image/png", "image/octet-Stream");

        //crea un link per installare l'immagine
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = image;
        link.click();

        //mostra il bottone di nuovo
        this.classList.remove('hidden')
    });
});