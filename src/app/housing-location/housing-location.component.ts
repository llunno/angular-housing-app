import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffieHellmanGroupConstructor } from 'crypto';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation;
}
