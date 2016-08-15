var app = require('../../server/server');
var path = require('path');
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

  IssueReport.sendMail = function(report, cb){
    var issue = report;
    var html = issue;
    console.log(issue);
    IssueReport.app.models.Email.send({
      to: ['j.lister@heathus.com', 'jlister76@gmail.com'],
      from: 'noreply@gmail.com',
      subject: 'Issue Tracker- Field Smart Update',
      template: path.resolve(__dirname, '../../server/views/issue.ejs')
    }, function(err, mail) {
      console.log('email sent!');
      if (err) console.log(err);
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

  IssueReport.submitIssue = function(report,next){
    IssueReport.sendMail(report);
    console.log("Sent!");
    next();
  };

  IssueReport.remoteMethod('submitIssue', {
    accepts: {arg: 'issue', type: 'Object'},
    http: {path: '/issueTracker', verb: 'post'}
  }
)



};
