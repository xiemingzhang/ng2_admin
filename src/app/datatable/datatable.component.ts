import { Component, Input,OnInit,ElementRef,Inject } from '@angular/core';
/*import { DOCUMENT } from '@angular/platform-browser';*/

/*import { Http } from "@angular/http";*/

import { Chanpin } from '../service/chanpinliebiao';
import { ChanpinliebiaoService } from '../service/chanpinliebiao.service';

@Component({
  selector: 'datatable',
  templateUrl: 'datatable.component.html',
  styleUrls: [ 'datatable.component.css' ],
  providers: [ ChanpinliebiaoService ]
 
})

export class DatatableComponent implements OnInit {
    public data:Chanpin[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "approyear";
    public sortOrder = "asc";

   constructor(/*private http: Http,*/
     private chanpinliebiaoService: ChanpinliebiaoService,
     /*@Inject(DOCUMENT) private document */
     ) {}

   
     delete($event):void{
       console.log($event)
        this.chanpinliebiaoService.deleteChanpin($event)
        this.chanpinliebiaoService.getChanpinliebiao().then((data) =>{this.data=data;} );
       /*this.document.querySelector("#chanpinxinxiweihu").click();*/
     }


    ngOnInit(): void {
     /*this.http.get("app/mock/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });*/  
    this.chanpinliebiaoService.getChanpinliebiao().then((data) =>{this.data=data;console.log(data)} );
    /*this.chanpinliebiaoService.getChanpinliebiaoSlowly().then((data) =>this.data=data );*/
    }

 /*    public toInt(num: string) {
        return +num;
    }*/

    public sortByNameLength = (a: any) => {
        return a.name.length;
    }

    output($event){
    /*console.log($event+"哈哈");*/
     this.rowsOnPage = $event;
     /*window.open('https://www.baidu.com/')*/
    } 


    
}