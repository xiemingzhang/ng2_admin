import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShouyeComponent }  from './shouye/shouye.component';
import { QiyexinxiweihuComponent }  from './qiyexinxiweihu/qiyexinxiweihu.component';
import { ChanpinxinxiweihuComponent }  from './chanpinxinxiweihu/chanpinxinxiweihu.component';
import { ChanpinxinxixiugaiComponent }  from './chanpinxinxixiugai/chanpinxinxixiugai.component';
import { ChanpinliebiaoComponent }  from './chanpinliebiao/chanpinliebiao.component';
import { ZhuisumashenqinComponent }  from './zhuisumashenqin/zhuisumashenqin.component';
import { ZhuisumadaoruComponent }  from './zhuisumadaoru/zhuisumadaoru.component';
import { YonghuxinxiguanliComponent }  from './yonghuxinxiguanli/yonghuxinxiguanli.component';
import { YonghuxinxiliebiaoComponent }  from './yonghuxinxiliebiao/yonghuxinxiliebiao.component';

import { QuillEditorModule } from 'ng2-quill-editor';
import { FileUploaderModule } from '@uniprank/ng2-file-uploader';
import { DataTableModule } from "angular2-datatable";
import { TreeModule, SharedModule } from 'primeng/primeng';

import { RichtextQYJJComponent }  from './richtextQYJJ/richtextQYJJ.component';
import { FileinputQYZPComponent }  from './fileinputQYZP/fileinputQYZP.component';
import { FileinputQYZZComponent }  from './fileinputQYZZ/fileinputQYZZ.component';
import { DatatableComponent }  from './datatable/datatable.component';
import { TreeComponent }  from './tree/tree.component';
import { RichtextPZJJComponent }  from './richtextPZJJ/richtextPZJJ.component';
import { RichtextTZTXComponent }  from './richtextTZTX/richtextTZTX.component';
import { RichtextZPYDComponent }  from './richtextZPYD/richtextZPYD.component';
import { RichtextCLBXComponent }  from './richtextCLBX/richtextCLBX.component';
import { FileinputPZZPComponent }  from './fileinputPZZP/fileinputPZZP.component';

import { DataFilterPipe }   from './pipe/data-filter.pipe';
import { ChanpinliebiaoService } from './service/chanpinliebiao.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ShouyeComponent,
    QiyexinxiweihuComponent,
    ChanpinxinxiweihuComponent,
    ChanpinxinxixiugaiComponent,
    ChanpinliebiaoComponent,
    ZhuisumashenqinComponent,
    ZhuisumadaoruComponent,
    YonghuxinxiguanliComponent,
    YonghuxinxiliebiaoComponent,
    RichtextQYJJComponent,
    FileinputQYZPComponent,
    FileinputQYZZComponent,
    DatatableComponent,
    TreeComponent,
    RichtextPZJJComponent,
    RichtextTZTXComponent,
    RichtextZPYDComponent,
    RichtextCLBXComponent,
    FileinputPZZPComponent,
    DataFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    QuillEditorModule,
    FileUploaderModule,
    DataTableModule,
    TreeModule, SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService,{passThruUnknownUrl: true}),
  ],
  providers: [ChanpinliebiaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
