import { Component, OnInit, Pipe } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened: boolean

  cols = ['name', 'descHTML']

  dataSource = [
    { name : 'Number of store instructions',  descHTML : 'How many store operations appear in the LLVM representation of the program.'                                                               },
    { name : 'Number of load instructions',   descHTML : 'How many load operations appear in the LLVM representation of the program.'                                                                },
    { name : 'Number of basic blocks',        descHTML : 'Number of <a href="https://en.wikipedia.org/wiki/Basic_block" target="blank">basic blocks</a> in the LLVM representation of the program.'  },
    { name : 'Number of instructions',        descHTML : 'Quantity of LLVM instructions in the intermediate representation of each program.'                                                         },
    { name : 'Number of named variables',     descHTML : 'Quantity of SSA-form variables in the LLVM representation of each program.'                                                                },
    { name : 'Number of variable uses',       descHTML : 'Sum of the number of times that each named variable appears as an operand in some instruction in the LLVM representation of the program.'  },
    { name : 'Number of edges',               descHTML : 'Number of edges in the <a href="https://en.wikipedia.org/wiki/Control-flow_graph" target="blank">Control Flow Graph</a> of each program.'  },
  ]

  optCall = `<pre style="width:auto;color:#000000;background:#f1f0f0;font-family:'Source Code Pro', monospace;">
opt -mem2reg <span style="color:#0f6900; ">\</span>
    -O0 <span style="color:#0f6900; ">\</span>
    -instcount <span style="color:#0f6900; ">\</span>
    -load <span style="color:#40015a; ">VarCounter.so</span> -VarCounter <span style="color:#0f6900; ">\</span>
    -load <span style="color:#40015a; ">EdgeCounter.so</span> -EdgeCounter <span style="color:#0f6900; ">\</span>
    -stats <span style="color:#0f6900; ">\</span>
    <span style="color:#44aadd;">-S</span> \${lnk_name} <span style="color:#0f6900; ">\</span>
    -disable-output <span style="color:#c00000; ">2</span><span style="color:#e34adc; ">&gt;</span><span style="color:#e34adc; ">&gt;</span> stats<span style="color:#400000; font-weight:bold; ">.</span>txt
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
