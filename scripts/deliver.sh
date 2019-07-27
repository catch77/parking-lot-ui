#!/bin/bash
cp -r dist/* /approot/parking-lot-ui/dist
cd /approot/parking-lot-ui
nodepid=`lsof -i tcp:5000 | grep node | grep -v grep |awk '{print $2}'`
if [ -n "$nodepid" ]
then
kill -9 $nodepid
fi

nohup ./node_modules/serve/bin/serve.js -c 0 -s dist & 
