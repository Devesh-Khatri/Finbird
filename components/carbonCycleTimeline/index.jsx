import React from "react";
import styles from "./carbonCycleTimeline.module.scss";

const CarbonCycleTimeline = () => {
  return (
    <div className={styles.timeline_wrapper}>
      {/* <div className={styles.straight_line}></div> */}
      <div className={styles.timeline_container}>
        <div className={styles.left_image}>
          <img
            className={styles.timeline_image}
            src="/images/timeline-images/1.png"
            alt="1.png"
          />
        </div>
        <div className={styles.right_container}>
          <div>
            <div
              className="sub-heading"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="sub-heading-number">1</span> Planning and
              Preparation
            </div>
            <p className="light-paragraph">
              Identify the project and conduct a baseline emission assessment{" "}
              <br />
              Estimate carbon emission reductions <br /> Develop a strategy by
              stakeholder consultation.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline_container_middle}>
        <div className={styles.left_image}>
          <img
            className={styles.timeline_image}
            src="/images/timeline-images/2.png"
            alt="1.png"
          />
        </div>
        <div className={styles.right_container}>
          <div>
            <h3
              className="sub-heading"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="sub-heading-number">2</span> Implementation and
              Execution
            </h3>
            <p className="light-paragraph">
              Project design documentation <br /> Register with a carbon credit
              program <br /> Monitoring, reporting, and verification
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline_container}>
        <div className={styles.left_image}>
          <img
            className={styles.timeline_image}
            src="/images/timeline-images/3.png"
            alt="1.png"
          />
        </div>
        <div className={styles.right_container}>
          <div>
            <h3
              className="sub-heading"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="sub-heading-number">3</span> Benefit Realization
              & Revenue Generation
            </h3>
            <p className="light-paragraph">
              Issuance of carbon credits <br /> Sale of carbon credits <br />
              Reinvestment of revenue to further reduce emissions or support{" "}
              <br />
              sustainability initiatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCycleTimeline;
