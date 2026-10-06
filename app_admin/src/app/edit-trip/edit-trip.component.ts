import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {

  public editForm!: FormGroup;

  trip!: Trip;
  submitted = false;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {

    const tripCode =
      localStorage.getItem('tripCode');

    if (!tripCode) {
      alert('Unable to locate trip code.');
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripDataService
      .getTrip(tripCode)
      .subscribe({

        next: (value: Trip) => {

          this.trip = value;

          /*
           * MongoDB normally returns a date such as
           * 2026-10-05T00:00:00.000Z.
           * HTML date inputs require YYYY-MM-DD.
           */
          const formValue: any = {
            ...value
          };

          if (formValue.start) {
            formValue.start =
              String(formValue.start)
                .substring(0, 10);
          }

          this.editForm.patchValue(formValue);

          this.message =
            `Trip: ${tripCode} retrieved`;

          console.log(this.message);
        },

        error: (error: any) => {
          console.error('Error:', error);
          this.message =
            'Unable to retrieve trip.';
        }

      });
  }

  public onSubmit(): void {

    this.submitted = true;

    if (this.editForm.valid) {

      this.tripDataService
        .updateTrip(this.editForm.value)
        .subscribe({

          next: (value: any) => {
            console.log(value);

            localStorage.removeItem(
              'tripCode'
            );

            this.router.navigate(['']);
          },

          error: (error: any) => {
            console.error('Error:', error);
          }

        });

    }
  }

  public cancel(): void {
    this.router.navigate(['']);
  }

  get f() {
    return this.editForm.controls;
  }
}
