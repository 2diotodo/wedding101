echo "DOCKER_ID Check..."

PRE_DOCKER_ID=$(docker ps | grep spring-server | awk '{print $1}')
PRE_DOCKER_IMAGE=$(docker ps | grep spring-server | awk '{print $2}')
NONE_DOCKER_IMAGE=$(docker images -f "dangling=true" -q)

if [-n $NONE_DOCKER_IMAGE] ; then
    docker rmi -f $(docker images -f "dangling=true" -q)
fi

if [ -z $PRE_DOCKER_ID ] ; then
	echo "Docker is not running"
else
	echo "Running DOCKER_PID: {$PRE_DOCKER_ID}"
	echo "Stop this DOCKER_PID..."
	docker stop $PRE_DOCKER_ID


	echo "Do remove docker container"
    docker rm -f $PRE_DOCKER_ID
	echo "Done"

	echo "Do system pruning.."
	docker system prune -y
	echo "Done"

	echo "Do remove docker image"
    docker rmi $PRE_DOCKER_IMAGE
    docker system prune -y
	echo "Done"
	echo "{$PRE_DOCKER_ID} has been stopped"
fi

echo "Deploy Project...."
