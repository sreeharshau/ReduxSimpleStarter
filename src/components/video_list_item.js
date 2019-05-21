import React from 'react';

const VideoListItem = ({targetVideo, onVideoSelect}) => {
	// console.log(targetVideo);
	const imgUrl = targetVideo.snippet.thumbnails.default.url;
	const videoTitle = targetVideo.snippet.title;
	return (
		<li className="list-group-item" onClick={() => onVideoSelect(targetVideo)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imgUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{videoTitle}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;