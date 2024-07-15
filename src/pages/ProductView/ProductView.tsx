// -------------------- Imports --------------------
import React from 'react'
import { 
  Footer, 
  ImageSlider 
} from '../../components/molecules';
import { Images } from '../../constant';

const ProductView:React.FC = () => {
  return (
    <div>
        {/* ProductView */}
        <section className='mb-[100px] flex flex-col items-center justify-center'>
           <div className='flex items-center justify-center'>
                <h1 className='py-4 lg:text-5xl lg:px-5 mt-[4%] font-light'>N5186A MXG Vector Signal Generator</h1>
           </div>
           <div>
              <ImageSlider 
                data={[
                  {src:Images.device1 , alt:"device1"},
                  {src:Images.device2 , alt:"device1"},
                  {src:Images.device4 , alt:"device1"},
                  {src:Images.device1 , alt:"device1"},
                ]}
              />
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