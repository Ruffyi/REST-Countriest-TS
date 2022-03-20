import { default as bemCssModules } from 'bem-css-modules';
import { default as FilterRegionStyles } from './FilterRegion.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const styled = bemCssModules(FilterRegionStyles);

const FilterRegion = () => {
	return (
		<div className={styled()}>
			<div className={styled('heading')}>
				<p className={styled('title')}>Filter by Region</p>
				<button className={styled('icon')}>
					<FontAwesomeIcon icon={faArrowDown} />
				</button>
			</div>
			<ul className={styled('options')}>
				<li className={styled('option')}>Africa</li>
				<li className={styled('option')}>America</li>
				<li className={styled('option')}>Asia</li>
				<li className={styled('option')}>Europe</li>
				<li className={styled('option')}>Oceania</li>
			</ul>
		</div>
	);
};

export default FilterRegion;
