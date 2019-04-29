import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {result} from "./mock-data";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public httpReqStatus = new Subject<boolean>();
  public svnResultData = new Subject<any>();
  constructor(private http: HttpClient) { }

  startBackendReq(svnPath, username, password){
    this.httpReqStatus.next(true);
    this.fetchResults();
  }
  fetchResults(){
    //http post req to get results
    const reqBody = {
      "path":'',
      "userid":'',
      "password":''
    };
    setTimeout(()=>{
      this.svnResultData.next(result);
    }, 1000)
  }
}
