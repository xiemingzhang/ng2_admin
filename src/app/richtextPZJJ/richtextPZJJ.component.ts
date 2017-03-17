import { Component } from '@angular/core';

@Component({
  selector: 'richtextPZJJ',
  template: require('./richtextPZJJ.component.html')
})
export class RichtextPZJJComponent{
  public editorContent = ``;
  public editorConfig = {
    placeholder: "输入品种简介"
  };
  constructor() {}
  onEditorCreated(quill) {
    /*console.log('this is quill object', quill);*/
  }
  onContentChanged( {editor, html, text} ) {
    /*console.log(editor, html, text);*/
  }
}
