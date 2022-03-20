import { default as bemCssModules } from 'bem-css-modules';
import { default as NavbarStyles } from './Navbar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const styled = bemCssModules(NavbarStyles);

const Navbar = () => {
	return (
		<header className={styled()}>
			<h1 className={styled('title')}>Where in the world?</h1>
			<button className={styled('btn')} data-switch>
				<FontAwesomeIcon icon={faSun} /> Dark Mode
			</button>
		</header>
	);
};

export default Navbar;
