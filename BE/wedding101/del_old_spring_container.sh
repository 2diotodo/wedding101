echo "DOCKER_ID Check..."

PRE_DOCKER_ID=$(docker ps | grep service-server | awk '{print $1}')
PRE_DOCKER_IMAGE=$(docker images | grep service-server | awk '{print $3}')

if [ -z $PRE_DOCKER_ID ] ; then
	echo "Docker is not running"
else
	echo "Running DOCKER_PID: {$PRE_DOCKER_ID}"
	echo "Stop this DOCKER_PID..."
	docker stop $PRE_DOCKER_ID
	sleep 10
	echo "Done."
	echo "Do image pruning.."
	docker image prune -y
	echo "Done."
	echo "{$PRE_DOCKER_ID} has been stopped"
fi

echo "Deploy Project...."
