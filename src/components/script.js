import React from 'react';
console.log("javascript openning!!")

//Class And Interface
class User_info{

  constructor(name){
    this.username = name;
  }

  getName()
  {
    console.log('Name is ' + this.username);
  }
}

class Server_info{
  constructor(name, type){
    this.servername = name;
    this.servertype = type;
  }

  getName()
  {
    console.log('Server Name is ' + this.servername);
    console.log('Type is ' + this.servertype);
  }

}

//Callback
function call_back_function_ex1(someting_parma)
{
  console.log("call this callback function!!");
  console.log("what can I do!!");
  someting_parma.name = `The greate ${someting_parma.name}`; 
  console.log(someting_parma);
}

function getSomeoneInfo (his_info_parma, call_back_function_ex1){
  call_back_function_ex1(his_info_parma);
  return;
};

const his_info_parma = { name:"tomas" , age:"23"}

console.log("-------------- This is a CallBack Test ---------------------")
getSomeoneInfo(his_info_parma,call_back_function_ex1);



function Script(){
  const user_info = new User_info(`Tom`);
  const server_info = new Server_info(`Test Server`, 'php');
  
  console.log("-------------- This is a Class Test ---------------------");
  user_info.getName();
  server_info.getName();
  

return (
  <div className="App">
   
  </div>
);
}
export default Script;