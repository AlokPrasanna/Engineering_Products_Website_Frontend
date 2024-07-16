// -------------------- Imports --------------------
import React from 'react'
import { 
  Footer, 
  ImageSlider 
} from '../../components/molecules';
import { Images } from '../../constant';

const ProductView:React.FC = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>
        {/* ProductView */}
        <section className='mb-[100px] flex flex-col items-center justify-center p-8'>
           <div className='flex items-center justify-center'>
                <h1 className='py-4 lg:text-5xl lg:px-5 mt-[4%] text-medium lg:font-light font-bold'>N5186A MXG Vector Signal Generator</h1>
           </div>
           <div className='flex items-center xl:flex-row flex-col justify-between 2xl:w-[60%] xl:[80%] w-full gap-5'>
              <ImageSlider 
                data={[
                  {src:Images.device1 , alt:"device1"},
                  {src:Images.device2 , alt:"device1"},
                  {src:Images.device4 , alt:"device1"},
                  {src:Images.device1 , alt:"device1"},
                ]}
              />
              <div className='w-full px-4'>
               <p className='break-words lg:text-[17px] text-[12px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit id quas sint dolor dolore sed molestias 
                atque, natus quidem vero quisquam quaerat consequuntur beatae quis voluptatem aut corporis praesentium culpa, 
                vel non earum illo reiciendis velit. Aliquam placeat quo fugit autem neque, aperiam accusantium 
                eaque modi vel sapiente quas non officia consectetur ducimus optio in quam odio quia tenetur
               </p>
               <button
                className='px-5 py-3 mt-4 border-[3px] w-full transition-colors duration-300 border-red-600 lg:text-lg text-[13px] font-semibold hover:bg-red-500 hover:border-red-500 hover:text-slate-50 ' 
               >
                Download Catalog &nbsp;&nbsp;{"\u21E9"}
              </button>
              </div>
           </div>
        </section>
        {/* Footer */}
        <section className='w-full'>
            <Footer />
        </section>
    </div>
  )
}

export default ProductView