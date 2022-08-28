import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/rock.jpg';

  constructor() {
      // before render
     // don't async -- once time
    console.log('constructor', 'imgValue = >', this.img);
  }

  ngOnChanges() {
      //before render
      //change inputs - n° times
      console.log('ngOnChanges', 'imgValue = >', this.img);
  }

  ngOnInit(): void {
     //before render
    //async - fetch  -- once time
    console.log('ngOnInit', 'imgValue = >', this.img);
  }

  ngAfterViewInit() {
  //after render
  //handle children
  console.log('AfterViewInit');
  }

  ngOnDestroy() {
  //delete render
  console.log('AfterViewInit');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
   console.log('son log');
   this.loaded.emit(this.img);
 }

}
