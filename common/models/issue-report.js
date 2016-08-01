var app = require('../../server/server');
module.exports = function(IssueReport) {

    /*app.models.Email.send({
      to: 'foo@bar.com',
      from: 'you@gmail.com',
      subject: 'my subject',
      text: 'my text',
      html: 'my <em>html</em>'
    }, function(err, mail) {
      console.log('email sent!');
      cb(err);
    });*/

  IssueReport.sendMail = function(cb){
    IssueReport.app.models.Email.send({
      to: ['jlister76@gmail.com', 'jlister469@outlook.com'],
      from: 'noreply@gmail.com',
      subject: 'Field Smart Update Issue',
      text: 'This is a test email.',
      html: '<em>This is a test message.</em>'
    }, function(err, mail) {
      console.log('email sent!');
      if (err) return err;
    });
  };

  IssueReport.observe('after save', function(ctx, next) {
    if (ctx.instance) {
      IssueReport.sendMail();
      console.log('Saved %s#%s', ctx.Model.modelName, ctx.instance.id);
    } else {
      console.log('Updated %s matching %j',
        ctx.Model.pluralModelName,
        ctx.where);
    }
    next();
  });





};
