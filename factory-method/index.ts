abstract class ProductCreator {
    public abstract factoryMethod(): Product;

   public operation(): string {
      
       const product = this.factoryMethod();
      
       return `Creator: The same creator's code has just worked with ${product.operation()}`;
   }
}

class BrickCreator1 extends ProductCreator {
    public factoryMethod(): Product {
        return new BrickProduct1();
    }
}

class BrickCreator2 extends ProductCreator {
    public factoryMethod(): Product {
        return new BrickProduct2();
    }
}

interface Product {
    operation(): string;
}


class BrickProduct1 implements Product {
    public operation(): string {
        return 'Result of the BrickProduct1';
    }
}

class BrickProduct2 implements Product {
    public operation(): string {
        return 'Result of the BrickProduct2';
    }
}

function client(creator: ProductCreator){
    console.log(creator.operation());
}


client(new BrickCreator1());
client(new BrickCreator2());
