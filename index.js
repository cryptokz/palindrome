function palindrome(str) {
  str = str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(' ', ' ');
  console.log(str);
  for (i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome('Eye'); // true
palindrome('nose'); // false
palindrome('2 A3*3_A2'); // true
