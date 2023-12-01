import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  transform(timeString: string): string {
    // Check if the input is a valid time string, e.g., "01:30:00"
    if (!timeString || !timeString.match(/^\d{2}:\d{2}:\d{2}$/)) {
      return timeString; // Return the original string if it's not in the expected format
    }

    const [hours, minutes, seconds] = timeString.split(":");
    const formattedTime = new Date();
    formattedTime.setHours(Number(hours), Number(minutes), Number(seconds));

    // Use DatePipe's 'transform' method with a format string and timezone
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(formattedTime, 'shortTime', 'Asia/Manila'); // Use Philippines timezone
  }
}