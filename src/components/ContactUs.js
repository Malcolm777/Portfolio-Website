import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me on LinkedIn! 
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  {resumeData.linkedinId}
                  <a href="https://docs.google.com/document/d/e/2PACX-1vRH_xuGUmJ7uwbb_Tu7KSsSPxJjf-76N4QczqIBu5iqJYs0IjRgnk620B7f4RRfjlkXfOEcUpDfLWy9/pub">Resume</a> 
                  
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}