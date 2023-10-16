FROM eclipse-temurin:17

COPY target/*.jar app.jar

EXPOSE 5000

ENTRYPOINT ["java", "-jar", "/app.jar"]

RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime && echo Asia/Seoul > /etc/timezone
