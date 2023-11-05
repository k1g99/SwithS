package com.teamk.swiths_api.crawling;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class SKKULibrary {
    private static WebDriver driver;
    private static String SKKUID = "nwchung98";
    private static String SKKUPASSWORD = "CNSA@nj860827";


    public static void main(String[] args) {
        System.setProperty("webdriver.gecko.driver", "C:\\crawling\\geckodriver.exe");
        FirefoxOptions options = new FirefoxOptions();
        options.setCapability("ignoreProtectedModeSettings", true);

        driver = new FirefoxDriver(options);
        driver.get("https://lib.skku.edu/suwon/#/smuf/room/group-study?floor=2");
        LoginSKKU();

        int myMinutes = 30;
        System.out.println("11111111");
        Duration durationInMinutes = Duration.ofMinutes(myMinutes);
        WebDriverWait wait = new WebDriverWait(driver, durationInMinutes);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.className("ikc-service-form")));
        WebElement optionDiv = driver.findElement(By.className("ikc-service-form"));
        List<WebElement> Options = optionDiv.findElements(By.tagName("option"));
        System.out.println("222222222");
        int i= 0;
        for(WebElement option : Options){
            System.out.println(i++);
            System.out.println(option.getAttribute("value"));
        }
        System.out.println("33333333");
    }

    public static void LoginSKKU(){
        try {
            // 명시적 대기 ( 해당 요소가 나타날 때까지 대기 )
            driver.findElement(By.id("userid")).sendKeys(SKKUID); // 해당 요소를 찾아서, 입력
            driver.findElement(By.id("password")).sendKeys(SKKUPASSWORD);
            driver.findElement(By.className("btn-block")).click();
            List<WebElement> elements = driver.findElements(By.className("btn-block"));

        } catch (Exception e) {

            e.printStackTrace();
        }
    }

}
