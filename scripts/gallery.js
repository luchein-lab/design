const filters = [...document.querySelectorAll('[data-family-filter]')];
const cards = [...document.querySelectorAll('.asset-card')];
const search = document.getElementById('asset-search');
const count = document.getElementById('result-count');
let family = 'all';
const normalize = value => value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function update() {
  const query = normalize(search.value.trim());
  let visible = 0;
  for (const card of cards) {
    card.hidden = (family !== 'all' && card.dataset.family !== family) || !normalize(card.dataset.search).includes(query);
    if (!card.hidden) visible++;
  }
  count.textContent = `${visible} ${visible === 1 ? 'asset' : 'assets'}`;
  document.getElementById('empty-state').hidden = visible !== 0;
}
for (const filter of filters) {
  filter.addEventListener('click', () => {
    family = filter.dataset.familyFilter;
    for (const button of filters) button.setAttribute('aria-pressed', String(button === filter));
    update();
  });
}
search.addEventListener('input', update);
update();
