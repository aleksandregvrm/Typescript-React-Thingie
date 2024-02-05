import { ReactNode } from "react";

interface ListProps<T>{
    items:T[],
    render:(item:T) => ReactNode
}

const List = <T,>({items,render}:ListProps<T>) => {
  return (
    <ul>
        {items.map((item,index)=>{
            return <li>{render(item)}</li>
        })}
    </ul>
  )
}

export default List