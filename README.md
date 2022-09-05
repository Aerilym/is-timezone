# is-timezone

[![Build](https://github.com/Aerilym/is-timezone/actions/workflows/build.yml/badge.svg)](https://github.com/Aerilym/is-timezone/actions/workflows/build.yml)
[![npm version](https://badge.fury.io/js/is-timezone.svg)](https://badge.fury.io/js/is-timezone)
[![Known Vulnerabilities](https://snyk.io/test/github/aerilym/is-timezone/badge.svg)](https://snyk.io/test/github/aerilym/is-timezone)

Is this string a valid timezone? Validate timezones before using them in node, dates, or new objects.

## Usage

### Setup

```JavaScript
const isTimezone = require('is-timezone');
```

or

```TypeScript
import isTimezone from 'is-timezone';
```

### Validate a timezone

```JavaScript
const isTimezone = require('is-timezone');

if (isTimezone('Australia/Melbourne')) {
  // Do something
};


```

## Example

A production example of using this transport is available here: [photoprism-helper config.ts](https://github.com/Aerilym/photoprism-helper/tree/master/src/config.ts)

Here is the relevant code, omitting anything not relevant to the transport:

```TypeScript
TBA
```
