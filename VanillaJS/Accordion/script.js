class Accordion {
  constructor(containerSelector, options = {}) {
    this.container = document.querySelector(containerSelector);
    this.items = Array.from(this.container.querySelectorAll(".accordion-item"));
    this.multipleOpen = options.multipleOpen || false;
    this.init();
  }

  init() {
    this.items.forEach((item) => {
      const header = item.querySelector(".accordion-header");
      header.addEventListener("click", () => this.toggleItem(item));
    });

    document
      .getElementById("multiple-open")
      .addEventListener("change", (event) => {
        this.multipleOpen = event.target.checked;
      });
  }

  toggleItem(item) {
    const isOpen = item.classList.contains("open");
    if (!this.multipleOpen && !isOpen) {
      this.closeAllItems();
    }
    item.classList.toggle("open", !isOpen);
  }

  closeAllItems() {
    this.items.forEach((item) => {
      item.classList.remove("open");
    });
  }

  addItem(htmlContent) {
    const newItem = document.createElement("div");
    newItem.className = "accordion-item";
    newItem.innerHTML = htmlContent;
    this.container.appendChild(newItem);
    const header = newItem.querySelector(".accordion-header");
    header.addEventListener("click", () => this.toggleItem(newItem));
    this.items.push(newItem);
  }

  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.container.removeChild(this.items[index]);
      this.items.splice(index, 1);
    }
  }
}

// Usage
const accordion = new Accordion(".accordion", { multipleOpen: false });
