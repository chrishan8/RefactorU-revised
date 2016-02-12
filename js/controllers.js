var app = angular.module('refactoru', ['ngRoute','ngToast', 'ngSanitize'])

app
.controller('displaycontroller', ['$scope', '$location', '$anchorScroll', 'homecards', 'modulescards', 'weekcards', 'week1exerciselist', 'ngToast', 'syllabuslist', 'employeelist', function($scope, $location, $anchorScroll, homecards, modulescards, weekcards, week1exerciselist, ngToast, syllabuslist, employeelist) {
	// FOR INDEX.HTML
	$scope.indexviewjumbotron = function(x) {
      	$location.hash('anchor1');
    };
    $scope.indexviewjumbotron();
    // FOR HOME.HTML CARDS
    $scope.homecardsleft = homecards.row.leftside;
    $scope.homecardsright = homecards.row.rightside;

    // FOR MODULES.HTML CARDS
    $scope.modulescards = modulescards;

    // FOR WEEKLY.HTML CARDS
    $scope.dates = weekcards;
    $scope.today = new Date();

    // FOR WEEKL1.HTML TABLE OF CONTENTS
    $scope.week1 = week1exerciselist;
    $scope.week1completion = [[false, false, false, false, false, false, false]];
	var iscomplete = function(element, index, array) {
		return element === true;
	}

	$scope.completedcheckcardflip = function() {
		if ($scope.week1completion[0].every(iscomplete) === true) {
			ngToast.create({
  				content: '<a href="#" class="btn">a message</a>'
  			});
  			console.log('+5 RP! Much Wow!');
  			$scope.disableitcardflip = true;
  		}
	}

	// FOR SYLLABUS.HTML TABLE OF CONTENTS
	$scope.syllabus = syllabuslist;

	// FOR CONTACTS.HTML EMPLOYEE LIST
	$scope.instructors = employeelist.instructors;
	$scope.faculty = employeelist.faculty;

	$scope.nav = [];

	$scope.homecardsleftnav = function(index) {
		if ($scope.homecardsleft[index].nav) {
			$scope.$parent.nav.push($scope.homecardsleft[index].cardtitle);
		}
		console.log($scope.nav);
	}
	$scope.homecardsrightnav = function(index) {
		if ($scope.homecardsright[index].nav) {
			$scope.$parent.nav.push($scope.homecardsright[index].cardtitle);
		}
	}

	$scope.modulesnav = function(index) {
		if ($scope.modulescards[index].nav) {
			$scope.$parent.nav.push($scope.modulescards[index].cardtitle);
		}
	}

	$scope.weeklynav = function(index) {
		if ($scope.dates[index].nav) {
			$scope.$parent.nav.push($scope.dates[index].cardtitle);
		}
	}

	$scope.homebtn = function() {
		$scope.$parent.nav = [];
	}

	$scope.backbtn = function() {
		$scope.$parent.nav.pop();
	}
}])
// .controller('navcontroller', ['$scope', 'homecards', 'modulescards', 'weekcards', 'week1exerciselist', 'syllabuslist',  function($scope, homecards, modulescards, weekcards, week1exerciselist, syllabuslist) {
// 	$scope.homecards = function() {
// 		if homecards.row
// 	}
// }])

app.factory('homecards', function() {
	var cardsrow1 = {
		leftside: [
		{
			cardtitle: "Modules",
			marquee: "Modules - Coding Exercises",
			img: "img/home/modules.jpg",
			link: "#/modules",
			nav: true,
			highlighted: false
		},{
			cardtitle: "Social",
			marquee: "Social - Class Profile",
			img: "img/home/social.jpg",
			link: "#/social",
			nav: true,
			highlighted: false
		}],
		rightside: [
		{
			cardtitle: "Resources",
			marquee: "Resources - Lectures/Documentations",
			img: "img/home/resources.jpg",
			link: "#/resources",
			nav: true,
			highlighted: false
		},{
			cardtitle: "Github",
			marquee: "Github - Class Repository",
			img: "img/home/github.jpg",
			link: "https://github.com/RefactorU/Jan2016-DemoCode",
			nav: false,
			highlighted: false
		},{
			cardtitle: "Syllabus",
			marquee: "Syllabus - Schedule/Contacts",
			img: "img/home/syllabus.jpg",
			link: "#/syllabus",
			nav: true,
			highlighted: false
		}]
	}
	return {row:cardsrow1};
})

app.factory('modulescards', function() {
	var cards = [
	{
		cardtitle: "Weekly Exercises",
		img: "img/home/modules/weekly.jpg",
		link: "#/weekly",
		nav: true,
		highlighted: false
	},{
		cardtitle: "Community Challenges",
		img: "img/home/modules/community.jpg",
		link: "#/community",
		nav: true,
		highlighted: false
	},{
		cardtitle: "Hacker Rank",
		img: "img/home/modules/hackerrank.jpg",
		link: "https://www.hackerrank.com/",
		nav: false,
		highlighted: false
	}]
	return cards;
})

app.factory('weekcards', function() {
	var cards = [
	{
		cardtitle: "Week 1",
		date: Date.parse('Jan 11, 2016'),
		url: "#/week1",
		nav: true,
		img: "img/home/modules/weekly/week1.jpg",
		completion: false
	},
	{
		cardtitle: "Week 2",
		date: Date.parse('Jan 18, 2016'),
		url: "#/week2",
		nav: true,
		img: "img/home/modules/weekly/week2.jpg",
		completion: false
	}, 
	{
		cardtitle: "Week 3",
		date: Date.parse('Jan 25, 2016'),
		url: "#/week3",
		nav: true,
		img: "img/home/modules/weekly/week3.png",
		completion: false
	},
	{
		cardtitle: "Week 4",
		date: Date.parse('Feb 1, 2016'),
		url: "#/week4",
		nav: true,
		img: "img/home/modules/weekly/week4.jpg",
		completion: false
	},{
		cardtitle: "Week 5",
		date: Date.parse('Feb 8, 2016'),
		url: "#/week5",
		nav: true,
		img: "img/home/modules/weekly/week5.png",
		completion: false
	},
	{
		cardtitle: "Week 6",
		date: Date.parse('Feb 15, 2016'),
		url: "#/week6",
		nav: true,
		completion: false
	},{
		cardtitle: "Week 7",
		date: Date.parse('Feb 22, 2016'),
		url: "#/week7",
		nav: true,
		completion: false
	},
	{
		cardtitle: "Week 8",
		date: Date.parse('Feb 29, 2016'),
		url: "#/week8",
		nav: true,
		completion: false
	},{
		cardtitle: "Week 9",
		date: Date.parse('Mar 7, 2016'),
		url: "#/week9",
		nav: true,
		completion: false
	},
	{
		cardtitle: "Week 10",
		date: Date.parse('Mar 14, 2016'),
		url: "#/week10",
		nav: true,
		completion: false
	}]
	return cards;
})

app.factory('week1exerciselist', function() {
	var exerciselist = [
	{
		title: "Card Flip",
		link: "#/cardflip",
		nav: true
	},{
		title: "CSS Modularity",
		link: "#/cssmodularity",
		nav: true
	},{
		title: "CSS Modularity 2",
		link: "#/cssmodularity2",
		nav: true
	},{
		title: "Responsive Web Design",
		link: "#/responsivewebdesign",
		nav: true
	},{
		title: "Making It Real",
		link: "#/makingitreal",
		nav: true
	},{
		title: "Bonus: CSS Modularity 3",
		link: "#/bonus1",
		nav: true
	},{
		title: "Bonus: CSS Preprocessor - Stylus",
		link: "#/bonus2",
		nav: true
	}]
	return exerciselist;
})

app.factory('syllabuslist', function() {
	var list = [
	{
		title: "Course Overview",
		link: "#/overview",
		nav: true
	},{
		title: "Contacts",
		link: "#/contacts",
		nav: true
	},{
		title: "Policies",
		link: "#/policies",
		nav: true
	},{
		title: "FAQ",
		link: "#/FAQ",
		nav: true
	}]
	return list;
})

app.factory('employeelist', function() {
	var list = {
		instructors: [
		{
			name: "Rob Camp",
			role: "Lead Instructor",
			profilepic: "img/home/syllabus/contacts/rob.jpg"
		},
		{
			name: "Raphael Serota",
			role: "Lead Instructor",
			profilepic: "img/home/syllabus/contacts/raphael.jpg"
		},
		{
			name: "Andrew Otto",
			role: "Teaching Assistant",
			profilepic: "img/home/syllabus/contacts/andrew.jpg"
		},
		{
			name: "Jenn Vance",
			role: "Teaching Assistant",
			profilepic: "img/home/syllabus/contacts/jenn.jpg"
		},{
			name: "Max Richman",
			role: "Teaching Assistant",
			profilepic: "img/home/syllabus/contacts/max.jpg"
		},
		{
			name: "Andy Stone",
			role: "Guest Instructor - Front End",
			profilepic: "img/home/syllabus/contacts/andy.png"
		},{
			name: "Matt Clinton",
			role: "Guest Instructor - Back End",
			profilepic: "img/home/syllabus/contacts/matt.jpg"
		},
		{
			name: "Ellis Blevins",
			role: "Career Services",
			profilepic: "img/home/syllabus/contacts/ellis.jpg"
		},{
			name: "Crystine Hodges",
			role: "Career Services",
			profilepic: "img/home/syllabus/contacts/crystine.jpg"
		}],
		faculty: [
		{
			name: "Sean Daken",
			role: "CEO",
			profilepic: "img/home/syllabus/contacts/sean.jpg"
		},{
			name: "Ed Powers",
			role: "COO",
			profilepic: "img/home/syllabus/contacts/ed.jpg"
		},{
			name: "Sharone Goldman",
			role: "Enrollment Advisor",
			profilepic: "img/home/syllabus/contacts/sharone.jpg"
		},{
			name: "Valeria Dikovitskaya",
			role: "Student & Community Coordinator",
			profilepic: "img/home/syllabus/contacts/vally.jpg"
		},{
			name: "Pattie Kettle",
			role: "Marketing Coordinator",
			profilepic: "img/home/syllabus/contacts/pattie.jpg"
		}]
	}
	return list;
})
