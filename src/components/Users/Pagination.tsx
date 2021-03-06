import React from "react"
import { MapPropsType } from "./UsersContainer"


type MapDispatchType = {
  getUsersThunkCreator: (item: number, pageSize: number) => void,
  UnfollowThunkCreator: (id: number) => void,
  followThunkCreator: (id: number) => void,
  onChangedPage:(id: number)=> void
}

const Pagination: React.FC<MapPropsType & MapDispatchType> = (props)=>{
  const [countPage, setCountPage] = React.useState<number>(1)
  const countPageUsers:number = Math.ceil(props.totalCountUsers / props.pageSize)
  let leftPortionPageNumber:number = (countPage - 1) * props.pageSize + 1
  let rightPortionNumber:number = countPage * props.pageSize
  const page:Array<number> = []
  for (let i = 1; i <= countPageUsers; i++) {
    page.push(i)
  }
  return (
    <div className="pagination__container">
    <button disabled={countPage < 2} onClick={() =>
    {setCountPage(countPage - 1)
      props.onChangedPage(leftPortionPageNumber - 1)      
    }
    }
     className="list__button">Обратно</button>
     {page
       .filter((p) => p >= leftPortionPageNumber && p <= rightPortionNumber)
       .map((item:number) => {
         return (
           <button
             key={item}
             className={
               item === props.CurrentPage
                 ? `currentCountPage active`
                 : `currentCountPage`
             }
             onClick={() => {
               props.onChangedPage(item)               
             }}
           >
             {item}
           </button>
         )
       })}
     <button 
     onClick={() => {
       setCountPage(countPage + 1)
       props.onChangedPage(rightPortionNumber + 1)       
     }
     }
     className="list__button">Вперед</button>
   </div>
  )
}
export default Pagination