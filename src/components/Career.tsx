import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Fruit of Sustainability</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Summer internship building internal tools and dashboards. Built Report
              Automation system reducing manual reporting by 80%, Work Progress
              Dashboards, and Office Inventory Management with AI integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full Stack Developer</h4>
                <h5>Upwork</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Delivered full-stack web applications for international clients.
              Built custom React components, integrated third-party APIs, and
              managed multiple contracts alongside university coursework.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PHP & Module Developer</h4>
                <h5>WHMPRESS</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Part-time role developing custom WHMCS addon modules. Building
              WHMPress Promo & URL Tracking module with full CRUD admin panel,
              following WHMCS hook/API patterns and collaborating on new features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
