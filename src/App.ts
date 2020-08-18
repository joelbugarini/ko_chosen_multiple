import * as ko from "knockout";
import './bindingHandlers.ts';
import './App.css';

class App {
  Hello: KnockoutObservable<string>;
  constructor() {
    this.Hello = ko.observable("Hello, World!");
  }
}

export default App;
