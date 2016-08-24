#!/bin/sh

OPTIONS="-avzC --exclude-from exclude.txt"
TRANSPORT='ssh -p 22'
CONNECTION='amaurs@linode'
REMOTE_PATH='/home/amaurs/www/sites/sancheztalanquer.com'

rsync $OPTIONS -e "$TRANSPORT" . $CONNECTION:$REMOTE_PATH