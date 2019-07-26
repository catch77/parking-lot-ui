yarn run build

./node_modules/serve/bin/serve.js -c 0 -s build &
sleep 1
echo $! > .pidfile
