import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomerService } from '../core/services/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  monthOptions = [
    { id: 0, monthName: 'Jan', value: 0 },
    { id: 1, monthName: 'Feb', value: 0 },
    { id: 2, monthName: 'March', value: 0 },
    { id: 3, monthName: 'April', value: 0 },
    { id: 4, monthName: 'May', value: 0 },
    { id: 5, monthName: 'Jun', value: 0 },
    { id: 6, monthName: 'July', value: 0 },
    { id: 7, monthName: 'Aug', value: 0 },
    { id: 8, monthName: 'sept', value: 0 },
    { id: 9, monthName: 'Oct', value: 0 },
    { id: 10, monthName: 'Nov', value: 0 },
    { id: 11, monthName: 'Dec', value: 0 },
  ];

  details_arr: any = [
    {
      expenses: '',
      date: '',
      amount: '',
    },
  ];

  Savedatalist: any[] = [];
  Jan = 0;
  Feb = 0;
  March = 0;
  April = 0;
  May = 0;
  June = 0;
  July = 0;
  Aug = 0;
  sept = 0;
  Oct = 0;
  Nov = 0;
  Dec = 0;
  monthlist: any;

  constructor(private fb: FormBuilder, public http: CustomerService) {
    this.customerForm = fb.group({});
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      expenses: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  get expensesName() {
    return this.customerForm.controls;
  }

  get expensesAmount() {
    return this.customerForm.controls;
  }

  AddExpenses() {
    this.http.savedata(this.customerForm.value);
    this.getdata();
    this.customerForm.reset();
  }

  getdata() {
    this.Jan = 0;
    this.Feb = 0;
    this.March = 0;
    this.April = 0;
    this.May = 0;
    this.June = 0;
    this.July = 0;
    this.Aug = 0;
    this.sept = 0;
    this.Oct = 0;
    this.Nov = 0;
    this.Dec = 0;

    this.Savedatalist = this.http.getdata();
    let date = new Date(this.details_arr.date).getDate();
    for (let i = 0; i < this.monthOptions.length; i++) {
      if (this.monthOptions[i].id == date)
        this.monthOptions[i].value =
          this.monthOptions[i].value + this.details_arr.amount;
      console.log('Date', this.monthOptions[i].value);
    }

    const toDate = (str: string) =>
      new Date(str.replace(/^(\d+)\/(\d+)\/(\d+)$/, '$2/$1/$3'));
    const month = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    const map = this.Savedatalist.reduce((a, b) => {
      const m = toDate(b.date).getMonth();
      a[m] = a[m] ? +a[m] + b.amount : +b.amount;
      return a;
    }, {});
    const res = Object.entries(map).map(([key, value]) => ({
      value,
      date: month[+key],
    }));
    this.monthlist = res;
    console.log('Amount and Month ', res);
  }

  Delete(index: number) {
    debugger;
    this.http.deletedata(index);
    this.getdata();
    console.log('Delete Works', index);
  }
}
