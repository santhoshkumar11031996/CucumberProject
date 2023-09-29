package com.pagefactory;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.basepackage.BaseClass;

public class LoginPage extends BaseClass {
	
public LoginPage() {
	PageFactory.initElements(driver,this);
}

@FindBy(xpath="//input[@name='email']")
public WebElement username;

@FindBy(xpath="//input[@type='password']")
public WebElement password;

@FindBy(xpath="//button[@name='login']")
public WebElement loginbtn;



}
