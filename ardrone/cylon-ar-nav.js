"use strict"
var Cylon = require('cylon');

Cylon.robot({
    connection: {
        name: 'ardrone',
        adaptor: 'ardrone',
        port: '192.168.1.1'
    },
    devices: [
        {
        name: 'drone',
        driver: 'ardrone'
        },
        {
            name: 'nav',
            driver: 'ardroneNav'
        },
    ],

    work: function(my) {


        my.drone.config('general:navdata_demo', 'TRUE');

        my.nav.on('update', function(data) {
            console.log('update');
            console.log(data);
        });

        my.nav.on('takeoff', function(data) {
            console.log('takeoff');
            console.log(data);
        });

        my.nav.on('hovering', function(data) {
            console.log('hovering');
            console.log(data);
        });
        my.nav.on('lowBattery', function(data) {
            console.log('low battery');
            console.log(data);
        });
        my.nav.on('batteryChange', function(data) {
            console.log('battery change');
            console.log(data);
        });

        my.drone.takeoff();

        after((20).seconds(), function() {
            my.drone.land();
        });

        after((25).seconds(), function() {
            my.drone.stop();
        });
    }
}).start();
