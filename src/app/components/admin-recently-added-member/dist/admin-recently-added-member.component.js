"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminRecentlyAddedMemberComponent = void 0;
var _ = require("lodash");
var core_1 = require("@angular/core");
var compiler_1 = require("@angular/compiler");
var AdminRecentlyAddedMemberComponent = /** @class */ (function () {
    function AdminRecentlyAddedMemberComponent(registerFormService, registerServiceService, modalService, sanitizer, helperService, loginService, router) {
        this.registerFormService = registerFormService;
        this.registerServiceService = registerServiceService;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.helperService = helperService;
        this.loginService = loginService;
        this.router = router;
        this.formIo = {
            form: {},
            submission: { data: {} },
            onSubmit: function (data) {
            },
            beforeSubmit: function (event, callback) {
            }
        };
        this.data = {};
        this.url = 'student';
        this.recentlyAdded = [];
        this.configData = {};
        this.formName = 'Create Plan';
        this.isAdmin = false;
        this.submissionData = {};
        this.progress = 0;
        this.message = '';
        this.path = '/assets/image/';
        this.itemsPerSlide = 4;
        this.singleSlideOffset = true;
        this.noWrap = true;
        this.formIoOptions = {
            submitMessage: '',
            disableAlerts: true,
            noAlerts: true
        };
    }
    AdminRecentlyAddedMemberComponent.prototype.onSignUpFormChange = function () {
    };
    AdminRecentlyAddedMemberComponent.prototype.onFormLoad = function () {
    };
    AdminRecentlyAddedMemberComponent.prototype.ngOnInit = function () {
        this.userinfo(compiler_1.tokenName);
        this.isAdmin = this.helperService.userData['role'] === 'ADMIN' ? true : false;
        //this.getmemberInfo(0);
        this.getRecentlyadded();
        // this.isAdmin = this.userinfo['role'] === 'ADMIN' ? true : false;
        this.router;
    };
    AdminRecentlyAddedMemberComponent.prototype.getPath = function (plan) {
        var path = this.path + ("" + plan.code);
        return path;
    };
    AdminRecentlyAddedMemberComponent.prototype.sanitizeImageUrl = function (imageName) {
        var imageUrl = this.path + imageName + '.jpg';
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    };
    AdminRecentlyAddedMemberComponent.prototype.viewbyID = function (userId) {
        var url = '/FullProfile/';
        this.router.navigate([url, userId]);
    };
    AdminRecentlyAddedMemberComponent.prototype.getRecentlyadded = function () {
        var _this = this;
        this.registerServiceService.getRecentlyadded()
            .subscribe(function (result) {
            console.log(result);
            _this.recentlyAdded = result;
            _.remove(_this.recentlyAdded, function (item) {
                return item.id === _this.helperService.userData['id'];
            });
        }, function (err) {
            alert(err);
        });
    };
    AdminRecentlyAddedMemberComponent.prototype.addmemberInfo = function () {
        this.configData = {
            formName: this.formName
        };
        this.openModalWithClass(this._template);
    };
    AdminRecentlyAddedMemberComponent.prototype.userinfo = function (token) {
        var _this = this;
        this.loginService.getuserInfo()
            .subscribe(function (result) {
            _this.isAdmin = result['role'] === 'ADMIN' ? true : false;
            //this.loginUserInfo = result;
        }, function (err) {
            // alert(err);
        });
    };
    AdminRecentlyAddedMemberComponent.prototype.openModalWithClass = function (template, item) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { "class": 'gray modal-lg' }));
        this.showLoginForm(item);
    };
    AdminRecentlyAddedMemberComponent.prototype.selectFile = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AdminRecentlyAddedMemberComponent.prototype.upload = function () {
        var _this = this;
        var data = this.formIo.submission.data;
        this.submissionData['data'] = data;
        this.submissionData['files'] = this.selectedFile;
        if (data && data['id']) {
            this.registerServiceService.editmemberInfo(this.submissionData['data'], this.submissionData['files'], this.submissionData['data']['id'])
                .subscribe(function (result) {
                console.log(result);
            }, function (err) {
                alert(err);
            });
        }
        else {
            this.registerServiceService.upload(this.submissionData)
                .subscribe(function (event) {
            }, function (err) {
                _this.progress = 0;
                _this.message = 'Could not upload the file!';
                _this.currentFile = undefined;
            });
        }
    };
    AdminRecentlyAddedMemberComponent.prototype.deletememberInfo = function (item) {
        this.registerServiceService.deletememberInfo(item.id)
            .subscribe(function (result) {
            console.log(result);
        }, function (err) {
            alert(err);
        });
    };
    AdminRecentlyAddedMemberComponent.prototype.editmemberInfo = function (item) {
        this.configData = {
            formName: this.formName,
            selectedItem: item
        };
        this.openModalWithClass(this._template, item);
        this.formName = "Edit Plan: " + item.client_product_name;
    };
    AdminRecentlyAddedMemberComponent.prototype.addPlan = function () {
        this.configData = {
            formName: this.formName
        };
        this.openModalWithClass(this._template);
    };
    AdminRecentlyAddedMemberComponent.prototype.showLoginForm = function (item) {
        console.log(item);
        if (!_.isEmpty(item)) {
            this.registerFormService.data = item;
            this.formIo.submission.data = item;
        }
        this.formIo.form = this.registerFormService.getForm();
    };
    __decorate([
        core_1.Input('config')
    ], AdminRecentlyAddedMemberComponent.prototype, "config");
    __decorate([
        core_1.ViewChild('template', { static: false })
    ], AdminRecentlyAddedMemberComponent.prototype, "_template");
    AdminRecentlyAddedMemberComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-recently-added-member',
            templateUrl: './admin-recently-added-member.component.html',
            styleUrls: ['./admin-recently-added-member.component.css']
        })
    ], AdminRecentlyAddedMemberComponent);
    return AdminRecentlyAddedMemberComponent;
}());
exports.AdminRecentlyAddedMemberComponent = AdminRecentlyAddedMemberComponent;
