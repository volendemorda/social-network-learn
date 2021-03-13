import React from 'react';
import {Redirect} from "react-router-dom";



type PropsType = {
  AuthPage: boolean
}

export function withAuthRedirect<WCP> (WSComponent: React.ComponentType<WCP>){
  return function RedirectComponent(props: WCP & PropsType){
    if (!props.AuthPage){
      return (
          <Redirect to={'/login'}/>
      )
  }
    return <WSComponent {...props}/>
  }
}
