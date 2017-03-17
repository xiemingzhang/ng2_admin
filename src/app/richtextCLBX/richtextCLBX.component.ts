import { Component } from '@angular/core';

@Component({
  selector: 'richtextCLBX',
  template: require('./richtextCLBX.component.html')
})
export class RichtextCLBXComponent{
  public editorContent = ``;
  public editorConfig = {
    placeholder: "输入产量表现"
  };
  constructor() {}
  onEditorCreated(quill) {
    /*console.log('this is quill object', quill);*/
  }
  onContentChanged( {editor, html, text} ) {
    /*console.log(editor, html, text);*/
  }
}
