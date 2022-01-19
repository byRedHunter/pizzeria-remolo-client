import React from 'react'
import FormSearch from '../FormSearch'
import Social from '../Social'
import style from './styles.module.css'

const Footer = () => {
	return (
		<footer className={style.footer}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='320'
				height='30'
				viewBox='0 0 320 30'
				fill='none'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0 13.9285L13.3333 16.6071C26.6667 19.2856 53.3333 24.6428 80 20.6249C106.667 16.6071 133.333 3.21411 160 0.535521C186.667 -2.14307 213.333 5.8927 240 9.91058C266.667 13.9285 293.333 13.9285 306.667 13.9285L320 13.9285V30L306.667 30C293.333 30 266.667 30 240 30C213.333 30 186.667 30 160 30C133.333 30 106.667 30 80 30C53.3333 30 26.6667 30 13.3333 30L0 30L0 13.9285Z'
					fill='#731D0B'
				/>
			</svg>
			<section className={style.footerContent}>
				<div className={`wrapper ${style.footerContentInfo}`}>
					<div className={style.footerSocial}>
						<h2 className='title'>Pizzeria Don Remolo</h2>
						<Social />
					</div>

					<ul className={style.footerOur}>
						<li className={`${style.footerListItem} ${style.special}`}>
							Nosotros
						</li>
						<li className={style.footerListItem}>
							<a href='#buy'>Como Comprar</a>
						</li>
						<li className={style.footerListItem}>
							<a href='#buy'>Nuestros Productos</a>
						</li>
						<li className={style.footerListItem}>
							<a href='#buy'>Nuestra Historia</a>
						</li>
						<li className={style.footerListItem}>
							<a href='#buy'>Encuentranos en</a>
						</li>
					</ul>

					<ul className={style.footerCategories}>
						<li className={`${style.footerListItem} ${style.special}`}>
							Categorias
						</li>
						<li className={style.footerListItem}>
							<a href='#buy'>Deliciosas Pizzas</a>
						</li>
						<li className={style.footerListItem}>
							<a href='#buy'>Empanadas Doraditas</a>
						</li>
						<li className={style.footerListItem}>
							<a href='#buy'>Los Mejores Postres</a>
						</li>
						<li className={style.footerListItem}>
							<a href='#buy'>Disfruta de las Bebidas</a>
						</li>
					</ul>

					<div className={style.footerSearch}>
						<FormSearch />
					</div>
				</div>
			</section>
		</footer>
	)
}

export default Footer
