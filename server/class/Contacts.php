<?php

class Contacts extends config
{
	
	public function create($data)
	{

		$con = $this->connection();

		$sess_data = json_decode($data->session);

		$status = 1;

		$sql = "INSERT INTO contacts(user_id,name,designation,email,phone,mobile,address,status) VALUES(:user_id,:name,:designation,:email,:phone,:mobile,:address,:status)";

		$cmd = $con->prepare($sql);

		$cmd->bindParam(':user_id',$sess_data->user_id);

		$cmd->bindParam(':name',$data->cname);

		$cmd->bindParam(':designation',$data->designation);

		$cmd->bindParam(':designation',$data->designation);

		$cmd->bindParam(':email',$data->email);

		$cmd->bindParam(':phone',$data->phonenumber);

		$cmd->bindParam(':mobile',$data->mobilenumber);

		$cmd->bindParam(':address',$data->address);

		$cmd->bindParam(':status',$status);

		$cmd->execute();

		header("HTTP/1.1 200 OK");

  		header('content-type:application/json');

  		echo json_encode(['resp'=>'success','code'=>200]);


	}
	
}


















?>