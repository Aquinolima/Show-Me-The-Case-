/**
 * Função para configurar firebase
 *
 */
config = {
	apiKey: "AIzaSyBGry68sIprZ1TcR3tO2BPQYLsfne9dtCU",
  authDomain: "itondemandforstartupsapp.firebaseapp.com",
  databaseURL: "https://itondemandforstartupsapp.firebaseio.com",
  projectId: "itondemandforstartupsapp",
  storageBucket: "itondemandforstartupsapp.appspot.com",
  messagingSenderId: "641899490029",
  appId: "1:641899490029:web:fc4d56082c62ffe1"
};
firebase.initializeApp(config);

var database = firebase.database();

/**
 * Função para gravar lead no banco de dados
 *
 * @param {string} email
 */
 function saveLeads( email) {

 	var ref = database.ref('leads');
 	var saveNewLead = ref.push();
 	saveNewLead.set({
 		 	email: email,
 		 	});
 }

/**
 * Função para enviar os dados para o Firebase
 *
 */
 form = document.getElementById('form-leads');
 var btnpdf = document.getElementById('pdf-download');
 form.addEventListener('submit', function(e) {
 	e.preventDefault();
     var email = form.querySelector('[name="email"]').value,
     msg = document.getElementById("msg")
 	
 	saveLeads( email);

  	// form.parentNode.parentNode.classList.add('obrigado');
 	form.style.display = 'none';
 	msg.style.display = 'block';
 })