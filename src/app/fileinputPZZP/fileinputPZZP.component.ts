
import {Component,ElementRef} from '@angular/core';
import { hookType, UploaderHook, FileManager, FileFilter, FileUploader, Protocol, ProtocolXHR, Transfer, Utils } from '@uniprank/ng2-file-uploader';

 const URL = '//'+window.location.hostname+':3003/upload';

@Component({
  selector: 'fileinputPZZP',
  templateUrl: 'fileinputPZZP.component.html',
  styleUrls: [ 'fileinputPZZP.component.css' ]
})

export class FileinputPZZPComponent {
    public uploader: Transfer;
    public hasFiles: boolean;
    public ddd: any;
    public sss: any;
    public src:string = 'http://img05.tooopen.com/images/20150201/sl_109938035874.jpg';
    public onFileHoverStart(e:any):void {
       console.log(e)
    }
    public onFileHoverEnd(e:any):void {
       console.log(e)
    }
    public onFileAccepted(e:any):void {
       console.log(e)

    }
    public onFileRejected(e:any):void {
       console.log(e)
    }
    constructor (public el: ElementRef) {

        // Bind FileUploader class to variable
        this.uploader = new FileUploader({
            // API url to call
            url: URL,
            removeBySuccess: false,
            autoUpload: false,
            // filter implementation possible
            filters: [
                new FileFilter('only:JPG', new RegExp('image/jpeg'), 'type')
            ]
        });
        

        // Hook implementation if needed
        this.uploader.hook(new UploaderHook(
            // define hook type
            hookType.successUploadFile,
            // callback function
            function(response: any, status: any, headers: any){
                console.log(response, status, headers);
            },
            // priority number 0 is low. number > 0 is higher
            0
        ));

        // Subscribe to queue (async) to get the current queue length
        this.uploader.queue$.subscribe((data: any) => {
            this.hasFiles = (data.length > 0);
           /* console.log(this.hasFiles)*/
           /* console.log(this.uploader)*/
        });

        this.ddd = function(this){
            /*console.log(this.uploader.removeAll)*/ 
            console.log(this.uploader._queue$.value)
        };

        this.sss = function(){
            el.nativeElement.querySelector('#myForm').reset(); 
            el.nativeElement.querySelector('#multiple').click(); 
        };

}
}