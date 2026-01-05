const { createContext, useState } = require("react");


const AuthContext = createContext();

export const AuthProvider = ({childrens}) =>{
    const [user, setUser] = useState({name : 'Alice', role: 'viewer'})

    const login =(role)=>{setUser({name: 'bob', role})}
    const logout = ()=> setUser(null);
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {childrens}
        </AuthContext.Provider>
    )
}