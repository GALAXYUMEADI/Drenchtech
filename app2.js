// Initialize Firebase
var config = {
  apiKey: "AIzaSyAeeoIdNfuCm2SY-TlHxY1Ysd3nOzeTcbk",
  authDomain: "drenchtechs-c71e4.firebaseapp.com",
  projectId: "drenchtechs-c71e4",
  storageBucket: "drenchtechs-c71e4.appspot.com",
  messagingSenderId: "591657762088",
  appId: "1:591657762088:web:6f61e5f4fc3bfd9087241d",
  measurementId: "G-89CW1JGN44"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('myForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var message = getInputVal('message');
  var newsletter = getInputVal('newsletter');
  var notify = getInputVal('notify');

  // Save message
  saveMessage(fname,lname, email, message,newsletter,notify);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('myForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage( fname,lname,email,message,newsletter,notify){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email: email,
    message:message,
    newsletter:newsletter,
    notify:notify,
  });
} 