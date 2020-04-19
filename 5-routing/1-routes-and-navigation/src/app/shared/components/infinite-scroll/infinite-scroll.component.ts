import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css'],
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
  @Output()
  public scrolled = new EventEmitter();
  @ViewChild('anchor', { static: true })
  public anchor!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  public ngOnInit() {
    let init = true;
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }
      this.scrolled.emit(init);
      init = false;
    });
    this.observer.observe(this.anchor.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
    this.scrolled.complete();
  }
}
