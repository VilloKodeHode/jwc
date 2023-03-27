import aws from "aws-sdk";

const sendEmailToMe = async (formData) => {
  const requiredFields = ["email", "firstName", "lastName", "message"];

  // Check if all required fields are filled out
  for (const field of requiredFields) {
    if (!formData[field]) {
      throw new Error(
        `Oops! You are missing the ${field} field, please fill it in and retry.`
      );
    }
  }

  const endpoint =
    "https://drayggdi6t7tnbviin7ucjgsjq0jhztd.lambda-url.eu-north-1.on.aws/";
  const apiKey = process.env.CONTACT_FORM_API_KEY;
  const source = `${formData.firstName} ${formData.lastName} <${formData.email}>`;

  // Send data to AWS Lambda
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      Source: source,
    },
  });

  if (response.status === 200) {
    return { message: "Success! Thank you for your message!" };
  } else {
    throw new Error("Oops! Something went wrong. Please try again later.");
  }
};

export default sendEmailToMe;
