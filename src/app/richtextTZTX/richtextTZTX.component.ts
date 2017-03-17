import { Component } from '@angular/core';

@Component({
  selector: 'richtextTZTX',
  template: require('./richtextTZTX.component.html')
})
export class RichtextTZTXComponent{
  public editorContent = ``;
  public editorConfig = {
    placeholder: "输入特征特性"
  };
  constructor() {}
  onEditorCreated(quill) {
    /*console.log('this is quill object', quill);*/
  }
  onContentChanged( {editor, html, text} ) {
    /*console.log(editor, html, text);*/
  }
}
