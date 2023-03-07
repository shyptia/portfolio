import { contact } from '../../portfolio';
import './Contact.css';

export const Contact = () => {
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>
        Contact
      </h2>
      
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}
