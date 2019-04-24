import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { UserInfo } from '../info';
import { of, Subject } from 'rxjs';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class ShowcaseComponent implements OnInit {
    title: string;

    user: UserInfo;

    showInfo = false;

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
        this.showInfo = true;
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

    toggleShowInfo() {
        this.showInfo = !this.showInfo;
    }
}
