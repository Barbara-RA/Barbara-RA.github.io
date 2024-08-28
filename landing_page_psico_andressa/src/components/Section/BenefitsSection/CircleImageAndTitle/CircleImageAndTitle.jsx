import css from './CircleImageAndTitle.module.css';

function CircleImageAndTitle({image, title}) {

	return (
		<div className={css.container}>
      		<div className={css.circle}>
        		<img src={image} alt={title} className={css.image} />
      		</div>
      		<h3 className={css.title}>{title}</h3>
    	</div>
	);
	
}

export default CircleImageAndTitle;