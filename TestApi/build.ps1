dotnet restore
dotnet publish -c Release -o ./bin/Release/netcoreapp3.0/publish
docker-compose rm -f -s
docker-compose up -d --build