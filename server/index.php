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

		public function add_contact($data)
		{

			$contact = new Contacts();

			$contact->create($data);

		}

		public function view_contact()
		{

			$contact = new Contacts();

			$contact->view();

		}

		public function edit_contact($data)
		{

			$contact = new Contacts();

			$contact->edit($data);

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

				case 'addcontact':
					$this->add_contact($data);
					break;

				case 'contactlist':
					$this->view_contact();
					break;

				case 'retrievedata':
					$this->edit_contact($data);
					break;
				
			}


		}

		
	}


	$index = new index();

	$index->process($request);

	

?>