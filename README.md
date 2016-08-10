# rpi-relay

[![Build Status](http://armbuilder.grechka.family:8081/api/badges/SmartHouseRpi/rpi-relay/status.svg)](http://armbuilder.grechka.family:8081/SmartHouseRpi/rpi-relay)

Docker image for RaspberryPI (ARMv7) containing REST Web service capable of switching 220V relay

![image of the relay](http://SmartHouseRpi.github.io/rpi-relay/relay.jpg)

###Hot to use

docker run -p **80**:80 --device=**/dev/ttyUSB0**:/dev/ttyUSB0 -d smarthouserpi/rpi-relay:latest

The image operates with /dev/ttyUSB0, thus map corresponding relay device to the /dev/ttyUSB0
Modify listening port if nessesary

###How it works

Simple web app based on NodeJS express module calls **echo -e '\x55\x01\x01\x02\x00\x00\x00\x59' > /dev/ttyUSB0** to open the relay
and **echo -e '\x55\x01\x01\x01\x00\x00\x00\x58' > /dev/ttyUSB0** to close the relay for corresponding HTTP requests

###API

API exposed on port 80

Getting HTTP "PUT /" opens the relay (switches on main)

Getting HTTP "DELETE /" closes the realy (switces off main)

Getting HTTP "GET /" returns HTML page with two buttons, one for performing "PUT /" with the browser, another for performing "DELETE /" with the browser

###Releases

Docker hub: https://hub.docker.com/r/smarthouserpi/rpi-relay/
