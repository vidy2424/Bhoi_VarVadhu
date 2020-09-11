import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//   Search(): void {
//     const data = this.formIo.submission.data;
//     this.submissionData['data'] = data;
//     this.submissionData['files'] = this.selectedFile;
//     if (data && data['id']) {
//       this.clientProductsServiceService.editClientProducts(this.submissionData['data'],this.submissionDx`x`ata['files'], this.submissionData['data']['id'])
//         .subscribe(result => {
//           console.log(result);
//         }, err => {
//           alert(err);
//         });
//     }else{
//     this.clientProductsServiceService.upload(this.submissionData)
//        .subscribe(event => {

//       },
//         err => {
//           this.progress = 0;
//           this.message = 'Could not upload the file!';
//           this.currentFile = undefined;
//         });
//   }
// }


}
