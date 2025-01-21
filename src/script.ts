console.log("Hello from TypeScript!");

const themeImg = document.getElementById('Theme') as HTMLImageElement;
const form = document.querySelector('#form') as HTMLFormElement;
const searchInp = document.querySelector('#inputa') as HTMLInputElement;
const toggler = document.querySelector('#temeSwitcher') as HTMLDivElement;
const body = document.querySelector('body') as HTMLBodyElement;
const columns = document.querySelectorAll('.column') as NodeListOf<HTMLElement>;

body.classList.add("dark-mode");
themeImg.setAttribute("src", "./image/darkMode.avif");

const ctrlTheme = () => {
  const isDarkMode = body.classList.toggle("dark-mode");
  themeImg.setAttribute("src", isDarkMode ? "./image/darkMode.avif" : "./image/whiteMode.avif");
};

const filterProductsByPrice = (searchValue: string) => {
  const searchAmount = parseFloat(searchValue);
  
  if (isNaN(searchAmount)) {
    console.log("Search is not a valid number.");
    columns.forEach((column) => column.style.display = 'block');
  } else {
    columns.forEach((column) => {
      const productPrice = parseFloat(column.getAttribute('data-price') || '0');
      console.log(`Product price: ${productPrice}, Search amount: ${searchAmount}`);
      
      if (productPrice <= searchAmount) {
        column.style.display = 'block';
      } else {
        column.style.display = 'none';
      }
    });
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted');
  filterProductsByPrice(searchInp.value);
});

searchInp.addEventListener('input', () => {
  console.log('Input event triggered');
  filterProductsByPrice(searchInp.value);
});

toggler.addEventListener("click", (e) => {
  e.preventDefault();
  ctrlTheme();
});
