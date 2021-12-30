// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// interface Foo {
//   foo: string;
//   name: string;
// }

// interface Bar {
//   bar: string;
//   name: string;
// }

// const sayHello = (obj: Partial<Foo | Bar>) => {
//   console.log('sayHello', obj.name, obj?.foo, obj?.bar);
// };

// const sayHello2 = (obj: Foo & Bar) => {
//   console.log('sayHello2', obj.name, obj.foo, obj.bar);
// };

// sayHello({ foo: 'foo', name: 'lolo', bar: 'bar' });
// sayHello({ bar: 'bar', name: 'growth' });

// sayHello2({
//   foo: 'foo2',
//   bar: 'bar2',
//   name: 'name2',
// });

type A = {
  name: string;
  age: number;
};

type B = {
  school: string;
  money: number;
};

type C = {
  name: string;
  dogName: string;
};

type D = Pick<A, Exclude<keyof A, 'name'>>;

const obj1: D = {
  age: 12,
};
