import React from 'react'
import{ Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'


const Testimonials = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper modules ={[Pagination]}
      spaceBetween={30}
      slidesPerView = {1}
      pagination = {{clickable: true}}
      breakpoints={{
          640:{
            spaceBetween:0,
            slidesPerView:1,   
          },
          768:{
            spaceBetween:20,
            slidesPerView:2,   
          },
          1024:{
            spaceBetween:30,
            slidesPerView:3,   
          },
      }} >
          <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                  <div className="flex itms-center gap-[13px]">
                      <img src={patientAvatar} alt="" />
                      <div>
                          <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                              Dr. Ravindra Mehta
                          </h4>
                          <div className="flex items-center gap-[2px]">
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                          </div>
                      </div>
                  </div>
                  <p className="text-[13px] leading-7 mt-4 text-textColor font-[400]">
                      "I have taken medical services from them. They treat so well and they provide the nest medical services."
                  </p>
              </div>
          </SwiperSlide>

          <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                  <div className="flex itms-center gap-[13px]">
                      <img src={patientAvatar} alt="" />
                      <div>
                          <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                              Dr. Ravindra Mehta
                          </h4>
                          <div className="flex items-center gap-[2px]">
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                          </div>
                      </div>
                  </div>
                  <p className="text-[13px] leading-7 mt-4 text-textColor font-[400]">
                      "I have taken medical services from them. They treat so well and they provide the nest medical services."
                  </p>
              </div>
          </SwiperSlide>

          <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                  <div className="flex itms-center gap-[13px]">
                      <img src={patientAvatar} alt="" />
                      <div>
                          <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                              Dr. Ravindra Mehta
                          </h4>
                          <div className="flex items-center gap-[2px]">
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                          </div>
                      </div>
                  </div>
                  <p className="text-[13px] leading-7 mt-4 text-textColor font-[400]">
                      "I have taken medical services from them. They treat so well and they provide the nest medical services."
                  </p>
              </div>
          </SwiperSlide>

          <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                  <div className="flex itms-center gap-[13px]">
                      <img src={patientAvatar} alt="" />
                      <div>
                          <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                              Dr. Ravindra Mehta
                          </h4>
                          <div className="flex items-center gap-[2px]">
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                          </div>
                      </div>
                  </div>
                  <p className="text-[13px] leading-7 mt-4 text-textColor font-[400]">
                      "I have taken medical services from them. They treat so well and they provide the nest medical services."
                  </p>
              </div>
          </SwiperSlide>

          <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                  <div className="flex itms-center gap-[13px]">
                      <img src={patientAvatar} alt="" />
                      <div>
                          <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                              Dr. Ravindra Mehta
                          </h4>
                          <div className="flex items-center gap-[2px]">
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                              <HiStar className="text-yellowColor w-18px]" />
                          </div>
                      </div>
                  </div>
                  <p className="text-[13px] leading-7 mt-4 text-textColor font-[400]">
                      "I have taken medical services from them. They treat so well and they provide the nest medical services."
                  </p>
              </div>
          </SwiperSlide>

          
      </Swiper>
    </div>
  )
}

export default Testimonials
