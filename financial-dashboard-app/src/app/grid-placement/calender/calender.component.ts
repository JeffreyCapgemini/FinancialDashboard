import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})

export class CalendarComponent implements OnInit{

  currentDay: string = '';
  currentMonth: string = '';
  currentDayNumber: number = 0;
  currentYear: number = 0;

ngOnInit(): void {
  this.getTime();
}
  
getTime(){
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  const date = new Date();
  this.currentDay = weekday[date.getDay()];
  this.currentMonth = months[date.getMonth()];
  this.currentDayNumber = date.getDate();
  this.currentYear = date.getFullYear();

  return this.currentDay;
  return this.currentMonth;
  return this.currentDayNumber;
  return this.currentYear;
}
}
