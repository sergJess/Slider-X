class SliderX{
	countSlides = 0;
	position = 0;
	currentSlide = 0;
	indexShift = 0;
	isAbleToSlide = true;
	sliderInner = document.createElement('div');
	sliderTrack = document.createElement('div');
	controlsInner = document.createElement('div');
	buttonLeft = document.createElement('button');
	buttonRight = document.createElement('button');
constructor(parent){
		this.parent = parent;
		this.sliderInner.append(this.sliderTrack);
		this.sliderInner.classList.add('x-slider-inner');
		this.sliderTrack.classList.add('x-slider-track');
		this.sliderTrack.ontransitionend = () => {
				this.sliderTrack.classList.remove('shifting');
				this.checkSlide();
				this.isAbleToSlide = true;
						}
		this.sliderTrack.ondragstart = () => {
				console.log('Jess');
		}
		this.controlsInner.classList.add('x-controls');
		this.buttonLeft.classList.add('x-slider-button');
		this.buttonRight.classList.add('x-slider-button');
		this.controlsInner.append(this.buttonLeft, this.buttonRight);
		this.buttonLeft.onclick = () => {
				if(this.isAbleToSlide){
						this.moveSlider(-1);
				}
				this.isAbleToSlide = false;
		}
		this.buttonRight.onclick = () => {
				if(this.isAbleToSlide){
						this.moveSlider(1);
				}
				this.isAbleToSlide = false;
		}
}
addSlide(text){
	const slide = document.createElement('div');
	slide.textContent = text;
	slide.classList.add('x-slide');
	this.sliderTrack.append(slide);
	this.countSlides++;
}
cloneSlides(){
	const nodes = this.sliderTrack.childNodes;
	const length = nodes.length;
	if(length >= 2){
			const firstSlide = nodes[0].cloneNode(true);
			const lastSlide = nodes[length - 1].cloneNode(true);
			this.sliderTrack.append(firstSlide);
			this.sliderTrack.insertBefore(lastSlide, nodes[0]);
	}
	}
	setToFirstSlide(){
			const shift = this.sliderInner.firstChild.getBoundingClientRect().width * -1;
			this.position = shift;
			this.sliderTrack.style.transform = `translate(${this.position}px)`;
			this.indexShift = shift;
			this.currentSlide = 0;
	}
	setToLastSlide(){
			const shift = this.sliderInner.firstChild.getBoundingClientRect().width * -1;
			this.position = shift * this.countSlides;
			this.sliderTrack.style.transform = `translate(${this.position}px)`;
			this.currentSlide = (this.countSlides-1) * (-1);
	}

}

const slider = new SliderX(document.body);
slider.render();
slider.addSlide('Jess-1');
slider.addSlide('FF7-2');
slider.addSlide('MIW-3');
slider.addSlide('Audi-4');
slider.cloneSlides();
slider.setToFirstSlide();