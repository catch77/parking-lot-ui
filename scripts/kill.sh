nodepid=`lsof -i tcp:5000 | grep node | grep -v grep |awk '{print $2}'`
if [ -n "$nodepid" ]
then
kill -9 $nodepid
fi

