function firstWord(s) {
  if (s === null || s.length === 0) {
    return s;
  }

  s = s.trim(); // This will remove any leading or trailing spaces

  const firstSpaceIndex = s.indexOf(' ');

  if (firstSpaceIndex === -1) {
    return s;
  } else {
    return s.substring(0, firstSpaceIndex);
  }
}
const s = prompt("Enter String:");
alert(firstWord(s));