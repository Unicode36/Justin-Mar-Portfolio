import React, {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!form.name || !form.email || !form.message) {
      setFormError(true)
      return
    }
    setLoading(true)

    emailjs.send(
      'service_qj8gda2',
     'template_y0vbdqr', 
      {
        from_name: form.name,
        to_name: 'Justin',
        from_email: form.email,
        to_email: 'justinzipher0805@gmail.com',
        message: form.message+",\n\nSent by "+form.email+"\n"+form.name
      },
      'pizLv6fhE63YE5xD_'
    )
    .then((result) => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.');
      setFormError(false)
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong. Please try again later.');
    });    
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left","tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input 
                type='text' 
                name='name' 
                value={form.name}
                placeholder="What's your name?" 
                onChange={handleChange}
                className={`bg-tertiary py-4 px-6 rounded-xl placeholder:text-secondary text-white font-medium 
                ${formError && !form.name && 'border-2 border-red-500'}`}
              />
              {formError && !form.name && <p className="text-red-500">Please fill in your name</p>}
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input 
                type='email' 
                name='email' 
                value={form.email}
                placeholder="What's your email?" 
                onChange={handleChange}
                className={`bg-tertiary py-4 px-6 rounded-xl placeholder:text-secondary text-white font-medium ${formError && !form.email && 'border-2 border-red-500'}`}
              />
              {(!form.email && formError) && <p className="text-red-500 text-sm">Please enter your email</p>}
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea 
                rows="7" 
                name='message' 
                value={form.message}
                placeholder="What do you want to say?" 
                onChange={handleChange}
                className={`bg-tertiary py-4 px-6 rounded-xl placeholder:text-secondary text-white font-medium ${formError && !form.message && 'border-2 border-red-500'}`}
              />
              {(!form.message && formError) && <p className="text-red-500 text-sm">Please enter your message</p>}
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outlined-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
              >
                {loading ? 'sending...' : 'send'}
              </button>
          </form>
      </motion.div>
      <motion.div variants={slideIn("right","tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")