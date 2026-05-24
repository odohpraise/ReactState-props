import JobCard from './JobCard'
import { jobs } from '../data/job'

function JobLists() {
    return (
        <div className="container mt-4 mb-4">
            <h1 className='sticky-top'>JOBBERMAN</h1>
            <p>Welcome to JOBBERMAN, your one-stop destination for finding the best job opportunities!</p>

            {jobs.length === 0 ?
                <p>No jobs available at the moment.</p>
                : (

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {jobs.map((job) => (
                            <div key={job.id}>
                                <JobCard
                                    title={job.title}
                                    company={job.company}
                                    location={job.location}
                                    salary={job.salary}
                                    description={job.description}
                                />
                            </div>
                        ))}
                    </div>
                )}

        </div>
    )
}

export default JobLists