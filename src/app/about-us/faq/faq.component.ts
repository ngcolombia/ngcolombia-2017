import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs = [
    {
      question: '1. How many tickets are available?',
      answer: '300'
    },
    {
      question: '2. Can I purchase both workshops?',
      answer: 'No. Workshops are happening concurrently therefore you can only buy one.'
    },
    {
      question: '3. When will the tickets start selling?',
      answer: 'General tickets will be available Oct 24th at noon.'
    },
    {
      question: '4. Can I pay with credit or debit card?',
      answer: 'Yes, both type of payments are available.'
    },
    {
      question: '5. Will you serve lunch?',
      answer: 'No, but we will have snacks in the morning and the aftenoon 😄'
    },
    {
      question: '6. Will there be an after-party?',
      answer: 'We are on it at the moment, see the website for updates'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
