// 1 Answer
import React from 'react'
interface EmployeeProps {
    name: string;
    age: number;
    country: string;
  }
  
const  Main=({name, age, country}: EmployeeProps) =>{
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{country}</h2>
    </div>
  )
}


export default Main;