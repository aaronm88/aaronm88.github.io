const form = document.querySelector("form");


//const form = document.getElementById("myform");
//console.log(form);

form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { name, organization, email, phonenumber, topic, message } = event.target;

	// Use your API endpoint URL you copied from the previous step
  const endpoint = 'DUMMY_ENDPOINT'
    
  // We use JSON.stringify here so the data can be sent as a string via HTTP
	const body = JSON.stringify({
    senderName: name.value,
    senderOrganization: organization.value,
    senderEmail: email.value,
    senderPhoneNumber: phonenumber.value,
    senderTopicInterest: topic.value,
    senderMessage: message.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      
      return response.json();
    })
    .then((response) => {
      console.log(response);
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unkown error occured.";
    });
});