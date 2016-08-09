# rpi-relay

[![Build Status](http://armbuilder.grechka.family:8081/api/badges/SmartHouseRpi/rpi-relay/status.svg)](http://armbuilder.grechka.family:8081/SmartHouseRpi/rpi-relay)

Docker image for RaspberryPI (ARMv7) containing REST Web service capable of switching 220V relay

(NOT WORKING YET! DON'T TRY IT NOW)

![image of the relay](http://github.io/SmartHouseRpi/rpi-relay/relay.jpg)

Getting HTTP "PUT /" opens the relay (switches on main)

Getting HTTP "DELETE /" closes the realy (switces off main)

Getting HTTP "GET /" returns HTML page with two buttons, one for performing "PUT /" with the browser, another for performing "DELETE /" with the browser

Docker hub: https://hub.docker.com/r/smarthouserpi/rpi-relay/
