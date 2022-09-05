import { timeZonesNames } from "@vvo/tzdb";

export default function isTimezone(tz: string, allowLowerCase: boolean = false): boolean {
  if (allowLowerCase) {
    tz = tz.toLowerCase();
    return timeZonesNames.some(tzName => {
      return tz === tzName.toLowerCase();
    });
  } else {
    if (!tz) throw new Error('I need a timezone');
    return timeZonesNames.includes(tz);
  }
};