import JobsList from './JobsList';
import JobsNavbar from './jobsNavBar';

const JobsContent = () => {
  return (
    <section className='jobs-content-wrapper'>
        <JobsNavbar/>
        <JobsList/>
    </section>
  )
};

export default JobsContent;