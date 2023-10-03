FROM adoptopenjdk:17-jdk-hotspot

COPY target/*.jar app.jar

EXPOSE 5000

ENTRYPOINT ["java", "-jar", "/app.jar"]
