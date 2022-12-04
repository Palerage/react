import {FaPhoneAlt, FaAddressBook} from 'react-icons/fa'; 

export const Footer = () => {
  return (
    <footer className='footer'>

        <ul className='contact'>
            <li> <FaPhoneAlt/>
                <a href="tel:+4733378901">                
                CALL US</a>
            </li>

            <li> <FaAddressBook/>
                <a href = "mailto: abc@example.com">                
                EMAIL US</a>
            </li>
        </ul>

        <ul className='address'>
            <li>Random CatInfo</li>
            <li>KattspinnarGatan 10</li>
            <li>595 55 Purr</li>
        </ul>
        
    </footer>
  )
}
