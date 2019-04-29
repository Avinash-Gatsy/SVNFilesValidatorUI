import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from'@angular/material';

export interface LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-creds-dialog',
  templateUrl: './login-creds-dialog.component.html',
  styleUrls: ['./login-creds-dialog.component.scss']
})
export class LoginCredsDialogComponent {

  constructor(public dialogRef: MatDialogRef<LoginCredsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: LoginData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
