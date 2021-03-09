
import React from 'react';
import {Redirect} from "react-router-dom";



export function withAuthRedirect<WCP> (WSComponent: React.ComponentType<WCP>){
  function RedirectComponent(){
    if (!props.AuthPage){
      return (
          <Redirect to={'/login'}/>
      )
  }
    return <WSComponent {...props}/>
  }
}