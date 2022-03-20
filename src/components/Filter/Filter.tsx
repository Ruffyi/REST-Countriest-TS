import { default as bemCssModules } from 'bem-css-modules';
import { default as FilterStyles } from './Filter.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const styled = bemCssModules(FilterStyles);

const Filter = () => {
	return (
		<section className={styled()}>
			<div className={styled('container')}>
				<div className={styled('icon')}>
					<FontAwesomeIcon icon={faSearch} />
				</div>
				<input
					type='text'
					className={styled('input')}
					title='Search any countries'
					placeholder='Search for a country'
					data-search
				/>
			</div>
		</section>
	);
};

export default Filter;
