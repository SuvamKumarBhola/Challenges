
const withAuth = (WrappedComponent, allowedRoles)=>{
    return (props) =>{
        const {user} = useAuth();

        if(!user){
            return <div style={{color:'red'}}>Access denied: Please login again</div>
        }
        if(allowedRoles && !allowedRoles.includes(user.role)){
            return(
                <div style={{border:'2px solid red', padding:'20px'}}>
                    <h3>UnAuthorized Access</h3>
                    <p>You Are a <strong>{user.role}</strong></p>
                    <p>This page Requires: <strong>{allowedRoles.join(' or ')}</strong></p>
                </div>
            );
        }
        return <WrappedComponent{...props}/>
    }
}