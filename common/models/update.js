var app = require('../../server/server');
module.exports = function(Update) {

  Update.sendMail = function(emails,cb){
    Update.app.models.Email.send({
      to: emails,
      from: 'noreply@heathus.com',
      subject: 'Field Smart Update Reminder',
      text: '',
      html: '<p>A newer version of Field Smart is available for download.</p>' +
        '<p>Click <a href="https://fsv42.heathfieldapp.com"><em>here</em></a> to get the latest update.</p>'
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
