import { useState } from "react";

type JobCardProps = {
    title: string;
    company: string;
    location: string;
    salary: string;
    description: string;
}


function JobCard({ title, company, location, salary, description }: JobCardProps) {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div className="card" style={{ width: '18rem', margin: '10px 20px', padding: '10px' }}>
            <h5 className="card-header text-center">{title}</h5>
            <p className="card-text"><strong>Company:</strong> {company}</p>
            <p className="card-text"><strong>Location:</strong> {location}</p>

            {showDetails && (
                <>
                    <p><strong>Salary:</strong> {salary}</p>
                    <p><strong>Description:</strong> {description}</p>
                </>
            )}

            <button className="btn  btn-dark" type="button" onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide Details" : "See Details"}
            </button>

        </div >
    )
}

export default JobCard