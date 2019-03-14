/**
 * Main App Controller for the AngularJS Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav) {
    var self = this;

    self.selected = null;
    self.users = [];
    self.selectUser = selectUser;
//  self.toggleList   = toggleUsersList;
    self.lockedLeft = localStorage.getItem('lockedLeft') === 'false' ? false : true;

    // Load all registered users

    UsersDataService
            .loadAllUsers()
            .then(function (users) {
                self.users = [].concat(users);
                self.selected = users[0];
            });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
//  function toggleUsersList() {
//    $mdSidenav('left').toggle();
//  }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser(user) {
        self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }

    /**
     * Hide or Show the 'left' sideNav area
     */
    self.toggleLeft = function () {
        self.lockedLeft = !self.lockedLeft;
        localStorage.setItem('lockedLeft', self.lockedLeft);
    };
}

export default ['UsersDataService', '$mdSidenav', AppController];
