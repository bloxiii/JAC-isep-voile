import React from 'react';
import './page2.css';


export default function ComponentA() {
  const openPage1 = () => {
      window.location.href = '/page1';
    };
  
    const openPage2 = () => {
      window.location.href = '/task';
    };
  
    const openPage3 = () => {
        window.location.href = '/prospects';
    };
  
    const openPage4 = () => {
        window.location.href = '/profil';
    };

    return (
      <div  className='principal'>
      <div className='flex1'>
          <div className='flex w-[calc(695*var(--rpx))] gap-[calc(25*var(--rpx))] items-center self-stretch shrink-0 flex-nowrap relative z-[106]'>
            </div>
            
    
          </div>
          <div className='w-[calc(1668*var(--rpx))] h-[calc(832*var(--rpx))] absolute top-0 left-0 z-[116]'>
            <div className='flex w-[calc(75*var(--rpx))] h-[calc(282*var(--rpx))] pt-[calc(15*var(--rpx))] pr-[calc(15*var(--rpx))] pb-[calc(15*var(--rpx))] pl-[calc(15*var(--rpx))] flex-col gap-[calc(15*var(--rpx))] items-center flex-nowrap absolute top-0 left-0 overflow-hidden z-[97]'>
            <button onClick={() => openPage1()}>
  <div className='Page111'>
    <div className='Page12'></div>
  </div>
</button>
          <div className='Page13'>
          <button onClick={() => {openPage2()}}>
            <div className='Page21' />
          </button>
          <button onClick={() => {openPage3()}}>
            <div className='Page22' />
            </button>
            <button onClick={() => {openPage4()}}>
            <div className='Page23' />
            </button>
              </div>
              <div className='w-[calc(5*var(--rpx))] h-[calc(45*var(--rpx))] shrink-0 bg-[#272266] rounded-tl-none rounded-tr-[calc(5*var(--rpx))] rounded-br-[calc(5*var(--rpx))] rounded-bl-none absolute top-[calc(156*var(--rpx))] left-0 z-[104]' />
            </div>

            <div className='fond1'>
            </div>
          </div>
        </div>
      );
}

