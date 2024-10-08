import {motion} from 'framer-motion'

import { styles } from "../styles";
import { fadeIn,textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { testimonials } from '../constants';

const FeedbackCard =({index, testimonial, name, designation, company, image, linkedin_link})=>(
  <motion.div
      variants={fadeIn("","spring", index * 0.5,0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
      <p className='text-white font-black text-[48px]'>"</p>
        <div className='mt-1'>

        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>

          <div className='flex-1 flex flex-col cursor-pointer'
                           onClick={()=>window.open(linkedin_link,"_blank")} >
            <p className='text-white font-medium text-[16px] '
                
              
              >
              <span className='blue-text-gradient'>@</span> {name}

            </p>
            
            <p className='mt-1 text-secondary text-[12px]'>{designation} at {company}</p>

          </div>
          <img 
           src={image}
          alt={`feedback-by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          ></img>
        </div>
        </div>

  </motion.div>


)


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}> Embracing the journey</p>
          <h2 className={styles.sectionHeadText}> Key Collaborations</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-1`}>
        {testimonials.map((testimonial,index)=>(
        
        <FeedbackCard
          key ={testimonial.name}
          index= {index}
          {...testimonial}>
        </FeedbackCard>
        
        ))}

      </div>
      
      </div>
  )
}

export default SectionWrapper(Feedbacks,"") 

/*
const FeedbackCard =({index, testimonial,trophyHeading, name, designation, company, image})=>(
  <motion.div
      variants={fadeIn("","spring", index * 0.5,0.75)}
      className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full'
  >
      <p className='text-white font-black text-[40px]'>{trophyHeading}</p>
        <div className='mt-1'>
       
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>

          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}

            </p>
            <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>

          </div>
          <img 
        //   src={image}
        //  alt={`feedback-by-${name}`}
         //   className='w-10 h-10 rounded-full object-cover'
          ></img>
        </div>
        </div>

  </motion.div>


)



const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}> Celebrating Every Win, Big and Small</p>
          <h2 className={styles.sectionHeadText}> Trophy Cabinet.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-1`}>
        {testimonials.map((testimonial,index)=>(
        
        <FeedbackCard
          key ={testimonial.name}
          index= {index}
          {...testimonial}>
        </FeedbackCard>
        
        ))}

      </div>
      
      </div>
  )
}

export default SectionWrapper(Feedbacks,"")

*/

// Use below code for Testimonials.
/*
const FeedbackCard =({index, testimonial, name, designation, company, image})=>(
  <motion.div
      variants={fadeIn("","spring", index * 0.5,0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
      <p className='text-white font-black text-[48px]'>"</p>
        <div className='mt-1'>

        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>

          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}

            </p>
            <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>

          </div>
          <img 
           src={image}
          alt={`feedback-by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          ></img>
        </div>
        </div>

  </motion.div>


)


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}> Celebrating Every Win, Big and Small</p>
          <h2 className={styles.sectionHeadText}> Trophy Cabinet.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-1`}>
        {testimonials.map((testimonial,index)=>(
        
        <FeedbackCard
          key ={testimonial.name}
          index= {index}
          {...testimonial}>
        </FeedbackCard>
        
        ))}

      </div>
      
      </div>
  )
}

export default SectionWrapper(Feedbacks,"") 

*/