$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/santh/eclipse-workspace/CucumberProject/src/test/resources/Features/HomPage.feature");
formatter.feature({
  "name": "This feature is goin to be a automated on AMAZON Web App",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch the Browser and loadUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepdefinition.launch_the_Browser_and_loadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "this scenario based on purches Iphone14",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To search i phone on text box",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepdefinition.to_search_i_phone_on_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to check it is i phone 14 and close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepdefinition.to_check_it_is_i_phone_and_close_the_Browser(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch the Browser and loadUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepdefinition.launch_the_Browser_and_loadUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "this scenario based on purches samsungs23",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To search samsungs23 on text box",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepdefinition.to_search_samsungs_on_text_box(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to check it issamsungs23 and close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepdefinition.to_check_it_issamsungs_and_close_the_Browser(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("C:/Users/santh/eclipse-workspace/CucumberProject/src/test/resources/Features/LoginPage.feature");
formatter.feature({
  "name": "this feature is to test the loginpage scenarios.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "this Scenario is to test loginpage functionality.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Lunch browser and load Url",
  "keyword": "Given "
});
formatter.step({
  "name": "provide valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" later hit login",
  "keyword": "When "
});
formatter.step({
  "name": "Validate the user and close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "santhosh@gmail.com",
        "hello123"
      ]
    },
    {
      "cells": [
        "kumar@email.com",
        "hai011"
      ]
    }
  ]
});
formatter.scenario({
  "name": "this Scenario is to test loginpage functionality.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Lunch browser and load Url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepsDefinitions.lunch_browser_and_load_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide valid \"santhosh@gmail.com\" and \"hello123\" later hit login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepsDefinitions.provide_valid_and_later_hit_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the user and close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepsDefinitions.validate_the_user_and_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "this Scenario is to test loginpage functionality.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Lunch browser and load Url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepsDefinitions.lunch_browser_and_load_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide valid \"kumar@email.com\" and \"hai011\" later hit login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepsDefinitions.provide_valid_and_later_hit_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the user and close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepsDefinitions.validate_the_user_and_close_browser()"
});
formatter.result({
  "status": "passed"
});
});