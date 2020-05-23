
const form = document.forms.search;

const [input, search] = form.elements;
input.addEventListener('focus', () => alert('focused'), false);
