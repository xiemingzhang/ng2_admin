import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Chanpin } from '../service/chanpinliebiao';
import { ChanpinliebiaoService } from '../service/chanpinliebiao.service';

@Component({
  moduleId: module.id,
  selector: 'chanpinxinxiweihu',
  templateUrl: 'chanpinxinxiweihu.component.html',
  styleUrls: [ 'chanpinxinxiweihu.component.css' ]
})
export class ChanpinxinxiweihuComponent implements OnInit{

	public item;
  public data:Chanpin[];

	 constructor(
      private chanpinliebiaoService: ChanpinliebiaoService,
      public activeRoute: ActivatedRoute,
      private route: ActivatedRoute,
      private location: Location
    ) { }

     ngOnInit(): void {

     this.item = {"type":"","name":"","clz":"","org":"","licnum":"","startyear":"","endyear":"","quailty":"","netwt":"","appronum":"","approyear":"" } 
     console.log(this.item)

    this.chanpinliebiaoService.getChanpinliebiao().then((data) =>{this.data=data;} );
    
    }

    add(chanpin: string): void {
    if (!chanpin) { return; }
    this.chanpinliebiaoService.addChanpin(chanpin)
      .then(chanpin => {
        this.data.push(chanpin);
        this.goBack();
      });
    }

    goBack(): void {
        this.location.back();
      }
   }
