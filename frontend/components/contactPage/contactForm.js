import React from 'react'

function ContactForm() {
    return (
        <form action="">
            <div className='grid grid-cols-2 gap-8 justify-between mb-8'>
                <input type="text" />
                <input type="text" />
            </div>
                <input type="text" className='border w-full' />
                <textarea name="" id="" cols="30" rows="10" className='w-full mt-8'></textarea>

                <button className='border bg-blue-500 px-5 py-3 text-white'>Send your message</button>
        </form>
    )
}

export default ContactForm