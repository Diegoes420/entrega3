let products = [];

class ProductManager {
  static codeCounter = 0;

  constructor() {
    this.products = [];
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    ProductManager.codeCounter++;
    const product = {
      id: ProductManager.codeCounter,
      code,
      title,
      description,
      price,
      thumbnail,
      stock,
    };
    if(product.id && title && description && price && thumbnail && code && stock ) {
        this.products.push(product);
    }
  };

  getProducts = () => {
    return this.products;
  };

  getProductsById = (ID) => {
    const prodFounded = this.products.find((prod) => prod.id === ID);
    if (!idFounded) {
      console.error(`No se encontró el producto con el id ${ID}`);
      return;
    }
    return prodFounded;
  };
}

const productManager = new ProductManager();
productManager.getProducts();
productManager.addProduct(
  "jamon",
  "lorem ipsum",
  45,
  "https://upload.wikimedia.org/wikipedia/commons/f/ff/NCI_clove_ham.jpg",
  20,
  65
);

// module.exports = ProductManager;