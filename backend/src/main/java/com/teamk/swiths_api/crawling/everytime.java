package com.teamk.swiths_api.crawling;

import com.teamk.swiths_api.user.repository.entity.Day;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class everytime {
    private static WebDriver driver;
    private static String url;
    private static List<everytimeComponent> result;

    public static class everytimeComponent {
        private String name;
        private Day day;
        private LocalTime startTime;
        private LocalTime endTime;

        public everytimeComponent(String name, Day day, LocalTime startTime, LocalTime endTime) {
            this.name = name;
            this.day = day;
            this.startTime = startTime;
            this.endTime = endTime;
        }

        public String getDay() {
            return this.day.toString();
        }

        public String getName() {
            return this.name;
        }

        public LocalTime getStartTime() {
            return this.startTime;
        }

        public LocalTime getEndTime() {
            return this.endTime;
        }
    }

    public everytime(String url) {
        this.url = url;
        List<everytimeComponent> result = new ArrayList<>();
        this.result = result;
    }

    public List<everytimeComponent> run() {
        System.setProperty("webdriver.gecko.driver", "/home/ubuntu/crawling/geckodriver");
        FirefoxOptions options = new FirefoxOptions();
        options.addArguments("--headless");
        driver = new FirefoxDriver(options);

        try {
            getDataList();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        driver.quit(); // 브라우저 닫기
        return result;
    }

    private void getDataList() throws InterruptedException {
        List<String> list = new ArrayList<>();

        driver.get(url); // 브라우저에서 url로 이동한다.
        Thread.sleep(1000); // 브라우저 로딩될때까지 잠시 기다린다.

        List<WebElement> elements = driver.findElements(By.className("grid"));
        Dimension gridSize = elements.get(0).getSize();
        Point startingPoint = elements.get(0).getLocation();
        int startX = startingPoint.x;
        int startY = startingPoint.y;
        int dx = gridSize.getWidth();
        int hour = gridSize.getHeight();
        int min30 = hour / 2;
        int min15 = hour / 4; // min15 = 15분 단위

        List<WebElement> subjects = driver.findElements(By.className("subject"));
        for (WebElement subject : subjects) {
            String subjectName = subject.findElement(By.tagName("h3")).getText();

            int currentHeight = subject.getSize().getHeight();
            int minute = currentHeight / min15;
            if (currentHeight % min15 >= min15 / 2) {
                minute += 1;
            }
            minute *= 15;

            int currentX = subject.getLocation().getX();
            int currentY = subject.getLocation().getY();
            currentX = currentX - startX;
            currentY = currentY - startY;

            int day = currentX / dx;
            if (currentX % dx >= dx / 2) {
                day += 1;
            }

            int startYY = currentY / min30;
            if (currentY % min30 > min30 / 2) {
                startYY += 1;
            }
            LocalTime startTime = LocalTime.of(startYY / 2, (startYY % 2) * 30);
            startYY = startYY * 30 + minute;

            LocalTime endTime = LocalTime.of(startYY / 60, startYY % 60);
            Day currentDay = Day.values()[day];
            everytimeComponent component = new everytimeComponent(subjectName, currentDay, startTime, endTime);
            result.add(component);
        }
    }
}
