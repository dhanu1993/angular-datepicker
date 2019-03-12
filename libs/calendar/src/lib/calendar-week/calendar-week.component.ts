import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NumericDayOfWeek, setDayOfWeek, startOfDay } from 'date-utils';

@Component({
  selector: 'lib-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarWeekComponent {
  private readonly today = startOfDay(new Date());
  daysOfWeek = Array.from({length: 7}, (_, index) => setDayOfWeek(this.today, index as NumericDayOfWeek));
  @Input() locale?: string;
}