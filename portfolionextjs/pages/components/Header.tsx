import React from 'react'
import {SocialIcon} from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div className='flex flex-row items-center'>
            {/*Social Icons */}
            <SocialIcon url='https://www.youtube.com' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com' fgColor='gray' bgColor='transparent'/>
        </div>
    </header>
  )
}

export default Header