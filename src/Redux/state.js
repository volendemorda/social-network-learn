import {act} from "@testing-library/react";
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";

const store ={
    _state: {
        MessagePage:{
            user:[
                {name: 'Milohin',id: 1},
                {name: 'fwefwe',id: 2},
                {name: 'fwefwfw',id: 3},
                {name: 'fwefwfw',id: 4}
            ],
            message: [
                {id: 1, message: 'hello my fr'},
                {id: 2, message: 'hello my fr'},
                {id: 3, message: 'hello my fr'},
                {id: 4, message: 'hello my fr'}
            ],
            newMessageText: '',
        },
        PostPage:{
            text:[
                {id:1 ,text: "hello my friend. it's my first post"}
            ],
            image:[
                {id:1,img:"https://w-dog.ru/wallpapers/0/3/454758574794477/iphone-5-yabloko-eppl-ajfon-telefon-gadzhet-chernyj-korobka.jpg"}
            ],
            newPost: ''
        }
    },
    getState(){
      return this._state;
    },
    subscribe(observer){
        this._Callsubscriber = observer
    },
    _Callsubscriber(){
        console.log('state changed')
    },
    dispatch(action){
        this._state.PostPage = postReducer(this._state.PostPage,action)
        this._state.MessagePage =  messageReducer(this._state.MessagePage,action)
        this._Callsubscriber(this._state)
    }
}

export default store


