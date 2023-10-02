FROM adoptopenjdk:11-jdk-hotspot

ARG SPRING_PROFILE=ebprod

ENV SPRING_PROFILES_ACTIVE=${SPRING_PROFILE}

COPY target/*.jar app.jar

EXPOSE 5000

ENTRYPOINT ["java", "-jar", "/app.jar"]
