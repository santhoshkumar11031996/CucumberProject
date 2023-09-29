package com.basepackage;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
	
    public static  	WebDriver driver  = null  ;
	
	public static void brouchlaunch() {
		driver =  new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	public static void loadUrl(String url) {
		driver.get(url);
	}
    public static void closeBrowser() {
	driver.close();
}
    
}
