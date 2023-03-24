import "isomorphic-fetch";

const sendEmail = async (formData) => {
  const requiredFields = ["email", "firstName", "lastName", "message"];

  // Check if all required fields are filled out
  for (const field of requiredFields) {
    if (!formData[field]) {
      throw new Error(
        `Oops! You are missing the ${field} field, please fill it in and retry.`
      );
    }
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  const apiKey = process.env.CONTACT_FORM_API_KEY;

  // Send data to AWS Lambda
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
  });

  console.log(response);

  if (response.status === 200) {
    return { message: "Success! Thank you for your message!" };
  } else {
    throw new Error("Oops! Something went wrong. Please try again later.");
  }
};

export default sendEmail;
