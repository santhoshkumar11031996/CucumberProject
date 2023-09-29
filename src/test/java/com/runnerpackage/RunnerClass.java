package com.runnerpackage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="C:\\Users\\santh\\eclipse-workspace\\CucumberProject\\src\\test\\resources\\Features",
                 glue= { "com.stepdefinition"} ,            
                 plugin= {"html:Reports/Html"})
public class RunnerClass {

}
