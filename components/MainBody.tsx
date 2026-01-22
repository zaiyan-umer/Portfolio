import React from 'react'

const MainBody = () => {
  return (
    <div className='max-w-[80vw] mx-auto mt-12 grid grid-cols-4'>
        <div className="col-span-3">
            <NavbarTable />
        </div>
        <div className="col-span-1">
            <Profile />
        </div>

    </div>
  )
}

const NavbarTable = () => {
    return (
        <div>Navbar</div>
    )
}

const Profile = () => {
    return (
        <div>Profile</div>
    )
}

export default MainBody