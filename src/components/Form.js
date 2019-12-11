import React from 'react';

const Form = (props) => {
    let name = React.createRef();
    let email = React.createRef();
    let role = React.createRef();

    console.log(`${name} ${email} ${role}`);

    function handleClick(){
        props.setMemberList([...props.memberList, {
            name: name.current.value,
            email: email.current.value,
            role: role.current.value 
        }]);
        console.log(`${name.current.value} ${email} ${role}`);
    }

    return (
        <div>
            Name: <input 
                type="text"
                ref={name}
            />
            Email: <input 
                type="text"
                ref={email}
            />
            Role: <input 
                type="text"
                ref={role}
            />
            <input 
                type="button"
                value="submit"
                onClick={handleClick}
            />
        </div>
    );
};

export default Form;