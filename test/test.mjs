import pkg from '../lib/index.js';
import { timeZonesNames } from "@vvo/tzdb";

// Test all timezones are validated as valid
timeZonesNames.forEach(tz => {
  if(!pkg.default(tz)) throw new Error(tz + ' was incorrectly returned as not a timezone');
});
console.log('All timezones were correctly returned as timezones.');

// Test all timezones are validated as invalid when lower case
timeZonesNames.forEach(tz => {
  if(pkg.default(tz.toLowerCase())) throw new Error(tz + ' was incorrectly returned as not a timezone');
});
console.log('All timezones were correctly returned as invalid when lower case.');

// Test all timezones are validated as valid when lower case and allowing fuzzy case
timeZonesNames.forEach(tz => {
  if(!pkg.default(tz.toLowerCase(), true)) throw new Error(tz + ' was incorrectly returned as not a timezone');
});
console.log('All timezones were correctly returned as timezones when lower case and allowing fuzzy case.');
