import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>' ,this.img);
    //code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/rock.jpg';
  counter = 0;
  counterFn: number | undefined;

  constructor() {
      // before render
     // don't async -- once time
    console.log('constructor', 'imgValue = >', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
      //before render
      //change inputs - n° times
      console.log('ngOnChanges', 'imgValue = >', this.img);
      console.log(changes);
      // if (changes.) {
        // // code
        // }
  }

  ngOnInit(): void {
     //before render
    //async - fetch  -- once time
    console.log('ngOnInit', 'imgValue = >', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000);
  }

  ngAfterViewInit() {
  //after render
  //handle children
  console.log('AfterViewInit');
  }

  ngOnDestroy() {
  //delete render - once time
  console.log('ngOnDestroy');
  window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
   console.log('son log');
   this.loaded.emit(this.img);
 }

}
