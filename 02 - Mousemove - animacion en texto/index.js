let texto = document.querySelector("h1");
let hero = document.querySelector(".hero");

let maximo = 200;

hero.addEventListener("mousemove", function(e){
    console.log(hero.offsetWidth, hero.offsetHeight);
    
    let{offsetX:x, offsetY:y} = e;
    let{offsetWidth: width, offsetHeight: height} = hero;

    let desplazamientoX = Math.round((x / width * maximo) - (maximo / 2));
    let desplazamientoY = Math.round((y / height * maximo) - (maximo / 2));

    console.log(desplazamientoX, desplazamientoY);

    texto.style.textShadow = 
    `${desplazamientoX }px ${desplazamientoY }px 5px rgba(255,0,255,0.7)
    , ${desplazamientoX * -1}px ${desplazamientoY * -1}px 5px rgba(0,255,255,0.7)
    , ${desplazamientoY }px ${desplazamientoX * -1}px 5px rgba(0,255,0,0.7)
    , ${desplazamientoY * -1}px ${desplazamientoX }px 5px rgba(0,0,255,0.7)
    `;
    
});

/*getBoundlingClientRect() ayuda a sacar coordenadas */