const select = document.querySelector('.form__select');
let selectOptions;
let selectPlaceholder;
let realSelect;

if (select) {
  const selectField = select.closest('.form__unit');
  selectPlaceholder = selectField.querySelector('.form__fake-select');
  selectPlaceholder.addEventListener('click', openSelect);
  selectOptions = select.querySelectorAll('.form__select-item');
  selectOptions.forEach(opt => opt.addEventListener('click', chooseOption));
  realSelect = selectField.querySelector('select');
}

function openSelect() {
  select.classList.toggle('form__select_visible');
  selectPlaceholder.classList.toggle('form__fake-select_opened');
  clearErrors(this);
}

function closeSelect() {
  select.classList.remove('form__select_visible');
  selectPlaceholder.classList.remove('form__fake-select_opened');
}

function chooseOption(evt) {
  selectOptions.forEach(opt => opt.classList.remove('form__select-item_checked'));
  evt.target.classList.add('form__select-item_checked');
  let selectedValue = evt.target.textContent;
  selectPlaceholder.textContent = selectedValue;
  const realSelectOptions = realSelect.querySelectorAll('option');
  for (let opt of realSelectOptions) {
    if (opt.value === selectedValue) {
      opt.selected = true;
    }
  }
  closeSelect();
}


