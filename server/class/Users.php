<?php


class Users extends config
{


public function create($data)
{

  if(!empty($data->username) && !empty($data->email) && !empty($data->password))
  {

  $con = $this->connection();

  $sql = "INSERT INTO users (username,email,password,status) VALUES (:username,:email,:password,:status)";

  $cmd = $con->prepare($sql);

  $status = 1;

  $password = sha1($data->password);

  $cmd->bindParam(':username',$data->username);

  $cmd->bindParam(':email',$data->email);

  $cmd->bindParam(':password',$password);

  $cmd->bindParam(':status',$status);

  $cmd->execute();

  header("HTTP/1.1 200 OK");

  header('content-type:application/json');

  echo json_encode(['resp'=>'success','code'=>200]);

  }else{

  header("Status: 400 bad rquest");

  header('content-type:application/json');
  
  echo json_encode(['resp'=>'error','code'=>400]);

  }

}

public function view()
{



}

public function update()
{



}

public function delete()
{



}






}










?>