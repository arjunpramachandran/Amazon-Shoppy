import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './app/router'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import store from './Redux/store';



const App = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </Provider>
  )
}

export default App