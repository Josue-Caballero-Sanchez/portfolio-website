import styles from "./experienceSection.module.css";

type ExperienceSectionProps = {
  selectedTab: string;
};

function ExperienceSection({ selectedTab }: ExperienceSectionProps) {
  function WorkExperience() {
    return (
      <>
        <div className={styles.item__container}>
          <p className={styles.light__text}>Oct 2025 - Present | Phoenix, AZ</p>
          <p className={styles.bold__text}>IT Specialist</p>
          <p className={styles.margin__bottom}>Global Learning Opportunities</p>
          <ul>
            <li>
              Manage IT infrastructure and users using Microsoft 365 Admin
              Center, Intune, Entra ID, NinjaOne, and PowerShell. Provide
              comprehensive technical support including Windows troubleshooting,
              printer management, device deployment, and system maintenance.
            </li>
            <li>
              Update and maintain the company website using WordPress and
              Elementor while building custom business applications including an
              Outlook add-in developed with React, TypeScript, Node.js, and
              Express.
            </li>
            <li>
              Develop and implement automations within Monday.com to optimize
              workflows while also providing ongoing support and troubleshooting
              issues in Monday.com.
            </li>
          </ul>
        </div>
        <br />
        <div className={styles.item__container}>
          <p className={styles.light__text}>
            May 2025 - Sep 2025 | Phoenix, AZ
          </p>
          <p className={styles.bold__text}>IT Intern</p>
          <p className={styles.margin__bottom}>
            City of Phoenix Water Services Department
          </p>
          <ul>
            <li>
              Provided technical support and troubleshooting by assisting
              technicians resolve IT infrastructure issues for employees using
              ServiceNow, Active Directory, and PowerShell.
            </li>
            <li>
              Deployed, configured, repaired, and reimaged various devices
              including laptops, desktops, and Toughbooks, and set up employee
              workstations.
            </li>
            <li>
              Worked with the Applications team on database tasks using SQL and
              developed a Power Apps application for managing third-party goods
              and service requests.
            </li>
          </ul>
        </div>
        <br />
        <div className={styles.item__container}>
          <p className={styles.light__text}>Mar 2024 - May 2025 | Remote</p>
          <p className={styles.bold__text}>AI Trainer/Programmer</p>
          <p className={styles.margin__bottom}>Data Annotation</p>
          <ul>
            <li>
              Reviewed, debugged, and validated AI-generated code across
              multiple coding languages including React, Python, Java, C++, C#,
              and JavaScript to ensure accuracy and adherence to best practices.
            </li>
            <li>
              Identified errors, security risks, and performance issues, in
              AI-generated code and then refactored responses to improve
              correctness and maintainability while providing structured
              feedback to enhance model reasoning and code quality.
            </li>
          </ul>
        </div>
        <br />
        <div className={styles.item__container}>
          <p className={styles.light__text}>May 2019 - Mar 2023 | Peoria, AZ</p>
          <p className={styles.bold__text}>Tire Service Technician</p>
          <p className={styles.margin__bottom}>Discount Tire</p>
          <ul>
            <li>
              Mounted, balanced, and repaired tires for consumer and commercial
              vehicles.
            </li>
            <li>
              Provided customer service and collaborated effectively in a
              team-oriented environment.
            </li>
          </ul>
        </div>
      </>
    );
  }

  function Education() {
    return (
      <>
        <div className={styles.item__container}>
          <p className={styles.light__text}>Aug 2021 - May 2025</p>
          <p className={styles.bold__text}>
            Arizona State University - Tempe, AZ
          </p>
          <p className={styles.margin__bottom}>
            Bachelor of Science in Computer Science
          </p>
          <ul>
            <li>3.4 GPA</li>
            <li>Graduated with Cum Laude honors</li>
          </ul>
        </div>
        <br />
        <div className={styles.item__container}>
          <p className={styles.light__text}>Aug 2017 - May 2021</p>
          <p className={styles.bold__text}>Peoria High School - Peoria, AZ</p>
          <p className={styles.margin__bottom}>High School Diploma</p>
          <ul>
            <li>3.8 GPA</li>
          </ul>
        </div>
      </>
    );
  }

  return (
    <section className={styles.experience__section}>
      {selectedTab === "experience" ? <WorkExperience /> : <Education />}
    </section>
  );
}

export default ExperienceSection;
