const noButton = document.querySelector(".no");
const yesButton = document.querySelector(".yes");
const containerBox = document.querySelector(".container");


noButton.addEventListener("click", function(){
    this.style.position = "absolute";
    const containerRect = containerBox.getBoundingClientRect();
    const buttonReact = this.getBoundingClientRect();

    const maxX = containerRect.width - buttonReact.width;
    const maxY = containerRect.height - buttonReact.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});

yesButton.addEventListener("click", function() {
    containerBox.innerHTML = `
    <h2 class="line-one">Bên em, bình minh của anh luôn rực rỡ, hoàng hôn luôn dịu dàng.</h2>
    <h2 class="line-two">Khánh Linh ơi, Trọng Đức yêu em ♥</h2>
    <img class="love-sky" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGk1ZHQ2Y3h1bTU3b28wN3IzNDV2eHVxNWtvc2dmZG9qeTd1eXlobCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nCrUTDvTMTqrt2BTIK/giphy.gif">
    <footer>From Trọng Đức with ♡</footer>`;
});

