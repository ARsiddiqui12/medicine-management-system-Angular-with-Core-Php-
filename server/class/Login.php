<?php


class Login extends Config
{
	
	public function check_login($data)
	{

		if(!empty($data->username) && !empty($data->password))
  		{
  			$status = 1;

  			$password = sha1($data->password);

  			$con = $this->connection();

  			$sql = "SELECT * FROM users WHERE username=:username AND password=:password AND status=:status LIMIT 1";

  			$cmd = $con->prepare($sql);

  			$cmd->bindParam(':username',$data->username);

  			$cmd->bindParam(':password',$password);

  			$cmd->bindParam(':status',$status);

  			$cmd->execute();

  			if($cmd->rowCount() > 0)
  			{

  			$fetch_data = $cmd->fetch(PDO::FETCH_ASSOC);

        $sess_data = [

  				'user_id'=>$fetch_data['id'],
  				'username'=>$fetch_data['username'],
  				'is_logged_in'=>true

  			];	

  			header('HTTP/1.1 200 OK');

  			header('content-type:application/json');

  			echo json_encode(['data'=>$sess_data,'resp'=>'success','code'=>200]);


  			}else{

  			header('HTTP/1.1 400 NOT FOUND.');

  			}

  			

  		}else
  		{

  			header('HTTP/1.1 400 NOT FOUND.');

  		}

	}
	
}


















?>