import * as React from "react";
import { Title } from "./index";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

type TypeJobsQuery = {
  allStrapiJob: {
    totalCount: number;
    nodes: Array<{
      position: string;
      company: string;
      date: string;
      descriptions: Array<{
        id: string;
        item: string;
      }>;
    }>;
  };
};
export const query = graphql`
  query Jobs {
    allStrapiJob(sort: { createdAt: DESC }) {
      totalCount
      nodes {
        position
        company
        date
        descriptions {
          id
          item
        }
      }
    }
  }
`;

export default function Jobs() {
  const data: TypeJobsQuery = useStaticQuery(query);
  const jobs = data.allStrapiJob.nodes;

  const [jobIndex, setJobIndex] = React.useState(0);
  const jobToShow = jobs[jobIndex];

  return (
    <section className="section jobs">
      <Title title="experiences" />

      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={index}
              className={jobIndex === index ? `job-btn active-btn` : `job-btn `}
              onClick={() => setJobIndex(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        <article className="job-info">
          <h3>{jobToShow.position}</h3>
          <h4>{jobToShow.company}</h4>
          <p className="job-date">{jobToShow.date}</p>
          {jobToShow.descriptions.map((item) => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.item}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
}
