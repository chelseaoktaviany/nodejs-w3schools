var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

var mailOptions = {
  from: "youremail@gmail.com",
  // to: "myfriend@yahoo.com", // single receiver
  to: "myfriend@yahoo.com, myotherfriend@yahoo.com",
  subject: "Sending email using Node.js",
  // text: "That was easy!",
  html: "<h1>Welcome</h1><p>That was easy</p>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
