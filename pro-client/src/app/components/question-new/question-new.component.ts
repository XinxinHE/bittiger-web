import { Component, OnInit, Inject} from '@angular/core';
import { Folder } from '../../data-structure/folder'

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };

  folders: Folder[];

  constructor(@Inject('data') private dataService) { }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

  ngOnInit() {

    this.getFolders();
    
    setTimeout(() => {
      this.editorContent = '<h1>Input your content!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800);

  }

  getFolders(): void {
    this.dataService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

}