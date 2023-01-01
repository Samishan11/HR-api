const Router = require("express").Router();
const USER_ROUTE = require('./user.route/user.route');
const VACANCY_ROUTE = require("./vacancy.route/vacancy.route");
const APPLICANT_ROUTE = require("./applicant.route/applicant.route");
// 
Router.use(USER_ROUTE)
Router.use(VACANCY_ROUTE)
Router.use(APPLICANT_ROUTE)

module.exports = Router;