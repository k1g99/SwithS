#!/bin/bash

# check if the java is running
if [ -z "$(pgrep java)" ]; then
    echo "Java is not running"
else
    echo "Java is running"
    JAVAPID=$(pgrep java | awk '{print $1}')
    kill -9 $JAVAPID
    echo "Java process has been killed"
    sleep 10 # wait for 10 seconds
fi

# deploy new java package
nohup java -jar swiths_api-0.0.1-SNAPSHOT.jar > output.log 2>&1 &
