import { MediaDetailsDto } from '@/ApiAccess/Media/dtos/mediaDetials.model';
import { Swiper, SwiperSlide } from 'swiper/react';
import MediaCard from './mediaCard.component';
import { Pagination } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import AritstCard from './artistCard.component';

export default function SwiperContainer({media} :{media:MediaDetailsDto[]}){
    return(
        <Swiper
        slidesPerView={'auto'}
        // slidesPerView={5}
        modules={[Scrollbar]}
        spaceBetween={20}
        slidesPerGroup={1}
        scrollbar={{ draggable: true }}
        >
        {media.map((el,idx)=>(
         <SwiperSlide  key={idx} className='mr-1' style={{width:'120px'}}>
            <div className='mb-4'>
                <AritstCard media={el}/>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    )
}