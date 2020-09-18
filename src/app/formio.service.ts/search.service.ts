// import { LoginService } from '../sevices/login.service';
// import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
// export class SeachService {

//     data = {};
//     constructor(
//         private loginService: LoginService
//     ) { }

//     getForm(config?: any): any {
//         return {
//             "components": [
//                 {
//                     "label": "Columns",
//                     "columns": [
//                         {
//                             "components": [],
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md",
//                             "width": 1
//                         },
//                         {
//                             "components": [
//                                 {
//                                     "label": "Looking for",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "Groom",
//                                                 "value": "groom"
//                                             },
//                                             {
//                                                 "label": "Bride",
//                                                 "value": "bride"
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "key": "lookingFor",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md",
//                             "width": 2
//                         },
//                         {
//                             "components": [
//                                 {
//                                     "label": "Age",
//                                     "widget": "choicesjs",
//                                     "placeholder": "From",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "key": "age",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "size": "md",
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "width": 2
//                         },
//                         {
//                             "components": [
//                                 {
//                                     "label": "Age",
//                                     "widget": "choicesjs",
//                                     "placeholder": "To",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "key": "age1",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "size": "md",
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "width": 2
//                         },
//                         {
//                             "components": [
//                                 {
//                                     "label": "City",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "key": "city",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "size": "md",
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "width": 2
//                         },
//                         {
//                             "components": [
//                                 {
//                                     "label": "Education",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "key": "education",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "size": "md",
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "width": 2
//                         },
//                         {
//                             "components": [],
//                             "size": "md",
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "width": 1
//                         }
//                     ],
//                     "key": "columns",
//                     "type": "columns",
//                     "input": false,
//                     "tableView": false
//                 },
//                 {
//                     "type": "button",
//                     "label": "Submit",
//                     "key": "submit",
//                     "disableOnInvalid": true,
//                     "input": true,
//                     "tableView": false,
//                     "hideOnChildrenHidden": false
//                 }
//             ]
//         }
//     }

//     validateForm(submission: any, callback: any): void {
//         // tslint:disable-next-line:no-null-keyword
//         callback(null, submission);
//     }

//     submitForm(submission: any): void {
//         console.log(submission);
//         this.loginService.signUpUser(submission)
//             .subscribe(result => {
//                 console.log(result);
//             }, err => {
//                 alert(err);
//             });
//     }

//     cleanup(): void {
//         throw new Error('Method not implemented.');
//     }
// }
