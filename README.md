# DockerfileDemo

To build from repository

```
docker build https://github.com/SamiKoh/DockerfileDemo.git -t imagename
```` 

To list images
```
docker images -a
```
To spin up a container from image 
```
docker run --detach --publish 8080:80 --name containername imagename
```

To list containers
```
docker ps -a
```
To stop a process

```
docker stop containername
```

To delete container
```
docker rm containername
```
To delete image 
```
docker rmi imagename
```