import withAuth from "./withAuth";

const UserList = ({title}) => {
    return(
        <div>
            <h2>{title}</h2>
            <ul>
                <li>Alice</li>
                <li>Bob</li>
            </ul>
        </div>
    );
};

const AdminSettings = () =>{
    return(
        <div>
            <h2>Nuclear Codes</h2>
            <button>Delete Database</button>
        </div>
    );
};

export const protectedUserList = withAuth(UserList, ['admin']);
export const protectedAdminSettings  = withAuth(AdminSettings, ['admin'])