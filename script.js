const activebr = document.querySelector('.nav-active');
const openmenubr = document.querySelector('.open-icon');
const newStyle = document.querySelector('.newStyle');
const tabs = document.querySelectorAll('[data-id]');
const tabContents = document.querySelectorAll('[data-content]');
      
openmenubr.addEventListener('click', () => {
  activebr.classList.toggle('show');
})

activebr.addEventListener('click', () => {
  activebr.classList.remove('show');
})

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.id);

    tabContents.forEach(tc => {
      tc.classList.remove('active');
    })
    target.classList.add('active');

    tabs.forEach(t => {
      t.classList.remove('active-line');
    })
    tab.classList.add('active-line');
  })
})


//----------for Dark mode-------
const moonMode = document.querySelector('.moon-mode');
const sunMode = document.querySelector('.sun-mode');

moonMode.addEventListener('click', () => {
  document.body.classList.add('light-mode');
  moonMode.style.display = 'none';
  sunMode.style.display = 'block';
})

sunMode.addEventListener('click', () => {
  document.body.classList.remove('light-mode');
  sunMode.style.display = 'none';
  moonMode.style.display = 'block';
})
