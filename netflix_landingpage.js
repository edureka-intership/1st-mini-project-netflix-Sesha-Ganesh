function getStarted(email_id) {
   let email = document.getElementById(email_id).value;
   if (email) {
      alert(`With ${email} login/sign-up process begins`);
   } else {
      alert('Invalid Email. Provide a valid email to get started');
   }
   document.getElementById(email_id).value = '';
}

function getSignedIn() {
   alert('Sign in on Netflix..! Have fun watching!');
}

function toogleShow(dd_menu) {
   if (document.getElementById(dd_menu).className === 'dropdown-menu show') {
      document.getElementById(dd_menu).className = 'dropdown-menu';
   } else {
      document.getElementById(dd_menu).className = 'dropdown-menu show';
   }
}

function toogleFaq(question_id, answer_id) {
   var description = document.getElementById(answer_id);
   var button = document.getElementById(question_id);
   if (description.style.display === 'none') {
      description.style.display = 'block';
      button.innerText = 'x';
   } else {
      description.style.display = 'none';
      button.innerText = '+';
   }
   button = null;
   answer = null;
}
