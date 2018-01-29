<?php

class Contacts extends config
{
	
	public function create($data)
	{

		$con = $this->connection();

		$sess_data = json_decode($data->session);

		$status = 1;

		if($data->cid==0)
{
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

		$msg = "Data Inserted Successfully..!";

	}else{

		$sql_update = "UPDATE contacts SET name=:name,designation=:designation,email=:email,phone=:phone,mobile=:mobile,address=:address,updated_at=:updated_at,updated_by=:updated_by WHERE id=:cid";

		$cmd = $con->prepare($sql_update);

		$updated_at = date('Y-m-d H:i:s');

		$cmd->bindParam(':cid',$data->cid);

		$cmd->bindParam(':name',$data->cname);

		$cmd->bindParam(':designation',$data->designation);

		$cmd->bindParam(':designation',$data->designation);

		$cmd->bindParam(':email',$data->email);

		$cmd->bindParam(':phone',$data->phonenumber);

		$cmd->bindParam(':mobile',$data->mobilenumber);

		$cmd->bindParam(':address',$data->address);

		$cmd->bindParam(':updated_at',$updated_at);

		$cmd->bindParam(':updated_by',$sess_data->user_id);

		$cmd->execute();

		$msg = "Data Updated Successfully..!";

	}

		header("HTTP/1.1 200 OK");

  		header('content-type:application/json');

  		echo json_encode(['resp'=>$msg,'code'=>200]);


	}

	public function view()
	{


		$con = $this->connection();

		$sql = "SELECT *,(CASE designation WHEN '1' THEN 'MO' WHEN '2' THEN 'FMO' WHEN '3' THEN 'LHS' END) desg FROM contacts WHERE status=1";

		$cmd=$con->prepare($sql);

		$cmd->execute();

		$data = $cmd->fetchAll(PDO::FETCH_ASSOC);

		header("HTTP/1.1 200 OK");

  		header('content-type:application/json');

  		echo json_encode(['resp'=>$data,'code'=>200]);

	}

	public function edit($data)
	{
		$id = $data->id;

		$con = $this->connection();

		$sql = "SELECT * FROM contacts WHERE id='$id' LIMIT 1";

		$cmd = $con->prepare($sql);

		$cmd->execute();

		$data = $cmd->fetch(PDO::FETCH_ASSOC);

		header("HTTP/1.1 200 OK");

		header('content-type:application/json');

		echo json_encode(['resp'=>$data,'code'=>200]);

	}
	
}


















?>