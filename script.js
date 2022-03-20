//AQUI É O SCRIPT DAS IMAGENS PRINCIPAIS

class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="slide"]`);
        console.log(this.slide);
        this.init()
    }

    activeSlide(index) {
        this.active = index;        
        this.items.forEach(item => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.ballItems.forEach(item => item.classList.remove('active'));
        this.ballItems[index].classList.add('active');
        this.autoSlide()
    }

    prev() {
        if(this.active > 0) {
        this.activeSlide(this.active -1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
    }

    next(){
        if(this.active < this.items.length - 1) {
        this.activeSlide(this.active +1);
        }
        else {
            this.activeSlide(0)            
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        const prevBtn = this.slide.querySelector('.slide-prev');
        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev);
    }

    addBallItems() {
        this.items.forEach(() => this.balls.innerHTML += `<span></span>`);
        this.ballItems = Array.from(this.balls.children);
    }

    autoSlide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 4000);
    }

    init() {
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.addNavigation();
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.balls = this.slide.querySelector('.slide-balls');
        this.addBallItems();
        this.activeSlide(0);
    }
}

new SlideStories('slide');

