//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function remove(str) {
	str=str+" "
	let newstr=str.replaceAll("the ","").trim();
	 newstr=str.replaceAll("The ","").trim();
	 newstr=str.replaceAll("a ","").trim();
	 newstr=str.replaceAll("A ","").trim();
	 newstr=str.replaceAll("an ","").trim();
	 newstr=str.replaceAll("An ","").trim();
	return newstr
}


bands.sort((a,b)=>{
	return remove(a)-remove(b)? 1:-1;
});

const bandList = document.getElementById('band');
bands.forEach(band=>{
	const listitem=document.createElement("li")
	listitem.textContent=band();
	bandlist.append(listitem)
})