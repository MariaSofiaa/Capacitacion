import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
  <div class="container">
    <h1 class="title">Thank you !</h1>
    <p class="content">
        Your orden is on the way !
    </p>
    <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Officiis exercitationem sint deleniti dolorum, odit 
        reprehenderit ex quo veniam vitae, inventore laudantium 
        aut repellat voluptates eius fuga consequatur recusandae 
        hic quasi?
    </span>

</div>
`,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent {}
