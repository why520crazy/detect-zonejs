import { NgMini, Component } from "./ng-mini";

@Component({
  selector: "app-root",
  template: `
    <div (click)="onClick($event)" alt="alt" [name]="hello">
      {{ hello }}
      <app-child [name]="hello"></app-child>
    </div>
  `
})
class AppRootComponent {
  hello = "hello";
  onClick($event) {
    this.hello = "world";
  }
}

@Component({
  selector: "app-child",
  template: `
    <div>{{ hello }}</div>
  `
})
class AppChildComponent {}

NgMini.component(AppChildComponent);
NgMini.bootstrap(AppRootComponent);
