const iso2 = 'RU';

// Require `PhoneNumberFormat`.
const PNF = require('google-libphonenumber').PhoneNumberFormat;

// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// Parse number with country code and keep raw input.
// const number = phoneUtil.parseAndKeepRawInput('7778782416', iso2);
const number = phoneUtil.parse('+79811426842');

// Print the phone's country code.
console.log('Country code: ', number.getCountryCode());
// => 1

// Print the phone's national number.
console.log('National number', number.getNationalNumber());
// => 2024561414

// Print the phone's extension.
console.log(number.getExtension());
// =>

// Print the phone's extension when compared to i18n.phonenumbers.CountryCodeSource.
console.log(number.getCountryCodeSource());
// => FROM_DEFAULT_COUNTRY

// Print the phone's italian leading zero.
console.log(number.getItalianLeadingZero());
// => false

// Print the phone's raw input.
console.log(number.getRawInput());
// => 202-456-1414

// Result from isPossibleNumber().
console.log(phoneUtil.isPossibleNumber(number));
// => true

// Result from isValidNumber().
console.log(phoneUtil.isValidNumber(number));
// => true

// Result from isValidNumberForRegion().
console.log(phoneUtil.isValidNumberForRegion(number, iso2));
// => true

// Result from getRegionCodeForNumber().
console.log('RegionCode: ', phoneUtil.getRegionCodeForNumber(number));
// => US

// Result from getNumberType() when compared to i18n.phonenumbers.PhoneNumberType.
console.log('NumberType: ', phoneUtil.getNumberType(number));
// => FIXED_LINE_OR_MOBILE

// Format number in the E164 format.
console.log(phoneUtil.format(number, PNF.E164));
// => +12024561414

// Format number in the original format.
console.log(phoneUtil.formatInOriginalFormat(number, iso2));
// => (202) 456-1414

// Format number in the national format.
console.log(phoneUtil.format(number, PNF.NATIONAL));
// => (202) 456-1414

// Format number in the international format.
console.log(phoneUtil.format(number, PNF.INTERNATIONAL));
// => +1 202-456-1414

// Format number in the out-of-country format from US.
console.log(phoneUtil.formatOutOfCountryCallingNumber(number, iso2));
// => 1 (202) 456-1414

// Format number in the out-of-country format from CH.
console.log(phoneUtil.formatOutOfCountryCallingNumber(number, 'CH'));
// => 00 1 202-456-1414
