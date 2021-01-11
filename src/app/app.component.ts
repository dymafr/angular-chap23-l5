import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public form: FormGroup;
  public options = ["Paris", "Nice", "Nimes"];
  public filteredOptions: Observable<string[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();

    this.filteredOptions = this.form.get("autocomplete").valueChanges.pipe(
      startWith(""),
      map((value: string) =>
        this.options.filter((option: string) =>
          option.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  }

  createForm() {
    this.form = this.fb.group({
      input: ["", Validators.required],
      majeur: [],
      gender: [],
      toggle: [],
      select: [],
      slider: [],
      date: [],
      start: [],
      end: [],
      autocomplete: []
    });
  }
}
