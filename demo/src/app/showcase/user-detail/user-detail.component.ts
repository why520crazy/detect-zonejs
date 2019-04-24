import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';
import { UserInfo } from 'src/app/info';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit {
    @Input() user: UserInfo;

    @Input() title: string;

    constructor() {}

    ngOnInit() {}
}
