import React from 'react'
import style from './styles.module.css'

const Social = () => {
	return (
		<ul className={style.social}>
			<li className={style.socialItem}>
				<a href='/' target='_blank'>
					<i className='fab fa-twitter'></i>
				</a>
			</li>
			<li className={style.socialItem}>
				<a href='/' target='_blank'>
					<i className='fab fa-facebook'></i>
				</a>
			</li>
			<li className={style.socialItem}>
				<a href='/' target='_blank'>
					<i className='fab fa-instagram'></i>
				</a>
			</li>
			<li className={style.socialItem}>
				<a href='/' target='_blank'>
					<i className='fab fa-youtube'></i>
				</a>
			</li>
		</ul>
	)
}

export default Social
