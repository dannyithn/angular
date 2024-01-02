import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bai 1:
function sumArrayNumbers(arr: number[]): number {
  return arr.reduce((acc, current) => acc + current, 0);
}
const array: number[] = [1, 2, 3, 4, 5];
const sum: number = sumArrayNumbers(array);
console.log(`Tổng của mảng là: ${sum}`);

// bai 2:
interface Person {
  name: string;
  age: number;
  email: string;
}
function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Email: ${person.email}`);
}
const person: Person = {
  name: 'Doan Dung',
  age: 30,
  email: 'dungdv@arrowhitech.com'
};
printPersonInfo(person);

//bai 3
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}
const integers: number[] = [1, 2, 3, 4, 5];
const firstInteger: number | undefined = getFirstElement(integers);
console.log(`First Integer: ${firstInteger}`);

//bai 4
enum Color {
  BLUE = 'BLUE',
  RED = 'RED',
  YELLOW = 'YELLOW',
}

function printColorName(color: Color): void {
  switch (color) {
    case Color.BLUE:
      console.log('Color: BLUE');
      break;
    case Color.RED:
      console.log('Color: RED');
      break;
    case Color.YELLOW:
      console.log('Color: YELLOW');
      break;
    default:
      console.log('Unknown Color');
  }
}
const selectedColor: Color = Color.YELLOW;
printColorName(selectedColor);

//bai 5
class Rectangle {
  private length: number;
  private width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  calculateArea(): number {
    return this.length * this.width;
  }

  getLength(): number {
    return this.length;
  }

  getWidth(): number {
    return this.width;
  }
}

const myRectangle = new Rectangle(6, 9);
const area = myRectangle.calculateArea();

console.log(`Length: ${myRectangle.getLength()}`);
console.log(`Width: ${myRectangle.getWidth()}`);
console.log(`Area: ${area}`);


//bai 9
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const productsList: Product[] = [
  { id: 1, name: 'Product1', price: 10, quantity: 1 },
  { id: 2, name: 'Product2', price: 20, quantity: 2 },
  { id: 3, name: 'Product3', price: 30, quantity: 4 },
  { id: 4, name: 'Product4', price: 40, quantity: 5 },
  { id: 5, name: 'Product5', price: 50, quantity: 6 },
];
//Tổng giá trị của tất cả sản phẩm
const totalPrice = productsList.reduce((acc, product) => acc + product.price * product.quantity,0);
console.log('Tổng giá trị của tất cả sản phẩm là:', totalPrice);

//Sản phẩm có giá lớn hơn 100
const highPriceProducts = productsList.filter((product) => product.price > 100);
console.log('Sản phẩm có giá lớn hơn 100:', highPriceProducts);

// Thông tin sản phẩm
const productDescriptions = productsList.map(
  (product) =>`Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`
);
console.log('Mô tả sản phẩm:', productDescriptions);

//Tổng số lượng của sản phẩm có giá dưới 10
const totalQuantityUnder100 = productsList
  .filter((product) => product.price < 100)
  .reduce((acc, product) => acc + product.quantity, 0);
console.log(
  'Tổng số lượng của sản phẩm có giá dưới 100:',
  totalQuantityUnder100
);
// sản phẩm discount
function getDiscountedProducts(
  products: Product[],
  discountRate: number
): Product[] {
  return products.map((product) => ({
    ...product,
    price: product.price * ((100 - discountRate))/100,
  }));
}
const discountedProducts = getDiscountedProducts(productsList, 0.2);
console.log('Danh sách sản phẩm giảm giá:', discountedProducts);


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
