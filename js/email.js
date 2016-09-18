function helloEmail(){
  var helper = require('sendgrid').mail

  from_email = new helper.Email("test@example.com")
  to_email = new helper.Email("trentellingsen@gmail.com")
  subject = "Hello World from the SendGrid Node.js Library"
  content = new helper.Content("text/plain", "some text here")
  mail = new helper.Mail(from_email, subject, to_email, content)
  email = new helper.Email("test2@example.com")
  mail.personalizations[0].addTo(email)

  return mail.toJSON()
}

function send(toSend){
  console.log(JSON.stringify(toSend, null, 2))
  //console.log(JSON.stringify(toSend))

  var sg = require('sendgrid')(process.env.CT5xt9BrQ4yOMy34cvK41Q)

  var requestBody = toSend
  var emptyRequest = require('sendgrid-rest').request
  var requestPost = JSON.parse(JSON.stringify(emptyRequest))
  requestPost.method = 'POST'
  requestPost.path = '/v3/mail/send'
  requestPost.body = requestBody
  sg.API(requestPost, function (error, response) {
    console.log(response.statusCode)
    console.log(response.body)
    console.log(response.headers)
  })
}

send(helloEmail())
