import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  
  phoneNumber: string = '';
  email: string = '';
  date: string = '';
  birthday: string = '';
  constructor(private util: UtilsService) { }

  ngOnInit() {
  }

  verifyPhoneNumber() {
    if (this.util.isMobilePhone(this.phoneNumber)) {
      console.log('这是正确的手机号');
    } else {
      console.log('这不是正确的手机号');
    }
  }

  verifyEmail() {
    if (this.util.isEmail(this.email)) {
      console.log('这是正确的电子邮箱');
    } else {
      console.log('这不是正确的电子邮箱');
    }
  }

  onChange() {
    this.birthday = this.date;
  }

  changeDate() {
    this.birthday = this.util.formatDate(this.date);
  }
}
