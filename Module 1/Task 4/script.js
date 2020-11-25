let validateForm = () => {
  var name = document.forms["form"]["name"].value;
  var email = document.forms["form"]["email"].value;
  var subject = document.forms["form"]["subject"].value;
  var message = document.forms["form"]["message"].value;

  var re = /\S+@\S+\.\S+/;

  if (email == "" || subject == "" || message == "") {
    alert("All fields must be filled.");
    return false;
  } else if (name[0] !== name[0].toUpperCase()) {
    alert("Name must start with a capital letter.");
    return false;
  } else if (re.test(email)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
};
