import { Component } from '@angular/core';

@Component({
  selector: 'richtextZPYD',
  template: require('./richtextZPYD.component.html')
})
export class RichtextZPYDComponent{
  public editorContent = ``;
  public editorConfig = {
    placeholder: "输入栽培要点"
  };
  constructor() {}
  onEditorCreated(quill) {
    /*console.log('this is quill object', quill);*/
  }
  onContentChanged( {editor, html, text} ) {
    /*console.log(editor, html, text);*/
  }
}
