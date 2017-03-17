import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Chanpin } from '../service/chanpinliebiao';
import { ChanpinliebiaoService } from '../service/chanpinliebiao.service';

@Component({
  moduleId: module.id,
  selector: 'chanpinxinxixiugai',
  templateUrl: 'chanpinxinxixiugai.component.html',
  styleUrls: [ 'chanpinxinxixiugai.component.css' ]
})
export class ChanpinxinxixiugaiComponent implements OnInit{

    public item:Chanpin;

   constructor(
      private chanpinliebiaoService: ChanpinliebiaoService,
      public activeRoute: ActivatedRoute,
      private route: ActivatedRoute,
      private location: Location
    ) { }

     ngOnInit(): void {

     this.item = {"id":1,"type":"e0","name":"e","clz":"e","org":"e","licnum":"000","startyear":"2000","endyear":"2000","quailty":"e","netwt":"e","appronum":"111","approyear":"1555" }

      this.route.params
    .switchMap((params: Params) => this.chanpinliebiaoService.getChanpin(+params['id']))
    .subscribe(Chanpinliebiao => {
      this.item = Chanpinliebiao
    });  

   }

     save():void{
       console.log(this.item)
       this.chanpinliebiaoService.updateChanpin(this.item).then(() => this.goBack());
     }

     delate():void{
       console.log(this.item)
       this.chanpinliebiaoService.deleteChanpin(this.item.id).then(() => this.goBack());
     }

     goBack(): void {
        this.location.back();
      }

 }
