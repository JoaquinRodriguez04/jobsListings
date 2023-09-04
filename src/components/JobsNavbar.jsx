import { useDispatch, useSelector } from 'react-redux';
import { removeFilters } from '../features/jobs/JobsSlice';
import { emptyFilters } from '../features/jobs/JobsSlice';
import close from '../assets/icons/icon-remove.svg';
import { v4 as uuid } from 'uuid';

const jobsNavBar = () => {

  const filters = useSelector((state) => state.jobs.filters);
  const dispatch = useDispatch();

  const handleRemoveFilters = (filter) => {
    dispatch(removeFilters(filter));
  };

  const handleSetEmptyFilters = () => {
    dispatch(emptyFilters());
  };

  return (
    <header className={`jobs-navbar-container ${filters.length === 0 && 'jobs-navbar-disabled'}`}> 
      <div className='jobs-navbar-wrapper'>
        <ul className="jobs-navbar-list">
          {filters.map((filter) => (
            <li className='job-navbar-filter'
            key={uuid()}>
                <p className="job-navbar-filter-lang">{filter}</p>
                <button 
                  className='job-navbar-filter-btn'
                  onClick={() => handleRemoveFilters(filter)}>
                  <img src={close} alt="icon-close" />
                </button>
            </li>
          ))}
        </ul>
        <button 
        className='jobs-navbar-clear'
        onClick={handleSetEmptyFilters}>clear</button>
      </div>
    </header>
  )
};

export default jobsNavBar;