import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

export interface User {
  mail: string;
  name: string;
  id: number;
  alias: string;
  phone?: string;
  rents?:any
  addresses?:any
}

interface AuthContextType {
  user: User | null; // Change this line to accept null
  login: (userData: User | null) => void; // Change this line to accept null
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // On component mount, check if there is a user in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User | null) => {
    setUser(userData);
    if (userData) {
      const userString = JSON.stringify(userData);
      localStorage.setItem("user", userString);
    } else {
      localStorage.removeItem("user");
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const contextValue: AuthContextType = { user, login, logout };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};