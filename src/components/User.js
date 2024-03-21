import React from 'react';

const User = ({user}) => {
    return (
        <div className="user-card">
            <h2 className="user-name">Name: {user}</h2>
            <h3 className="user-location">Location: Lahore</h3>
            <h3 className="user-contact">Contact: 03247733301</h3>
            <p className="user-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi commodi dolores
                eligendi et, ex ipsum itaque laboriosam nam, nisi nostrum odit quaerat ratione recusandae saepe sint
                tempora veritatis voluptates!
            </p>
        </div>
    );
};

export default User;


// class User extends React.Component{
//     render(){
//         return (
//             <div className="user-card">
//                 <h2 className="user-name">Name: Daniyal</h2>
//                 <h3 className="user-location">Location: Lahore</h3>
//                 <h3 className="user-contact">Contact: 03247733301</h3>
//                 <p className="user-description">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi commodi dolores
//                     eligendi et, ex ipsum itaque laboriosam nam, nisi nostrum odit quaerat ratione recusandae saepe sint
//                     tempora veritatis voluptates!
//                 </p>
//             </div>
//         );
//     }
// }
//
// export default User;
