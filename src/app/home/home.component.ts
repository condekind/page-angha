import { Component, OnInit, Pipe } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

// ha-ha
// tslint:disable: max-line-length

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened: boolean

  optCall = `<pre style="width:90%;margin-left:32px;color:#000000;background:#f1f0f0;font-family:'Source Code Pro', monospace;">
opt -mem2reg -O0 -instcount <span style="color:#0f6900; ">\</span>
    -load <span style="color:#40015a; ">llvm-ep/build/VarCounter/VarCounter.so</span> -VarCounter <span style="color:#0f6900; ">\</span>
    -load <span style="color:#40015a; ">llvm-ep/build/EdgeCounter/EdgeCounter.so</span> -EdgeCounter <span style="color:#0f6900; ">\</span>
    -stats <span style="color:#44aadd;">-S</span> \${lnk_name} -disable-output <span style="color:#c00000; ">2</span><span style="color:#e34adc; ">&gt;</span><span style="color:#e34adc; ">&gt;</span> stats<span style="color:#400000; font-weight:bold; ">.</span>txt
      </pre>`

  constructor() {}

  ngOnInit() {}
}

@Pipe({name: 'safeHtml'})
export class Safe {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value)
    // return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}
