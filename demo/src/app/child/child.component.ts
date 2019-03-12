import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
    @Input()
    title: string;

    constructor(private parent: AppComponent) {}

    ngOnInit() {
        // this.parent.title = 'Child Title';
        // this.parent.name = 'Lily-child';
    }
}
