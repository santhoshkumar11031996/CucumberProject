package com.stepdefinition;

import com.basepackage.BaseClass;
import com.pagefactory.HomePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepdefinition {
	@Given("Launch the Browser and loadUrl")
	public void launch_the_Browser_and_loadUrl() {
		BaseClass.brouchlaunch();
		BaseClass.loadUrl("https://www.amazon.in/");
		
		
	   
	}

	@When("To search i phone on text box")
	public void to_search_i_phone_on_text_box() {
		HomePage hp = new HomePage();
		hp.searchBox.sendKeys("i phone 14 pro");
		hp.searchBTN.submit();
		
		
	   
	}

	@Then("to check it is i phone {int} and close the Browser")
	public void to_check_it_is_i_phone_and_close_the_Browser(Integer int1) {
		
		BaseClass.closeBrowser();
		
	   
}
	@When("To search samsungs{int} on text box")
	public void to_search_samsungs_on_text_box(Integer int1) {
		HomePage hp1 = new HomePage ();
		hp1.searchBox.sendKeys("samsungS23");
		hp1.searchBTN.submit();
		
	   
	}

	@Then("to check it issamsungs{int} and close the Browser")
	public void to_check_it_issamsungs_and_close_the_Browser(Integer int1) {
		BaseClass.closeBrowser();
		
		
		
	   
	}
}