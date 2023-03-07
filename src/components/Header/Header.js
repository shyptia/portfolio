/* eslint-disable jsx-a11y/anchor-is-valid */
import { header } from '../../portfolio';
import { Navbar } from '../Navbar/Navbar';
import './Header.css';

export const Header = () => {
  const { homepage, title } = header;

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a
            href="#"
            className='link'
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      
      <Navbar />
    </header>
  )
}
