const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function remove(str) {
  // Use a regular expression to replace specified prefixes
  return str.replace(/^(the|a|an)\s+/i, '').trim();
}

bands.sort((a, b) => {
  // Use localeCompare for string comparison
  return remove(a).localeCompare(remove(b));
});

const bandList = document.getElementById('bands'); // Corrected ID
bands.forEach(band => {
  const listItem = document.createElement("li");
  listItem.textContent = band;
  bandList.appendChild(listItem);
});
