package com.pagefactory;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.basepackage.BaseClass;

public class HomePage extends BaseClass{
	
	public HomePage() {
		PageFactory.initElements(driver,this);
		
	}
	
	@FindBy(xpath = "//input[@id='twotabsearchtextbox']")
	public WebElement searchBox;
	
	@FindBy(xpath="//input[@type='submit']")
	public WebElement searchBTN;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
