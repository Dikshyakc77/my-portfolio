import React from 'react'
import { FaGithubAlt } from "react-icons/fa6";
import { SiGithubsponsors } from "react-icons/si";
const Button = (props) => {
  return (
  <button 
  className={`text-white rounded-lg flex items-center justify-center padding-0 ${props.style=== "blue"  ? " bg-blue-600" : "bg-orange-600 "}`}
  >
    {props.icon=="contact me" ? (
      <FaGithubAlt />

    ): (
      <SiGithubsponsors />
    )}
    {props.title}
  </button>
  )
}


export default Button