import { useState, useRef } from 'react'; 
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from "../styles";
import { EarthCanvas } from './canvas';
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const Contact = () => {
  const formRef= useRef();
  const [form, setForm] = useState({

    name: '',
    email:'',
    message:'',
  });
const[loading, setLoading]= useState(false);
const handleChange=(e) =>{}
  const handleSubmit=(e)=>{}
  return (
    <div
    className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    
    ><motion.div
      variants={slideIn('left','tween',0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
      <p className={styles.sectionSubText}>Get in Touch </p>
      <h3 className={styles.sectionHeadText}> Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placehlder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              ></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placehlder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              ></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows='7'
              type='text'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Loved the 3D models maybe? or just say Hi!"
              className='bg-tertiary py-4 px-6 placehlder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              ></textarea>
          </label>

        <button
          type='submit'
          className='bg-tertiary py-3  px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
        >
          {loading ? 'Sending...': 'Send'}

        </button>


        </form>

    </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")