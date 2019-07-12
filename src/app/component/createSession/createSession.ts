import { Component, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "../../shared/models/childsModel";
import { EventEmitter } from "@angular/core";
@Component({
  selector: "create-session",
  templateUrl: "./createSession.html",
  styleUrls: ["./createSession.less"]
})
export class CreateSession implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  id: FormControl;
  presenter: FormControl;
  duration: FormControl;
  abstract: FormControl;

  submitInf(formValue) {
    console.log("session ===> ", formValue);
    let newSession: ISession = {
      name: formValue.name,
      presenter: formValue.presenter,
      abstract: formValue.abstract,
      duration: formValue.duration,
      id: formValue.id
    };
    this.saveNewSession.emit(newSession);
  }

  private checkInput(formControl: FormControl): { [key: string]: any } {
    return formControl.value.includes("foo") ? { restrictedWord: "foo" } : null;
  }

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.id = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      this.checkInput
    ]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      id: this.id,
      duration: this.duration,
      abstract: this.abstract
    });
  }
}
