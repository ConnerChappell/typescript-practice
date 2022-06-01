import { faqs } from '../data'
import { AccordionItem } from './AccordionItem'

export const Accordion = () => {

  return (
    <ul className='accordion'>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
  )
}
