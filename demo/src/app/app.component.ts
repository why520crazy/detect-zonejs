import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { UserInfo } from './info';
import { MessageService } from './message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    title = 'App Title';
    @HostBinding(`attr.name`)
    name = 'Peter';

    user: UserInfo = {
        name: 'why520crazy',
        displayName: 'why520crazy'
    };

    constructor(public messageService: MessageService) {}

    changeAppChildrenInput() {
        // this.title = this.title + ' ' + new Date().getTime();
        this.user.name = 'new name';
    }

    changeMessage() {
        this.messageService.setMessage('from app.component');
        // setTimeout(() => {
        //     this.messageService.setMessage('from app.component timeout');
        // });
    }
}
