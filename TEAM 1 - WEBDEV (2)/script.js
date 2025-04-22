const stars = document.querySelectorAll('#teacher-rating span');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.value);
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add('selected');
    }
  });
});

const form = document.getElementById('survey-form');
const tableBody = document.querySelector('#feedback-table tbody');
const filter = document.getElementById('filter');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('anonymous').checked ? 'Anonymous' : document.getElementById('name').value;
  const grade = document.getElementById('grade').value;
  const subject = document.getElementById('subject').value;
  const lesson = document.getElementById('lesson').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${grade}</td>
    <td>${subject}</td>
    <td>${selectedRating}</td>
    <td>${lesson}</td>
  `;
  tableBody.appendChild(row);

  form.reset();
  stars.forEach(s => s.classList.remove('selected'));
  selectedRating = 0;
});

filter.addEventListener('change', () => {
  const subjectFilter = filter.value;
  Array.from(tableBody.rows).forEach(row => {
    const subject = row.cells[2].textContent;
    row.style.display = (subjectFilter === 'All' || subject === subjectFilter) ? '' : 'none';
  });
});