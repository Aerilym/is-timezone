import { timeZonesNames } from "@vvo/tzdb";


// The sets are created for quicker timezone checking using the .has method
const timezones = new Set(timeZonesNames);
const lowercaseTimezones = new Set(timeZonesNames.map((str) => str.toLowerCase()));

/**
 * Validate a string is a valid timezone.
 * 
 * @param timezone {string} The timezone to validate.
 * @param ignoreCase {boolean} Allow lowercase timezone names.
 * @returns if the string is a valid timezone. (true/false)
 */
export default function isTimezone(timezone: string, ignoreCase: boolean = false): boolean {
  if (!timezone) throw new Error('Timezone required in isTimezone');

  return ignoreCase ? lowercaseTimezones.has(timezone.toLowerCase()) : timezones.has(timezone);
};
