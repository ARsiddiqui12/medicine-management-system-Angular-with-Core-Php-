<?php


class Config
{
	
	public function connection()
	{

	try{

	// create a PDO connection with the configuration data
	
	$conn = new PDO("mysql:host=localhost;dbname=newtest","root", "");
 
	return $conn;

	}catch (PDOException $e){

	// report error message

	echo $e->getMessage();

	}

	}

}














?>