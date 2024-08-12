import React from 'react'

const Navbar = () => {
  const navList=["Home" ,"About","Contact"]
  return (
  
    <nav>
      <ul className='flex gap-4'>
        {navList.map((item,index)=>(
          <li className="hover:text-blue-800"
            key={index}>{item}</li>
       
        ))}
        </ul>
    </nav>
  );
};

export default Navbar