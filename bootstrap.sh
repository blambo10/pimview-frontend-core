#! /bin/sh
touch .env

if [ $# -ne 0 ]; then
  echo "===> Overriding env params with args ..."
  for var in "$@"
  do
    export "$var"
  done
else
  echo "no args found"
fi

if env | grep "REACT_APP" > .env ; then
  echo "react .env set"
else
  echo "unable to set .env"
fi

# if [ $NODE_ENV -eq "production" ]; then
#   yarn build
# else
#   yarn start
# fi