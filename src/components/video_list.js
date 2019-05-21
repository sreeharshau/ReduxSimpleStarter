import React from 'react';
import VideoListItem from './video_list_item';

const videoList = (props) => {
	const currVideos = props.videos;
	const videoItems = currVideos.map((video) => {
		return (
			<VideoListItem 
			onVideoSelect={props.onVideoSelect} 
			key={video.etag} 
			targetVideo={video} />
		);
	});
	return(
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
		);
};

export default videoList;