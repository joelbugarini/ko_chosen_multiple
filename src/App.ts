import * as ko from "knockout";
import './bindingHandlers.ts';
import './App.css';

class App {
  Hello: KnockoutObservable<string>;
  Fruits: KnockoutObservable<Array<any>>;
  FruitsSelected: KnockoutObservable<Array<any>>;
  constructor() {
    this.Hello = ko.observable("Hello, World!");
    this.FruitsSelected = ko.observable([]);  
    this.Fruits = ko.observable([]);

    getFruits(()=>{
      this.Fruits([
        { name: "Apple", value: 1 },
        { name: "Watermellon", value: 2 },
        { name: "Orange", value: 3 },
        { name: "Cherry", value: 4 }
      ]);
    });
    
    getFruitsSelected(() => {
      this.FruitsSelected([
        { name: "Apple", value: 1 }
      ]);
    });

  }

  FruitAdded(){

  }

  FruitDeleted(){

  }
}

let getFruits = (callback: any) => {
  setTimeout(() => {
    callback();
  }, 4215);
}

let getFruitsSelected = (callback: any) => {
  setTimeout(() => {
    callback();
  }, 2543);
}

export default App;
