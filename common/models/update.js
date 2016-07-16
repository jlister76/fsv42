var app = require('../../server/server');
module.exports = function(Update) {

  Update.sendMail = function(emails,cb){
    Update.app.models.Email.send({
      to: emails,
      from: 'noreply@gmail.com',
      subject: 'Delete this email',
      text: 'This is a test email.',
      html: '<em>This is a test message [email reminder].</em>'
    }, function(err, mail) {
      console.log('email sent!');
      if (err) return err;
    });
  };
  Update.sendReminder = function (emails,next) {

    Update.sendMail(emails);
    console.log("An email reminder was sent to: " + emails);
    next();
  };

  Update.remoteMethod(
    'sendReminder',
    {
      accepts: {arg: 'email', type: 'Array'},
      http: {path: '/sendReminder', verb: 'post'}
    });


};
