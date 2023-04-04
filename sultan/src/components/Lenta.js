import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Corzina from '../pages/Corzina'
import Katalog from '../pages/Katalog'
import './Lenta.css'

const Lenta = props => {
	return (
		<div>
			<div className='lenta'>
				<Link to='/'>Главная</Link>
				<span> / </span>
				<Link to='/corzina'>Корзина</Link>
			</div>
		</div>
	)
}

export default Lenta
