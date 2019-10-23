FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build-env
WORKDIR /app

# Copy everything and build
COPY . ./

RUN dotnet restore "./TestApi.csproj"
RUN dotnet publish "TestApi.csproj" -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app
COPY --from=build-env /app/out .

ENTRYPOINT [ "dotnet", "TestApi.dll" ]