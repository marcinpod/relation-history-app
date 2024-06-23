import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonComponent} from "mfcmptestcomponents";
import {UserStateService} from "mfcmpteststate";

@Component({
  selector: 'relation-history-dashboard',
  standalone: true,
  imports: [CommonModule, SkeletonComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public user$ = inject(UserStateService).user$
}
