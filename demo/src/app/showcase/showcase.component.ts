import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { UserInfo } from '../info';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcaseComponent implements OnInit {
    title: string;

    user: UserInfo;

    showInfo = true;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.title = 'Show Case';
        this.user = {
            name: 'peter',
            displayName: 'peter wang',
            age: 20
        };

        setTimeout(() => {
            this.changeTitle('New Title from setTimeout');
            this.changeName('New Name from setTimeout');
            // this.changeDetectorRef.markForCheck();
        }, 1000);
    }

    changeTitle(newTitle: string) {
        this.title = newTitle;
    }

    changeName(newName: string) {
        this.user.name = newName;
    }

    changeUserRef(newName: string) {
        this.user = {
            ...this.user,
            name: newName
        };
    }

    doNothings() {}
}
