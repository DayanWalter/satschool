import React from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { mdiArrowRight } from "@mdi/js";

export default function Products() {
  return (
    <div className='w-full flex flex-col'>
      <div className='border'>
        <div className='flex items-center gap-5 mb-5'>
          <div className='bg-primary rounded h-10 w-5'></div>
          <p className='text-primary font-semibold '>Our Products</p>
        </div>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-semibold'>Explore our Products</h1>
          <div className='flex gap-2'>
            <div className=' flex justify-center items-center rounded-full bg-gray-200 w-12 h-12'>
              <Icon path={mdiArrowLeft} size={1.5} />
            </div>
            <div className='flex justify-center items-center rounded-full bg-gray-200 w-12 h-12'>
              <Icon path={mdiArrowRight} size={1.5} />
            </div>
          </div>
        </div>
      </div>

      <div className='border'>grid with products</div>
    </div>
  );
}
