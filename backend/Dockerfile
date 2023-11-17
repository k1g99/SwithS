# builder
FROM gradle:8.2.1-jdk17-alpine as builder

WORKDIR /app

COPY build.gradle settings.gradle gradlew /app/
COPY gradle /app/gradle
COPY src/main/java/* /app/src/main/java
COPY src/main/resources/application.yml /app/src/main/resources/application.yml
RUN ./gradlew clean build

FROM amazoncorretto:17-alpine-jdk
COPY --from=builder /app/build/libs/*.jar /app/app.jar
