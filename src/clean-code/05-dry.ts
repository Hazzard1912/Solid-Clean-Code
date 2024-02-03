type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof key) {
        case "string":
          if ((<string>this[key]).length === 0) throw Error(`${key} is empty`);
        case "number":
          if (<number>this[key] === 0) throw Error(`${key} is empty`);
        default:
          throw Error(`${typeof this[key]} is not valid or supported`);
      }
    }
    return true;
  }

  toString() {
    //  No Dry
    // if (this.name.length <= 0) throw Error("Name is empty");
    // if (this.price <= 0) throw Error("price is zero");
    // if (this.size.length <= 0) throw Error("Size is empty");
    
    if (!this.isProductReady) return;
    return `${this.name} ${this.price}, ${this.size}`;
  }
}
(() => {
  const bluePants = new Product("Blue Large Pants");
  console.log(bluePants.toString);
})();
