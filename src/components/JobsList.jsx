import requestData from '../helpers/requestData';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setJobs } from '../features/jobs/JobsSlice';
import { setRole } from '../features/jobs/JobsSlice';
import { setLevel } from '../features/jobs/JobsSlice';
import { setLang } from '../features/jobs/JobsSlice';
import { setTools } from '../features/jobs/JobsSlice';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import photosnap from '../assets/imgs/photosnap.svg';
import manage from '../assets/imgs/manage.svg';
import acount from '../assets/imgs/account.svg';
import loopStudios from '../assets/imgs/loop-studios.svg';
import faceit from '../assets/imgs/faceit.svg';
import shortly from '../assets/imgs/shortly.svg';
import insure from '../assets/imgs/insure.svg';
import eyecam from '../assets/imgs/eyecam-co.svg';
import airFilter from '../assets/imgs/the-air-filter-company.svg';

const JobsList = () => {

  // jobs ==> es el estado que contendra la respuesta a la data del JSON
  const jobsList = useSelector(state => state.jobs.jobsArr);
  const filteredJobs = useSelector(state => state.jobs.filteredJobs);
  const filters = useSelector(state => state.jobs.filters);

  // dispatch
  const dispatch = useDispatch();

  // requestData ==> funcion que ejecuta la respuesta a la promesa del json
  useEffect(() => {
    requestData()
      .then(res => {
        dispatch(setJobs(res));
      });
  }, []);
    
  const handleSetRole = (role) => {
    dispatch(setRole(role));
  };

  const handleSetLevel = (level) => {
    dispatch(setLevel(level));
  };

  const handleSetLang = (lang) => {
    dispatch(setLang(lang));
  };

  const handleSetTools = (tools) => {
    dispatch(setTools(tools));
  };

  return (
    <main className="jobs-list-container">
        <ul className={`jobs-list-wrapper ${filters.length > 0 && 'jobs-list-filters-active'}`}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <li 
            className={`jobs-item-list ${job.featured && 'item-list-featured-border'} `}
            key={uuid()}>
              <div className="jobs-item-left">
                <img src={job.logo} className='jobs-item-image-logo' alt="image-logo" />
                <div className="jobs-item-info-wrapper">
                  <div className='jobs-item-info-top'>
                    <p className='jobs-item-info-company'>{job.company}</p>
                    {job.new && 
                    <span className='jobs-item-info-new jobs-item-notice'>new!</span>
                    }
                    {job.featured && 
                    <span className='jobs-item-info-featured jobs-item-notice'>featured</span>
                    }
                  </div>
                  <div className='jobs-item-info-center'>
                    <p className='jobs-item-info-position'>{job.position}</p>
                  </div>
                  <div className='jobs-item-info-bottom'>
                    <p className='jobs-item-info-postedAt'>{job.postedAt}</p>
                    <span className='jobs-item-info-point'></span>
                    <p className='jobs-item-info-contract'>{job.contract}</p>
                    <span className='jobs-item-info-point'></span>
                    <p className='jobs-item-info-location'>{job.location}</p>
                  </div>
                </div>
              </div>
              <div className="jobs-item-right">
                <button 
                  className='jobs-item-right-btn'
                  onClick={() => handleSetRole(job.role)}
                >{job.role}</button>
                <button 
                  className='jobs-item-right-btn'
                  onClick={() => handleSetLevel(job.level)}
                  >{job.level}</button>
                {job.languages.map((lang) => (
                  <button 
                    className='jobs-item-right-btn'
                    onClick={() => handleSetLang(lang)}
                    key={uuid()}
                  >{lang}</button>
                ))}
                {job.tools.map((tools) => (
                  <button 
                    className='jobs-item-right-btn'
                    onClick={() => handleSetTools(tools)}
                    key={uuid()}
                  >{tools}</button>
                ))}
              </div>
            </li>
          ))
        )
        : (
        jobsList.map((job) => (
          <li 
          className={`jobs-item-list ${job.featured && 'item-list-featured-border'} `}
          key={uuid()}>
            <div className="jobs-item-left">
              <img src={job.logo} className='jobs-item-image-logo' alt="image-logo" />
              <div className="jobs-item-info-wrapper">
                <div className='jobs-item-info-top'>
                  <p className='jobs-item-info-company'>{job.company}</p>
                  {job.new && 
                  <span className='jobs-item-info-new jobs-item-notice'>new!</span>
                  }
                  {job.featured && 
                  <span className='jobs-item-info-featured jobs-item-notice'>featured</span>
                  }
                </div>
                <div className='jobs-item-info-center'>
                  <p className='jobs-item-info-position'>{job.position}</p>
                </div>
                <div className='jobs-item-info-bottom'>
                  <p className='jobs-item-info-postedAt'>{job.postedAt}</p>
                  <span className='jobs-item-info-point'></span>
                  <p className='jobs-item-info-contract'>{job.contract}</p>
                  <span className='jobs-item-info-point'></span>
                  <p className='jobs-item-info-location'>{job.location}</p>
                </div>
              </div>
            </div>
            <div className="item-color-divider"></div>
            <div className="jobs-item-right">
              <button 
                className='jobs-item-right-btn'
                onClick={() => handleSetRole(job.role)}
              >{job.role}</button>
              <button 
                className='jobs-item-right-btn'
                onClick={() => handleSetLevel(job.level)}
                >{job.level}</button>
              {job.languages.map((lang) => (
                <button 
                  className='jobs-item-right-btn'
                  onClick={() => handleSetLang(lang)}
                  key={uuid()}
                >{lang}</button>
              ))}
              {job.tools.map((tools) => (
                <button 
                  className='jobs-item-right-btn'
                  onClick={() => handleSetTools(tools)}
                  key={uuid()}
                >{tools}</button>
              ))}
            </div>
          </li>
        )) 
        )}
        </ul>
    </main>
  )
};

export default JobsList;