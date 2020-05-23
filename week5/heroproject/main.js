 const form = document.forms.hero;
 form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
     
    const label = form.querySelector('label');
     const error = document.createElement('div');
     error.classList.add('error');
     error.textContent = '! Your name is not allowed to start with C.';
     label.append(error);

     function validateInline() {
         const heroName = this.value.toUpperCase();
         if (heroName.startsWith('C')) {
             error.style.display = 'block';
         } else {
             error.style.display = 'none';
         }
     }
    hero.realName = form.realName.value;
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.origin = form.origin.value;
    hero.city = form.city.value;
   hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
  
   
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;

}



