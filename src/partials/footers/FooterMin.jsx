import React from 'react'

function FooterMin() {
  return (
    <footer className='p-4'>
        <p className="text-center pt-2">
                <span className='px-1'>AKDA</span> 
                <span className="px-2">&copy; All Rights Reserved</span>
                2020 - {new Date().getFullYear()} 
            </p>
    </footer>
  )
}

export default FooterMin;