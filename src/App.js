import React, { useState } from 'react';
import Form from './components/Form';

const App = () => {
  const [MembersList, setMembersList] = useState([{
    name: 'Ben',
    email: 'Ben@gmail.com',
    role: 'Front-End'
  }]);
  //comment for mistake
  console.log(MembersList);

  function displayMembersList(){
    return ( MembersList.map(e => 
      <div> 
        <h1> Name: {e.name} </h1>
        <h2> Email: {e.email} </h2>
        <h3> Role: {e.role} </h3>  
      </div> 
    )) 
  }

  return (
    <div>
      {displayMembersList()}
      <Form setMemberList={setMembersList.bind(this)} memberList={MembersList} />
    </div>
  );
};

export default App;