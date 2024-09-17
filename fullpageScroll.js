class FullPageScroll {
  constructor(sections) {
    this.sections = sections;
    this.currentSection = 0;
    this.scrollTimeout = null;
    this.init();
  }

  init() {
    window.addEventListener('wheel', this.handleScroll.bind(this));
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleScroll(event) {
    if (this.scrollTimeout) return;

    const direction = event.deltaY > 0 ? 1 : -1;

    if (direction === 1 && this.currentSection < this.sections.length - 1) {
      this.currentSection++;
    } else if (direction === -1 && this.currentSection > 0) {
      this.currentSection--;
    }

    this.scrollToSection();
    this.setScrollTimeout();
  }

  handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
      if (this.currentSection < this.sections.length - 1) {
        this.currentSection++;
      }
    } else if (event.key === 'ArrowUp') {
      if (this.currentSection > 0) {
        this.currentSection--;
      }
    }

    this.scrollToSection();
  }

  scrollToSection() {
    window?.scrollTo({
      top: this.sections[this.currentSection].offsetTop,
      behavior: 'smooth',
    });
  }

  setScrollTimeout() {
    this.scrollTimeout = setTimeout(() => {
      this.scrollTimeout = null;
    }, 100);
  }
}

export default FullPageScroll;
