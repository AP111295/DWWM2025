const user = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Message', type: 'textarea', name: 'message' }
    ];

const userInfo = `Name: ${user.firstName}, Email: ${user.email}, Message: ${user.message}`;
console.log(userInfo); 