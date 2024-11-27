import React from 'react'
import Logo from '../../assets/nutri_logo.webp'

const Menu=[
  {
    id:1,
    name:"About",
    link:"/about",
  },
  {
    id:2,
    name:"Products",
    link:"/products",
  },
  {
    id:3,
    name:"Blogs",
    link:"/blogs",
  },
  {
    id:4,
    name:"Contact Us",
    link:"/contact",
  },
];

const Navbar = () => {
  return (
    
    <div className='bg-white py-3'>
        {/* Top Navbar */}

        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" target='_self'>
              <img src={Logo} alt="Nutridry_Logo" title='Nutridry_Logo' className='w-20'/>
            </a>
          </div>

          {/* Nav Items */}
          <div>
            <ul className='flex gap-4'>
              {
                Menu.map((data)=>(
                  <li key={data.id}>
                  <a href={data.link} className='inline-block px-3 hover:text-primary'>{data.name}</a>
                </li>
              ))  
              }
              
            </ul>
          </div>

          {/* phone Number */}
          <div className='text-primary font-medium'>
              Phone number
          </div>
        </div>
      </div>
    
  )
}

export default Navbar