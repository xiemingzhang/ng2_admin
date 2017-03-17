import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'richtextQYJJ',
  template: require('./richtextQYJJ.component.html')
})
export class RichtextQYJJComponent implements OnInit{
  public timer;
  public editorContent = ``;
  public editorConfig = {
    placeholder: "输入企业简介"
    /*placeholder: "输入企业简介，支持html"*/
  };
  public str:string;
  constructor() {}

  ngOnInit(): void {
    let that = this;
    this.timer = setTimeout(function(){that.editorContent = 'hahaha';console.log(that.editorContent)},2000)
  }
  onEditorCreated(quill) {
    /*console.log('this is quill object', quill);*/
  }
  onContentChanged( {editor, html, text} ) {
    /*console.log(editor, html, text);*/
  }

   test():void{

     console.log(this.editorContent)
  }
}
