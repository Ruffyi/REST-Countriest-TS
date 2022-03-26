import { default as bemCssModules } from 'bem-css-modules';
import { default as PaginationStyles } from './Pagination.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { paginationContext } from '../../store/paginationContext/paginationContext';

const styled = bemCssModules(PaginationStyles);

const Pagination = () => {
	const {
		pageCount,
		setCurrentPage,
		setNextPage,
		currentPage,
		setPreviousPage,
	} = useContext(paginationContext);
	return (
		<section className={styled()}>
			<button onClick={setPreviousPage} className={styled('item')}>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			{Array(pageCount)
				.fill(0)
				.map((el, i) => (
					<button
						className={styled('item', {
							active: currentPage === i + 1 && true,
						})}
						onClick={() => setCurrentPage(i + 1)}
						key={i + 1}
					>
						{i + 1}
					</button>
				))}

			<button onClick={setNextPage} className={styled('item')}>
				<FontAwesomeIcon icon={faArrowRight} />
			</button>
		</section>
	);
};

export default Pagination;
