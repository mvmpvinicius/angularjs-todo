<?php

	// error_reporting(0);

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	spl_autoload_register(function ($class_name) {
		$filename = 'ws/classes/' . strtolower($class_name) . '.php';
		if (file_exists($filename)) {
			require_once $filename;
		}
	});

?>