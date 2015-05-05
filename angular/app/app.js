var callListApp = angular.module("callListApp", ["ngRoute", "firebase"])
.constant('FIREBASEURL', 'https://calltable.firebaseio.com/');




callListApp.config(function($routeProvider){
	$routeProvider
	.when("/login", {
		templateUrl: "partials/login.html",
		controller: "CallListController"
	}).
	when("/daily", {
		templateUrl: "partials/daily.html",
		controller: "DailyListController"
	}).
	when("/monthy", {
		templateUrl: "partials/monthly.hmtl",
		controller: "MonthlyListController"
	}).
	when("/weekly", {
		templateUrl: "partials/weekly.html",
		controller: "WeeklyListController"
	}).
	when("/callentry", {
		templateUrl: "partials/callentry.html",
		controller: "CallListController"
	}).
	otherwise ({ 
	redirectTo: "/login"
	});
});