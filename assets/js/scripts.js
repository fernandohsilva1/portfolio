class NavBar {
    constructor(btnMenu, navList, navLinks) {
        this.btnMenu = document.querySelector(btnMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.navClick = this.navClick.bind(this);
    }

    transitionLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation ?
                (link.style.animation = "")
                : (link.style.animation = `navLinksOpacity 0.4s ease forwards 0.3s`);
        });
    }

    navClick() {
        this.navList.classList.toggle(this.activeClass);
        this.transitionLinks();
    }

    addClickEvent() {
        this.btnMenu.addEventListener('click', this.navClick);
    }

    init() {
        if (this.btnMenu) {
            this.addClickEvent();
        }

        return this;
    }
}

const navBar = new NavBar(
    ".responsive-menu",
    ".main-list",
    ".main-list li",
);

navBar.init();