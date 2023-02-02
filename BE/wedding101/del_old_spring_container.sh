echo "DOCKER_ID Check..."

PRE_DOCKER_ID=$(docker ps | grep spring-server | awk '{print $1}')

if [ -z $PRE_DOCKER_ID ] ; then
	echo "Docker is not running"
else
	echo "Running DOCKER_PID: {$PRE_DOCKER_ID}"
	docker stop $PRE_DOCKER_ID
	sleep 10
	echo "{$PRE_DOCKER_ID} has been stopped"
	docker system prune -y
fi

echo "Deploy Project...."
