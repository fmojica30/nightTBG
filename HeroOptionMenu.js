class HeroOptionMenu {
  constructor({ hero, onComplete }) {
    this.hero = hero;
    this.onComplete = onComplete;
    this.element = null;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("heroMenu");
    this.element.innerHTML = `
    <p class="TextMessage_p">${this.text}</p>
    <button class ="TextMessage_button">Next</button> 
    `;
    this.element.querySelector("button").addEventListener("click", () => {
      console.log("button");
    });
  }

  init(container) {
    this.createElement();
    container.appendChild(this.element);
  }
}
