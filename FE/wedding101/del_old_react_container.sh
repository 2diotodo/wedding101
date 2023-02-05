#!/bin/bash
# 1. for removing '<none>:<none>' docker image
#    you can check this on the official documentation
#    https://docs.docker.com/engine/reference/commandline/images/
DANGLING_DOCKER_IMAGE=$(docker images -f "dangling=true" -q)

# 2. for removing 'react' container previously made
#    'PRE_REACT_CONTAINER' has all the value which has been made before
#    'PRE_REACT_IMAGE', 'PRE_REACT_TAG' for checking docker images which has "react"
PRE_REACT_CONTAINER=$(docker ps -a | grep "react" | awk '{print $1}')
PRE_REACT_IMAGE=$(docker images -a | grep "react" | awk '{print $1}')
PRE_REACT_TAG=$(docker images -a | grep "react" | awk '{print $2}')

if [ -n $PRE_REACT_CONTAINER ] ; then
	echo "Removing $PRE_REACT_CONTAINER where command including 'npm'"
	echo 'y' | docker system prune
	docker stop $PRE_REACT_CONTAINER
	docker rm $PRE_REACT_CONTAINER
else 
	echo "Great. There's no pre-container where command is 'npm'.."
fi

if [ -n $DANGLING_DOCKER_IMAGE ] ; then
	echo "Removing image-$DANGLING_DOCKER_IMAGE(<none>:<none>).."
	docker rmi $DANGLING_DOCKER_IMAGE
else
	echo "Great. There's no danling docker images(<none>:<none>).."
fi

if [ -n $PRE_REACT_IMAGE ] ; then
	echo "Removing previous $PRE_REACT_IMAGE:$PRE_REACT_TAG.."
	docker rmi -f $PRE_REACT_IMAGE:$PRE_REACT_TAG
	echo 'y' | docker system prune
else
	echo "Great. There's no previous $PRE_REACT_IMAGE:$PRE_REACT_TAG"
fi
