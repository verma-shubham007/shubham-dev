import React from "react";
import {experiences, skills, tech_stacks} from "./resume-data";
import resumePdf from "./../../../assets/resume.pdf";

const Resume = () => {

    const progressSection = [
        {
            name: "My Skills",
            data: skills
        },
        {
            name: "Tech Stack",
            data: tech_stacks
        }
    ];

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Shubham Verma Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <article className="resume active" data-page="resume">

            <header>
                <h2 className="h2 article-title">Resume</h2>
                <button className="form-btn" type="button" onClick={downloadFile}>
                        <ion-icon name="download-outline"></ion-icon>
                        <span>Download Resume</span>
                    </button>
            </header>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>

                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">Uttar Pradesh Technical University</h4>

                        <span>2013 — 2017</span>

                        <p className="timeline-text">
                            Bachelor's of Technology in Computer Science and Engineering from Indraprashtha Engineering College, Shahibabad, Ghaziabad, Uttar Pradesh, India affiliated to Dr. A. P. J. Abdul Kalam University aka Uttar Pradesh Technical University (UPTU).
                        </p>

                    </li>

                </ol>

            </section>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>

                    <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">

                    {experiences.map(experience => {
                        return <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">{experience.title}</h4>

                            <span>{experience.startDate} — {experience.endDate}</span>

                            <p className={`timeline-text ${experience.description.includes("Times of India Group") ? "special-content" : ""}`}>
                                {experience.description}
                            </p>

                        </li>
                    })}

                </ol>

            </section>

            {progressSection.map(section => {
                return <section className="skill">

                    <h3 className="h3 skills-title">{section.name}</h3>

                    <ul className="skills-list content-card">

                        {section.data.map(skill => {
                            return <li className="skills-item">

                                <div className="title-wrapper">
                                    <h5 className="h5">{skill.name}</h5>
                                    <data value="80">{skill.value}%</data>
                                </div>

                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{width: skill.value + "%"}}></div>
                                </div>

                            </li>
                        })}

                    </ul>

                </section>
            })}

        </article>
    );
}

export default React.memo(Resume);
