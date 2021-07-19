import React from 'react';
import VideoListItem from './vedio_list_item';

const VedioList=(props)=>{
  const videoItems= props.vedios.map((video)=>{
       return(
         <VideoListItem 
        onVideoSelect={props.onVideoSelect}
         key={video.etag} video={video}/>
       )
   })


return(
     <ul className="col-md-4 list-group">
         {videoItems}
     </ul>
)
}

export default VedioList;