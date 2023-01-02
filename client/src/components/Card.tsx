import React, {  useState } from 'react'

interface CardProps {
    title : string , 
    id : string 
}
const Card = ({title ,id } : CardProps) => {
    return <div>
        <header> {title}</header>
    </div>
}

export default Card