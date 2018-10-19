<?php

//is the site in production
$production    = false;
//if not in production, what is the version for css and js
$version        = '1.0.1';

//SERVER & MAINTENANCE settings
$https          = true;
$maintenance  = [
                'status' => false,
                'file'   => 'maintenance.php'
                ];

//enable scripts
$gsap           = false;
$sweetalert     = true;
$hammer         = false;
$moment         = false;
$localforage    = true;

//google stuff
$googleAnalytics = "";
$gmailUser       = "user@gmail.com";
$gmailPass       = "passW0rd";

//global loader
$globalLoader   = false;

// functions
require('functions.php');
?>