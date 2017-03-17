import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShouyeComponent } from './shouye/shouye.component';
import { QiyexinxiweihuComponent }  from './qiyexinxiweihu/qiyexinxiweihu.component';
import { ChanpinxinxiweihuComponent }  from './chanpinxinxiweihu/chanpinxinxiweihu.component';
import { ChanpinxinxixiugaiComponent }  from './chanpinxinxixiugai/chanpinxinxixiugai.component';
import { ChanpinliebiaoComponent }  from './chanpinliebiao/chanpinliebiao.component';
import { ZhuisumashenqinComponent }  from './zhuisumashenqin/zhuisumashenqin.component';
import { ZhuisumadaoruComponent }  from './zhuisumadaoru/zhuisumadaoru.component';
import { YonghuxinxiguanliComponent }  from './yonghuxinxiguanli/yonghuxinxiguanli.component';
import { YonghuxinxiliebiaoComponent }  from './yonghuxinxiliebiao/yonghuxinxiliebiao.component';

const routes: Routes = [
  { path: '', redirectTo: '/shouye', pathMatch: 'full' },
  { path: 'shouye',  component: ShouyeComponent },
  { path: 'qiyexinxiweihu',  component: QiyexinxiweihuComponent },
  { path: 'chanpinxinxiweihu',  component: ChanpinxinxiweihuComponent },
  { path: 'chanpinxinxixiugai/:id',  component: ChanpinxinxixiugaiComponent },
  { path: 'chanpinliebiao',  component: ChanpinliebiaoComponent },
  { path: 'zhuisumashenqin',  component: ZhuisumashenqinComponent },
  { path: 'zhuisumadaoru',  component: ZhuisumadaoruComponent },
  { path: 'yonghuxinxiguanli',  component: YonghuxinxiguanliComponent },
  { path: 'yonghuxinxiliebiao',  component: YonghuxinxiliebiaoComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}