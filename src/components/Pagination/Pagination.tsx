import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import paginationContext from '../../store/paginationContext/paginationContext';

const Pagination = () => {
	const { pageCount, setCurrentPage } = useContext(paginationContext);
	return (
		<section>
			<button>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			{Array(pageCount)
				.fill(0)
				.map((el, i) => (
					<button onClick={() => setCurrentPage(i + 1)} key={i + 1}>
						{i + 1}
					</button>
				))}

			<button>
				<FontAwesomeIcon icon={faArrowRight} />
			</button>
		</section>
	);
};

export default Pagination;
