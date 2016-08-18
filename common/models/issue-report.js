var app = require('../../server/server');

module.exports = function(IssueReport) {


  IssueReport.sendMail = function(report, cb){
   var employee = report.employee;
   var email = report.email;
   var group = report.group;
   var issue = report.issue;
   var comments = report.comments;
   var link = report.updateLink;
    var os = report.os;

    console.log("Sending email...");
    IssueReport.app.models.Email.send({
      to: ['j.lister@heathus.com', 'jlister76@gmail.com'],
      from: 'j.lister@heathus.com',
      subject: 'Issue Tracker- Field Smart Update',
      html: '<p>Employee: '+employee+'</p>' +
            '<p>Email: '+email +'</p>' +
            '<p>Group: '+group +'</p>' +
            '<p>O/S: '+os +'</p>' +
            '<p>Update Link: '+ link+'</p>' +
            '<p>Issue: '+issue +'</p>' +
            '<p>Comments: '+comments +'</p>'

    }, function(err, mail) {
      console.log('email sent!');
      if (err) console.log(err);
    });
  };

  /*IssueReport.observe('after save', function(ctx, next) {
    if (ctx.instance) {
      IssueReport.sendMail();
      console.log('Saved %s#%s', ctx.Model.modelName, ctx.instance.id);
    } else {
      console.log('Updated %s matching %j',
        ctx.Model.pluralModelName,
        ctx.where);
    }
    next();
  });*/

  IssueReport.submitIssue = function(report,next){
  console.log(report.issue);
   IssueReport.sendMail(report);
    next();
  };

  IssueReport.remoteMethod('submitIssue', {
    accepts: {arg: 'issue', type: 'Object'},
    http: {path: '/issueTracker', verb: 'post'}
  }
)



};
