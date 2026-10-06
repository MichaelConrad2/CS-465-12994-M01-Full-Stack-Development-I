import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {

  @Input() trip!: Trip;

  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  public editTrip(trip: Trip): void {
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['/edit-trip']);
  }

  public deleteTrip(trip: Trip): void {
    const confirmed =
      confirm(`Delete trip ${trip.name}?`);

    if (!confirmed) {
      return;
    }

    this.tripDataService
      .deleteTrip(trip.code)
      .subscribe({
        next: () => {
          window.location.reload();
        },
        error: (error: any) => {
          console.error('Error deleting trip:', error);
        }
      });
  }
}
