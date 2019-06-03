import React from 'react';

const Footer = () => {
  return (
    <div
      className="container d-none d-lg-block text-center"
      style={{ margin: '15px' }}
    >
    <hr />
      <div className="row">
        <div className="col-md-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://newsapi.org"
          >
            Powered by NewsAPI.org
          </a>
        </div>
        <div className="col-md-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/elliot-fortney-6ab4a5132/"
          >
            <i class="fab fa-3x fa-linkedin-in" />
          </a>
        </div>
        <div className="col-md-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/efortney/spotlight"
          >
            <i class="fab fa-3x fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
