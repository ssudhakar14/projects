import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule} from '@ngx-translate/core';

import { SignUpPage } from './sign-up.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        TranslateModule,
        RouterModule.forChild([{ path: '', component: SignUpPage }])
    ],
    declarations: [SignUpPage]
})
export class SignUpPageModule {}
