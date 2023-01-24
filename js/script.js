"use strict"

const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
const allBody = document.body;

menuBurger.addEventListener('click', function(){
	if (menuBody.classList.contains('_active')){
	menuBurger.classList.remove('_active');
	menuBody.classList.remove('_active');	
	document.body.style.cssText = '';
	} else{
	menuBurger.classList.add('_active');
	menuBody.classList.add('_active');	
	document.body.style.cssText = `overflow: hidden`;
	}
})


// document.addEventListener('DOMContentLoaded', function(){
// 	const form = document.querySelector('.contact__form')
// 	form.addEventListener('submit', formSend)

// 	async function formSend(e) {
// 		e.preventDefault();
// 		let error = formValidate(form);
// 		let formData = new FormData(form);
// 		if (error === 0) {
// 			form.classList.add('_sending'); 
// 			let response = await fetch('sendform.php', {
// 				method: 'post',
// 				body: formData
// 			});
// 			if (response.ok){
// 				let result = await response.json();
// 				alert(result.message);
// 				form.reset();
// 			}
// 			else{
// 				alert('Sending error')
// 				form.classList.remove('_sending'); 
// 			}
// 		}
// 		else {
// 			alert('Please fill in the required fields')
// 			form.classList.remove('_sending'); 

// 		}
// 	}

// 	function formValidate(form) {
// 		let error = 0;
// 		let formReq = document.querySelectorAll('.__req')
// 		for (i=0;i<formReq.length;i++){
// 			const input = formReq[i];
// 			function formRemoveError(input);

// 			if(input.classList.contains('__email')){
// 				if(emailTest(input)){
// 					formAddError(input);
// 					error++;
// 				}
// 				else if (input.getAttribute("type") === "checkbox" && input.checked === false){
// 					formAddError(input);
// 					error++;
// 				} else {
// 					if (input.value === ''){
// 						formAddError(input);
// 						error++;
// 					}
// 				}
// 			}
// 		} return error;
// 	}

// 	function formAddError(input) {
// 		input.parentElement.classList.add('_error');
// 		input.classList.add('_error');
// 	}
// 	function formRemoveError(input) {
// 		input.parentElement.classList.remove('_error');
// 		input.classList.remove('_error');
// 	}
// // email check
// 	function emailTest(input) {
// 		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
// 	}
	
// })

// const cntForm = document.querySelector('.contact__form')
// cntBtn.addEventListener('click', submitForm);
// cntForm.addEventListener('submit', submitForm)

// function submitForm (){
// 	if (!cntFormInput.value) {
// 		console.log('Please fill the required field');
// 		cntForm.preventDefault()
// 	}else{
// 	cntForm.submit()
// }
// }

// form.addEventListener('submit', function() {
	
// });
// form.addEventListener('submit', function(event) {
// 	event.preventDefault();
// });
