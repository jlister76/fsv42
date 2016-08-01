
var KY;
var groupList = [];
var uniqueEmployeeListOfUnconfirmed = [];
//STEP 1 Separate KY & MS employees and confirmations
_.forEach(state, function (s) {
  numOfEmployees.push(s.employees);
  numofConfirmations.push(s.confirmations);


});
console.log(state[0].title);
//STEP 2 Calculate KY and MS percentages
$scope.kyPercentages = kyNumofConfirmations[0].length / kyNumOfEmployees[0].length * 100;
console.log($scope.kyPercentages);

//STEP 3 Set title for each state
KY = state[0].title;


//STEP 4 Format percentage to whole number
var kyPercent = $filter('number')($scope.kyPercentages, 0);


//STEP 5 Inject HTML to show the percentage bar
var regionStat1 = '<div><span class="md-title">'+ KY +' (' + kyPercent + '%)</span></div>' +
  '<div flex style="margin:1rem;"><div layout flex="100" style="background-color:rgb(0,120,215); height:6px;">' +
  '<div style="width:' + $scope.kyPercentages + '%;background-color: rgb(243,188,9) ; height:6px;"></div></div></div>';


//STEP 6 Instantiate arrays for Groups and Labels
var KYGroups = [];
var KYLabels = [];


//STEP 7 Push Groups and Group Titles into an array
_.forEach(state[0].groups, function (g) {
  KYGroups.push(g);
  KYLabels.push(g.title);

});
_.forEach(state[0].confirmations, function (c) {
  if (KYGroups[0].id == c.groupId) {
    //TODO
  }
});


//STEP 8 Stats for each group by state
/*************************************************************************/
//Kentucky Group stats
var KYGroupLabels = [];
var KYGroupPercentages =[];

//Retrieve all groups in Kentucky
DashboardService
  .getKentuckyGroups()
  .then(function (Kentucky) {

    _.forEach(Kentucky.sort(compare), function (g) {
      KYGroupLabels.push(g.title)
    }); //Pushing group titles to the chart label
    function compare(a, b) {
      if (a.id < b.id)
        return -1;
      if (a.id > b.id)
        return 1;
      return 0;
    }//sorts objects by id

    //Calculating percentages for each group in Kentucky
    _.forEach(Kentucky.sort(compare), function (g) {
      var cl = g.confirmations.length;
      var el = g.employees.length;
      var percentage = cl / el * 100;
      KYGroupPercentages.push(percentage);
    });

    /*Angular-ChartJS*/
    $scope.KYLabel = KYGroupLabels;
    $scope.KYData = [KYGroupPercentages];

    //Unconfirmed Employee List
    var cList = [];
    var eList = [];
    var employeesWithConfirmations = [];
    var employeeList = [];
    _.forEach(Kentucky.sort(compare), function (g) { //Iterating through Kentucky groups
      _.forEach(g.confirmations, function (c) { //Iterating through each group confirmation
        cList.push(c); //separating confirmations into an array
      });
      _.forEach(g.employees, function (e) {
        eList.push(e); //separating employees into an array
        _.forEach(cList, function (c) {
          if (c.employeeId == e.id) {
            employeesWithConfirmations.push(e); //pushing employees with confirmations into an array
          }


        })
      })
    });//Creating an array of employees with confirmations


    //match employee ids with employeeId and return the difference
    var employeesWithoutConfirmations = _.differenceBy(eList.sort(compare), employeesWithConfirmations.sort(compare), 'id');

    console.log(employeesWithoutConfirmations);
    Employee
      .find({filter: {include: 'group', where: {stateId: 2}}})
      .$promise
      .then(function (employees) {
        var list = _.uniq(employees.sort(), employeesWithoutConfirmations.sort());
        _.forEach(employees.sort(), function (e) {
          _.forEach(employeesWithoutConfirmations.sort(), function (o) {
            if (e.id == o.id) {
              employeeList.push(e);
            }
          });
        });

        _.forEach(list, function (gl) {
          groupList.push(gl);
        });
        uniqueEmployeeListOfUnconfirmed = _.uniqBy(employeeList, 'group.title');
        console.log(uniqueEmployeeListOfUnconfirmed);
        $scope.employees = uniqueEmployeeListOfUnconfirmed;
      });


  });
/*************************************************************************/


/******INJECT INTO PAGE*******************************/
var regionElement = angular.element(document.querySelector('#state-box'));
/* var regionElement2 = angular.element(document.querySelector('#state-box-2'));*/

regionElement.html(regionStat1);
/* regionElement2.html(regionStat2);*/
