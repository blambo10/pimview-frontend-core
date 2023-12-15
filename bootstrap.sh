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

sed -i "s/{{DEVICE_URL}}/$REACT_APP_PIMVIEW_DEVICE_URL/g" /usr/share/nginx/html/main.js
sed -i "s/{{DEVICE_URL}}/$REACT_APP_PIMVIEW_DEVICE_URL/g" /usr/share/nginx/html/0.js