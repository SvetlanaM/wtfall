<?php

if ($_POST)
{
  $to       = "hello@wtfall.com";
  $subject  = 'New client';

  $error    = array();
  
  $name     = isset($_POST["name"]) ? $_POST["name"] : '';
  $email    = isset($_POST["email"]) ? $_POST["email"] : '';
  $movie    = isset($_POST["movie"]) ? $_POST["movie"] : '';
  $message  = isset($_POST["message"]) ? $_POST["message"] : '';
  
  if ( strlen($name) < 4 )
    $error['name'] = '1';
  
  if ( !$email || !filter_var($email, FILTER_VALIDATE_EMAIL) )
    $error['email'] = '1';
  
  if ( !$movie )
    $error['movie'] = '1';
  
  if ( strlen($message) < 5 )
    $error['message'] = '1';
  
  if ( count($error) == 0 )
  {
    $headers = "From: ".$email."\r\n";
  	$headers .= "Reply-To: ".$email."\r\n";
  	$headers .= "MIME-Version: 1.0\r\n";
  	$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    $sentMail = @mail($to, $subject, $message . ' - ' . $name, $headers);
    
    if ($sentMail)
    {
  		$response = array ('success' => 1);
  		echo json_encode($response);
  		exit;
  	}
    else
    {
  		$error['sending'] = '1';
  	}
  }
  
  $response = array ('success' => 0, 'error' => $error);
  echo json_encode($response);
  exit;
}
