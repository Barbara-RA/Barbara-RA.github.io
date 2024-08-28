import css from './CardPublication.module.css'

import React from 'react';

function CardPublication({link, image, title, description}) {

	return (
		<div className={css.cardPubli}>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<div className={css.card}>
					<img src={image} alt="" className={css.imageCard}/>
					{/* <div className={css.cardWrapper}>
						<h3>{title}</h3>
						<p>Leia mais</p>
					</div> */}
				</div> 
			</a>
			{/* <div>
				
				<p>{description}</p>
			</div> */}
		</div>
	);
}

export default CardPublication;