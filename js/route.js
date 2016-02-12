app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "home.html",
			controller: "displaycontroller"
		})
		.when('/modules', {
			templateUrl: "modules/modules.html",
			controller: "displaycontroller"
		})
		.when('/weekly', {
			templateUrl: "modules/weekly/weekly.html",
			controller: "displaycontroller"
		})
		.when('/week1', {
			templateUrl: "modules/weekly/week1/week1.html",
			controller: "displaycontroller"
		})
		.when('/cardflip', {
			templateUrl: "modules/weekly/week1/cardflip.html",
			controller: "displaycontroller"
		})
		.when('/syllabus', {
			templateUrl: "syllabus/syllabus.html",
			controller: "displaycontroller"
		})
		.when('/overview', {
			templateUrl: "syllabus/overview.html",
			controller: "displaycontroller"
		})
		.when('/contacts', {
			templateUrl: "syllabus/contacts.html",
			controller: "displaycontroller"
		})
})