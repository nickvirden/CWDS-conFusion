/*global angular*/
angular.module('confusionApp', [])
    .controller('menuController', ['$scope', function ($scope) {
        
        'use strict';
        
        // Tab defaults to 'The Menu'
        $scope.tab = 1;
        
        // Filter text is blank, meaning there's no sort order
        $scope.filtText = '';
        
        // Description won't be shown until toggled
        $scope.showDetails = false;

        var dishes = [
            {
                name: 'Uthapizza',
                image: 'images/uthapizza.png',
                category: 'mains',
                label: 'Hot',
                price: '4.99',
                description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                comment: ''
            },
            {
                name: 'Zucchipakoda',
                image: 'images/zucchipakoda.png',
                category: 'appetizer',
                label: '',
                price: '1.99',
                description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                comment: ''
            },
            {
                name: 'Vadonut',
                image: 'images/vadonut.png',
                category: 'appetizer',
                label: 'New',
                price: '1.99',
                description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
                comment: ''
            },
            {
                name: 'ElaiCheese Cake',
                image: 'images/elaicheesecake.png',
                category: 'dessert',
                label: '',
                price: '2.99',
                description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                comment: ''
            }
        ];
        
        // Variable to access dishes array
        $scope.dishes = dishes;
        
        // Runs a function on the ng-click number specified that returns one of the categories,
        // which in turn returns a filter for the ng-repeat on the dish items that only shows the categories where the filter is true
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
        
        // Shows this tab as clicked
        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };
        
        // When I click the button, it changes whether showDetails is 'true' or 'false', which determines whether the description is shown or not
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
            
            if ($scope.feedback.agree && ($scope.feedback.mychannel === "") && !$scope.feedback.mychannel) {
                
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
    }]);