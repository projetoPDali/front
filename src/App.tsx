import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./Navigation";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from "./Context/AuthContext";


function App() {
  return (
    <AuthProvider>
    <GoogleOAuthProvider clientId="855348940218-94nhsq0kem91h5q044f7rqpfsplke42t.apps.googleusercontent.com">
    <AppRouter/>
    </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
