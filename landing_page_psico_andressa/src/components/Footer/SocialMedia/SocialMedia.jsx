import css from './SocialMedia.module.css'

import React from 'react';

function SocialMedia({image, link, descricao}) {
	
	return (
		<div className={css.containerFooterMedia}>
			<div>
				<a href={link} target="_blank" rel="noopener noreferrer">
      				<img src={image} alt={descricao} className={css.network}/>
    			</a>
			</div>
    	</div>
	);
}

export default SocialMedia;