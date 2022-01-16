//popup ticket buy
const popupBuyTicket = document.querySelector('#popup__buy-ticket'); // попап
const popupBuyTicketForm = popupBuyTicket.querySelector('#buy-ticket') // форма попапа
const userEmail = popupBuyTicket.querySelector('.popup__email-input');
const priceTicket = popupBuyTicketForm.querySelector('.popup__price');
const quantityField = popupBuyTicketForm.querySelector('.popup__count-total-result');

const plusButton = popupBuyTicketForm.querySelector('.popup__count-button-plus');
const minusButton = popupBuyTicketForm.querySelector('.popup__count-button-minus');

// исходные значения
function openPopup (popup) {
	popup.classList.add('popup_opened')
  }


function closePopup(popup) {
	popup.classList.remove('popup_opened')
}


popupBuyTicketForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	closePopup(popupBuyTicket);
});



minusButton.addEventListener('click', function () {
	this.nextElementSibling.stepDown();

})

plusButton.addEventListener('click', function () {
	this.previousElementSibling.stepUp();

})


popupBuyTicketForm.addEventListener("submit", (evt) => {
	evt.preventDefault();

  const payMethod = popupBuyTicket.querySelector('input[name="payment"]:checked');

	const requestValues = {
		countTicket: quantityField.value,
		price: 500 * quantityField.value + '',
		email: userEmail.value,
		methodpay: payMethod.value
	};

	console.log(requestValues);
	closePopup(popupBuyTicketForm);
	popupBuyTicketForm.reset();



});
