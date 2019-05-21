import React from 'react';

const VideoDetail = ({video}) => {
	if(!video)
		return <div> Loading... </div>;

	const vidTitle = video.snippet.title;
	const vidDescrip = video.snippet.description;

	const videoId = video.id.videoId;
	const embedURL = `https://www.youtube.com/embed/${videoId}`;

	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={embedURL}></iframe> 
			</div>
			<div className="details">
				<div className="video-title-container w3-panel w3-leftbar w3-border-silver">{vidTitle}</div>
				<div className="video-description-container">{vidDescrip}</div>
			</div>
		</div>
	);
};

export default VideoDetail;