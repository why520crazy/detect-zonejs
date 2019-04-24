import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChildComponent } from '../child.component';
import { MessageService } from 'src/app/message.service';

@Component({
    selector: 'app-sub-child',
    templateUrl: './sub-child.component.html',
    styleUrls: ['./sub-child.component.scss']
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubChildComponent implements OnInit {
    @Input()
    title: string;

    constructor(
        private childComponent: ChildComponent,
        public messageService: MessageService
    ) {}

    ngOnInit() {}

    changeParentValue() {
        this.childComponent.title = 'from-sub-child';
    }

    changeMessage() {
        this.messageService.setMessage(`from sub-child`);
    }

    doNothings() {}
}
