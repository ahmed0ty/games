export class GameMenu {
    constructor() {
        this.lis = document.querySelectorAll('li');
        this.addEventListeners();
    }

    addEventListeners(handleClick) {
        this.lis.forEach((li, index) => {
            li.addEventListener('click', (e) => {
                const game = li.getAttribute('data-game');
                handleClick(game);
            });
        });
    }
}
export class Navbar {
    constructor() {
        this.links = document.querySelectorAll('.nav-link');
        this.addEventListeners();
    }

    addEventListeners() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                this.toggleActive(link);
            });
        });
    }

    toggleActive(clickedLink) {
        this.links.forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navbar = new Navbar();
});

