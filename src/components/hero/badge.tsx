import React from 'react'

export default function Badge() {
    return (
        <div className='flex justify-center mb-4'>
            <div className='w-max h-max rounded-full justify-center flex bg-[#ffede2] p-1 border-none items-center'>
                <p className='text-sm px-2  font-[500]  rounded-full text-[#FF6200] bg-white border-[#FF6200] border mr-2'>Falcon Express</p>
                <p className='text-sm font-[600] text-[#FF6200]'>#LeMeilleurEnAlgérie</p>
            </div>
        </div>
    )
}
