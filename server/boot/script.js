module.exports = function(app){

  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Group = app.models.Group;
  var State = app.models.State;
  var Member = app.models.Member;
  var Employee = app.models.Employee;

/*  State.create([
      {title: "Texas", sequence: 1, id: 1},
      {title: "Kentucky", sequence: 2, id: 2},
      {title: "Mississippi", sequence: 3, id: 3}],
    function (err, states) {
      if (err)return console.error('%j', err);
      console.log(states);

      Group.create([
        {title: "Denton", stateId: 1},
        {title: "Austin", stateId: 1},
        {title: "Fort Worth", stateId: 1},
        {title: "North", stateId: 2},
        {title: "South", stateId: 2},
        {title: "East", stateId: 3},
        {title: "West", stateId: 3}
      ], function (err, groups) {
        if (err)return console.error('%j', err);
        console.log(groups);

        Member.create([
          {
            fname: "John",
            lname: "Lister",
            email: "j.lister@heathus.com",
            password: "12345HCI",
            username: "John Lister",
            stateId: 1
          },
          {
            fname: "Andrew",
            lname: "Machiano",
            email: "a.machiano@heathus.com",
            password: "12345HCI",
            username: "Andrew Machiano",
            stateId: 1
          },
          {
            fname: "Sean",
            lname: "Cerda",
            email: "s.cerda@heathus.com",
            password: "12345HCI",
            username: "Sean Cerda",
            stateId: 2
          },
          {
            fname: "Paul",
            lname: "Galyean",
            email: "p.galyean@heathus.com",
            password: "12345HCI",
            username: "Paul Galyean",
            stateId: 3
          }
        ], function (err, members) {
          if (err)return console.error('%j', err);
          console.log(members);

          Employee.create([
            {employee_number: "12345", memberId: 2, stateId: 1, groupId: 1},
            {employee_number: "12345", memberId: 3, stateId: 2, groupId: 1},
            {employee_number: "12345", memberId: 4, stateId: 3, groupId: 1}
          ], function (err, employees) {
            if (err) {
              return console.error('%j', err);
              console.log(employees);
            }
          })
        })

      })

  });*/
Role.create({
  name:'administrator'
}, function(err,role){
  if(err) return console.error(err);
  console.info(role);

  role.principals.create({
    principalType: RoleMapping.USER,
    principalId: 2
  }, function (err,principal){
    if (err) return debug(err);
    console.error(principal);
  })
});

  /*User.create([
    {username: 'John', email: 'john@email.com', password: "01234HCI"},
    {username: 'IT', email: 'it@email.com', password: "01234HCI"}
  ], function(err, users){
    if (err) return console.error('%j', err);

    Role.create({
      name:'admin'
    }, function (err,role){
      if (err) return console.error(err);
      console.info(role);

      //Make IT and admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[1].id
      }, function(err, principal){
        if (err) return debug(err);
        console.error(principal);
      });
    });
  });*/
};


