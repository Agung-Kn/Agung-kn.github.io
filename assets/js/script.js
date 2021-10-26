AOS.init();

window.addEventListener('DOMContentLoaded', (event) => {
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav');
		const navbarBackground = document.body.querySelector('.navbar');

		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink');
			navbarBackground.classList.remove('bg-primary');
		} else {
			navbarCollapsible.classList.add('navbar-shrink');
			navbarBackground.classList.add('bg-primary');
		}
	};

	navbarShrink();

	document.addEventListener('scroll', navbarShrink);

	const mainNav = document.body.querySelector('#mainNav');
	if (mainNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#mainNav',
			offset: 74,
		});
	}
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzngQgQYyC0Q_kjR0yh9DkWVqr52g0Yvi77bqq86wnTnJulZRPjpBMRLr3rciQ0jpg/exec';
const form = document.forms['agung-contact-form'];
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	btnLoading.classList.toggle('d-none');
	btnSend.classList.toggle('d-none');
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then((response) => {
			btnLoading.classList.toggle('d-none');
			btnSend.classList.toggle('d-none');
			myAlert.classList.toggle('d-none');
			form.reset();
			console.log('Success!', response);
		})
		.catch((error) => console.error('Error!', error.message));
});
