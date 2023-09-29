package com.stepdefinition;

import com.basepackage.BaseClass;
import com.pagefactory.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepsDefinitions  {
	
	
	
	@Given("Lunch browser and load Url")
	public void lunch_browser_and_load_Url() {
	   BaseClass.brouchlaunch();
	   BaseClass.loadUrl("https://www.facebook.com/");
	
	}

	@When("provide valid {string} and {string} later hit login")
	public void provide_valid_and_later_hit_login(String username, String password) {
		LoginPage lp = new LoginPage();
		lp.username.sendKeys(username);
		lp.password.sendKeys(password);
	}

	@Then("Validate the user and close browser")
	public void validate_the_user_and_close_browser() {
	    BaseClass.closeBrowser();
	   
	}

}
