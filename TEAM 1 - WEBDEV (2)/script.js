const form = document.getElementById('survey-form');
const tableBody = document.querySelector('#feedback-table tbody');
const subjectFilter = document.getElementById('filter');
const ratingFilter = document.getElementById('rating-filter');

// Get selected radio value for rating
function getSelectedRating() {
  const ratingRadios = document.querySelectorAll('input[name="rating"]');
  for (const radio of ratingRadios) {
    if (radio.checked) {
      return parseInt(radio.value);
    }
  }
  return 0;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('anonymous').checked ? 'Anonymous' : document.getElementById('name').value;
  const grade = document.getElementById('grade').value;
  const subject = document.getElementById('subject').value;
  const lesson = document.getElementById('lesson').value;
  const selectedRating = getSelectedRating();

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
  applyFilters();
});

subjectFilter.addEventListener('change', applyFilters);
ratingFilter.addEventListener('change', applyFilters);

function applyFilters() {
  const selectedSubject = subjectFilter.value;
  const selectedRating = ratingFilter.value;

  Array.from(tableBody.rows).forEach(row => {
    const subject = row.cells[2].textContent;
    const rating = row.cells[3].textContent;

    const subjectMatch = (selectedSubject === 'All' || subject === selectedSubject);
    const ratingMatch = (selectedRating === 'All' || rating === selectedRating);

    row.style.display = (subjectMatch && ratingMatch) ? '' : 'none';
  });
}
