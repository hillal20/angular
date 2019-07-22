import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "rxjs";

@Component({
  selector: "child-22",
  templateUrl: "./child.html",
  styleUrls: ["./child.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child22 implements OnInit {
  @Input() object;
  @Input() newSubject: Observable<any>;
  _x;

  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.newSubject.subscribe(data => {
      this._x = data.x;
      this.cd.markForCheck();
    });
  }
}
