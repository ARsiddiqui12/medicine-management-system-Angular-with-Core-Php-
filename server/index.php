<?php

header('Access-Control-Allow-Origin: *');  

header('content-type:application/json');

$post_data = file_get_contents("php://input");

$request = json_decode($post_data);

function __autoload($classname) {

    $filename = "class/". $classname .".php";
    
    include_once($filename);
	
	}

	class index 
	{
		
		public function users($data)
		{

			$user =  new users();

			$user->create($data);

		}

		public function login($data)
		{

			$login = new Login();

			$login->check_login($data);

		}

		public function process($data)
		{

			

			switch ($data->component) { //checking component
				
				case 'login':
					$this->login($data);
					break;

				case 'register':
					$this->users($data);
					break;
				
			}


		}

		
	}


	$index = new index();

	$index->process($request);

	

?>