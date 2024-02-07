import { Component } from '@angular/core';

@Component({
  selector: 'app-page-content-layout',
  template: '<div class="flex max-w-full w-[1100px] mx-auto"  > <ng-content></ng-content></div>',
})
export class PageContentLayoutComponent {}
