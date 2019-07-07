// Code your solution here
const findMatching = (names, str) => names.filter(name => name.toLowerCase() === str.toLowerCase());
const fuzzyMatch = (names, str) => names.filter(name => name.toLowerCase().startsWith(str.toLowerCase()[0]) && name.toLowerCase().match(str.toLowerCase()));
const matchName = (drivers, str) => drivers.filter(driver => driver.name.toLowerCase() === str.toLowerCase());
