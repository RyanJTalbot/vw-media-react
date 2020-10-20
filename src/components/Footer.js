import React, { Component } from 'react';
import dev from '../images/dev.png';

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          &#169; VW-Media.com
        </div>
        <div className="footer">
          <img className="footerImage" src={dev} alt=".dev logo" height={20} width={20} /> 
          <span className="footerSpan">made by RyanJT.dev</span>
        </div>
      </>
    )
  }
}
