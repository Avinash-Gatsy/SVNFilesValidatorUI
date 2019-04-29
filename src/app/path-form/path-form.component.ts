import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {LoginCredsDialogComponent} from "../login-creds-dialog/login-creds-dialog.component";
import {CommonService} from "../common.service";

@Component({
  selector: 'app-path-form',
  templateUrl: './path-form.component.html',
  styleUrls: ['./path-form.component.scss']
})
export class PathFormComponent implements OnInit {
  svnPathForm = this.fb.group({
    path: ['', Validators.required]
  });
  username: string;
  password: string;
  durationInSeconds = 4;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private snackBar: MatSnackBar, private commonService: CommonService) { }

  ngOnInit() {
  }
  openLogin(): void {
    const dialogRef = this.dialog.open(LoginCredsDialogComponent, {
      width: '400px',
      data: {username: this.username, password: this.password}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.username === undefined || result.password === undefined){
        this.enterNonEmptyCreds();
      } else{
        this.username = result.username;
        this.password = result.password;
        this.commonService.startBackendReq(this.svnPathForm.value, result.username, result.password);
      }
    })
  }
  enterNonEmptyCreds(){
    this.snackBar.openFromComponent(EnterNonEmptyCredsComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  onSubmit(){
    this.openLogin();
  }

}
@Component({
  selector: 'snack-bar-enter-valid-creds',
  templateUrl: 'snack-bar-enter-valid-creds.html'
})

export class EnterNonEmptyCredsComponent{}
