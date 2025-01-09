import React from 'react';
import { useState, createContext, useEffect} from 'react';
//建立Context,預設狀態是false，const AuthContext = React.createContext({inAuthenticated: false\true});
const defaultContextValue = {
    isAuthenticated: false // isAuthenticated: true=登入狀態, isAuthenticated: false=登出狀態
};
const AuthContext = createContext(defaultContextValue);

//建立Provider
export const AuthProvider = ({ children }) => {
    //  const [isAuthenticated,setInAuthenticated] = React.useState(false);
    const  [isAuthenticated, setInAuthenticated] = useState(
        defaultContextValue.isAuthenticated
    );

     useEffect(() => {
      try {
        const authState = JSON.parse(localStorage.getItem('shopee:auth.state'))
        if (authState && authState.token) {
          setInAuthenticated(true);
        }
      } catch {}
     }, []);

    return (
        <AuthContext.Provider 
          value={{ 
            isAuthenticated,
            login: async (username, password) => {
              console.log(username, password)
              if (username === "test"){//test 登入帳號 //}
                const token = "good_token";
                localStorage.setItem(
                  'shopee:auth.state', 
                  JSON.stringify({ token })
                );
                setInAuthenticated(true);
                return { token };
              }
              setInAuthenticated(false);
              return { token: null ,error: "invalid password" };
            },
            logout: async () => {
              setInAuthenticated(false);
              localStorage.removeItem('shopee:auth.state');
            }
          }}
        >
          {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;