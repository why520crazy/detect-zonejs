import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';
import { AppComponent } from '../app.component';
import { UserInfo } from '../info';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
    @Input()
    title: string;

    @Input()
    user: UserInfo;

    name: string;

    isShowSecondSubChild = false;

    constructor(
        private parent: AppComponent,
        public messageService: MessageService
    ) {}

    ngOnInit() {
        // this.parent.title = 'Child Title';
        // this.parent.name = 'Lily-child';

        // setTimeout(() => {
        //     this.messageService.setMessage('from child.component timeout');
        // }, 3000);
    }

    changeMessage() {
        this.messageService.setMessage(`from child`);
    }

    doNothings() {}

    showSecondSubChild() {
        // this.title = `showSecondSubChild`;
        this.messageService.setMessage(`change from showSecondSubChild`);
        this.isShowSecondSubChild = true;
    }
}
