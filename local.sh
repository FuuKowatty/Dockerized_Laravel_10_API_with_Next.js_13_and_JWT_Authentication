function _up() {
  docker-compose --env-file ./src/server/.env up -d
}

function _stop() {
  docker-compose --env-file ./src/server/.env stop
}

function _rebuild() {
  docker-compose --env-file ./src/server/.env up -d --build --force-recreate --remove-orphans
}

function _ssh() {
  docker-compose --env-file ./src/server/.env exec app bash
}

case $1 in
"start") _up ;;
"stop") _stop ;;
"rebuild") _rebuild ;;
"ssh") _ssh ;;
esac
