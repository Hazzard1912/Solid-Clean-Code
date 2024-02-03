(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class InputElemet {
    htmlElement: HtmlElement;
    inputAttributes: InputAttributes;
    inputEvents: InputEvents;

    constructor(value: string, placeholder: string, id: string) {
      this.htmlElement = new HtmlElement(id, "input");
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.inputEvents = new InputEvents();
    }
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElemet("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();
