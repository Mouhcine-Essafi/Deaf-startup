
const month = document.querySelector("#month");
const year = document.querySelector("#year");
var offerown = document.querySelector("#offer1");
var offertwo = document.querySelector("#offer2");

month.addEventListener('click', () => {
    offerown.style.display = "none";
    offertwo.style.display = "flex";
    month.classList.add("botona")
    year.classList.remove("botona")
});
year.addEventListener('click', () => {
    offerown.style.display = "flex";
    offertwo.style.display = "none";
    year.classList.add("botona")
    month.classList.remove("botona")
});


var totalChecked = 0;
const priceElement = document.querySelector('.price');


const checkboxes = document.querySelectorAll('.feature-checkbox');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      totalChecked += 10;
    } else {
      totalChecked -= 10;
    }
    priceElement.textContent = "$" + totalChecked;
    console.log('Total checked:', totalChecked);
   
  });
});

        // TOTAL-PRICE 

var totalPrice = 0;
const pay1 = document.getElementById('#1');
const pay2 = document.getElementById('#2');
const pay3 = document.getElementById('#3');


pay1.addEventListener('click', () => {
    totalPrice = 0;
    console.log(0)
});

pay2.addEventListener('click', () => {
    totalPrice = 1;
});

pay3.addEventListener('click', () => {
    totalPrice = totalChecked;
    console.log(totalChecked)
});
