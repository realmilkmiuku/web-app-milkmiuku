 //source https://codepen.io/dcode-software/pen/rNYGdeg
 window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        //loader.classList.add("fade-away");
        document.body.removeChild(loader);
    });
});