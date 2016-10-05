/*global angular, console*/
angular.module('confusionApp')
        .controller('MenuController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
            
        'use strict';
            
        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;

        $scope.dishes = menuFactory.getDishes();


        $scope.select = function (setTab) {
            $scope.tab = setTab;

            if (setTab === 2) {
                $scope.filtText = "appetizer";
            } else if (setTab === 3) {
                $scope.filtText = "mains";
            } else if (setTab === 4) {
                $scope.filtText = "dessert";
            } else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        };
    }])

    .controller('ContactController', ['$scope', function ($scope) {

        'use strict';
        
        $scope.feedback = {
            mychannel: "",
            firstName: "",
            lastName: "",
            agree: false,
            email: ""
        };

        var channels = [
            {
                value: "tel",
                label: "Tel."
            },
            {
                value: "Email",
                label: "Email"
            }
        ];

        $scope.channels = channels;
        $scope.invalidChannelSelection = false;

    }])

    .controller('FeedbackController', ['$scope', function ($scope) {

        'use strict';
        
        $scope.sendFeedback = function () {

            console.log($scope.feedback);

            if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            } else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {
                    mychannel: "",
                    firstName: "",
                    lastName: "",
                    agree: false,
                    email: ""
                };
                $scope.feedback.mychannel = "";
                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }])

    .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function ($scope, $stateParams, menuFactory) {

        'use strict';
        
        var dish = menuFactory.getDish(parseInt($stateParams.id, 10));

        $scope.dish = dish;

    }])

    .controller('DishCommentController', ['$scope', function ($scope) {

        'use strict';
        
        $scope.mycomment = {
            rating: 5,
            comment: "",
            author: "",
            date: ""
        };

        $scope.submitComment = function () {

            $scope.mycomment.date = new Date().toISOString();
            console.log($scope.mycomment);

            $scope.dish.comments.push($scope.mycomment);

            $scope.commentForm.$setPristine();

            $scope.mycomment = {
                rating: 5,
                comment: "",
                author: "",
                date: ""
            };
        };
    }])

    .controller('IndexController', ['$scope', '$routeParams', 'corporateFactory', function ($scope, $routeParams, corporateFactory) {

        'use strict';

    }])
    
    .controller('AboutController', ['$scope', '$routeParams', 'corporateFactory', function ($scope, $routeParams, corporateFactory) {

        'use strict';
        

    }]);