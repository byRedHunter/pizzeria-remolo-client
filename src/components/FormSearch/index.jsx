import React from 'react'

import style from './styles.module.css'

const FormSearch = () => {
	return (
		<form className={style.formSearch}>
			<label htmlFor='search' className={style.special}>
				¿Que estas buscando?
			</label>
			<div className={style.formInput}>
				<input
					type='search'
					id='search'
					placeholder='Nombre del producto'
					autoComplete='off'
				/>
				<button type='submit'>
					<i className='fa fa-search'></i>
				</button>
			</div>
		</form>
	)
}

export default FormSearch
