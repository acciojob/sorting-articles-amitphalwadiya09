const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function remove(str) {
  let newstr = str.replace(/the |The |a |A |an |An /g, '').trim();
  return newstr;
}

bands.sort((a, b) => {
  return remove(a).localeCompare(remove(b));
});

const bandList = document.getElementById('band');
bands.forEach(band => {
  const listItem = document.createElement("li");
  listItem.textContent = band;
  bandList.appendChild(listItem);
});
