# Use a base image with JDK (adapt version as needed)
FROM eclipse-temurin:21.0.2_13-jre-jammy as build
# Set the working directory inside the container
WORKDIR /app

# Ensure gradlew has execute permissions
COPY gradlew gradlew.bat ./
COPY gradle gradle
RUN chmod +x ./gradlew

# Copy the build files
COPY build.gradle.kts settings.gradle.kts ./

# Download dependencies
RUN ./gradlew dependencies || return 0

# Copy the source code
COPY src src

# Build the application
RUN ./gradlew build -x test

# Prepare for running the application
FROM eclipse-temurin:21.0.2_13-jre-jammy
WORKDIR /app
COPY --from=build /app/build/libs/server-0.0.1-SNAPSHOT.jar ./

# Run the application
ENTRYPOINT ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]
