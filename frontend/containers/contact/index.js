import ContactForm from '@/components/contactPage/contactForm'
import ContactInfo from '@/components/contactPage/contactInfo'

function ContactContainer() {
  return (
    <div>
        <div className='container flex py-10'>
            <div className='w-8/12 bg-slate-500 px-10'>
                <h1 className='text-3xl font-medium pb-8'>Get Intouch</h1>
                <ContactForm />
            </div>
            <div className='w-4/12 bg-orange-800 px-10'>
                <ContactInfo />
            </div>
        </div>
    </div>
  )
}

export default ContactContainer