import { timeZonesNames } from "@vvo/tzdb";

/**
 * Validate that a string is a valid timezone.
 * 
 * @param timezone {string} The timezone to validate.
 * @param allowLowerCase {boolean} Allow lowercase timezone names.
 * @returns Whether the timezone is valid.
 */
export default function isTimezone(timezone: string, allowLowerCase: boolean = false): boolean {
  if (allowLowerCase) {
    timezone = timezone.toLowerCase();
    return timeZonesNames.some(timezoneName => {
      return timezone === timezoneName.toLowerCase();
    });
  } else {
    if (!timezone) throw new Error('I need a timezone');
    return timeZonesNames.includes(timezone);
  }
};