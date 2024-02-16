const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const submission = JSON.parse(event.body); // Parse the incoming submission data

  const msg = {
    to: 'your-email@example.com', // Your email address or the address you want to notify
    from: 'no-reply@example.com', // Your SendGrid verified sender
    subject: 'New Contact Form Submission',
    text: `You've got a new submission: ${submission.name}, ${submission.email}, ${submission.message}`,
    // Optionally, format the email content as you like
  };

  try {
    await sendgrid.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: error.code,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
