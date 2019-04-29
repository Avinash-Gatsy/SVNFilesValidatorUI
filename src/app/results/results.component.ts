import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service";

export interface ResultObj {
  path: string;
  message: string;
  lastAuthor: string;
  lastDate: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  isHttpReqStarted: boolean = false;
  successResultFromBackend: ResultObj;
  errorResultFromBackend: ResultObj;
  showSpinner: boolean = false;
  items = ['Enter correct SVN path in input field','Click on submit button','Enter correct SVN credentials', 'Be patient while we retrieve the results'];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.httpReqStatus.subscribe((result)=>{
      this.isHttpReqStarted = result;
      this.showSpinner = true;
    });
    this.commonService.svnResultData.subscribe((result)=>{
      this.showSpinner = false;
      if(result.status === "SUCCESS"){
        this.successResultFromBackend = result.scanResultSuccess;
        this.errorResultFromBackend = result.scanResultError;
      }
    })
  }

}
