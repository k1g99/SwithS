# builder
FROM gradle:8.2.1-jdk17-alpine as builder

WORKDIR /app
# Only copy dependency-related files
COPY build.gradle settings.gradle gradlew /app/
RUN gradle clean build --no-daemon --parallel > /dev/null 2>&1 || true

COPY ./ /app/
RUN gradle clean build --no-daemon --parallel

FROM amazoncorretto:17-alpine-jdk
COPY --from=builder /app/build/libs/*.jar /app/app.jar