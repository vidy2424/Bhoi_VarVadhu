import { ClientProductsServiceService } from './../sevices/client-products-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientProductsService {
  data = {};
  constructor(
  private clientProductsServiceService: ClientProductsServiceService,
  
) {}
getForm(config?: any): any {
  return {
    components: [
      {
          label: 'Our Product',
          tableView: true,
          key: 'client_product',
          type: 'textfield',
          input: true
      },
      {
          label: 'Text Area',
          autoExpand: false,
          tableView: true,
          key: 'client_product_info',
          type: 'textarea',
          input: true
      },
      {
          type: 'button',
          label: 'Submit',
          key: 'submit',
          disableOnInvalid: true,
          input: true,
          tableView: false
      }
  ]    }
}

validateForm(submission: any, callback: any): void {
  // tslint:disable-next-line:no-null-keyword
  callback(null, submission);
}

// submitForm(submission: any): void {
//   console.log(submission);
//   if (this.data && this.data['id']) {
//     this.clientProductsServiceService.editClientProducts(submission, this.data['id'])
//     .subscribe(result => {
//         console.log(result);
//     }, err => {
//         alert(err);
//     });
//   } else {
//     this.clientProductsServiceService.ClientProducts(submission)
//     .subscribe(result => {
//         console.log(result);
//     }, err => {
//         alert(err);
//     });
//   }
// }

cleanup(): void {
  throw new Error('Method not implemented.');
}

}
