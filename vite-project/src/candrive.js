export function canDrive(age, countryCode) {
    const legalDrivingAge = {
      US: 16,
      FR: 18
    };
  
    if (!legalDrivingAge[countryCode]) {
      return 'Invalid country code';
    }
  
    return age >= legalDrivingAge[countryCode];
  }