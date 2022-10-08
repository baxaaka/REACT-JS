

import React from 'react';
import kitob from '../assets/img/kitob.svg'
import ins from '../assets/img/ins.svg'
import li from '../assets/img/li.svg'
import ftt from '../assets/img/ftt.svg'


const Footer = () => {
    return (
        <>
          <footer>
            <div className="ff">
            <img src={kitob} alt=""/> <br/>
            <img src={ins} alt=""/>
        </div>

          <div className="foot">
            
            <img src={li} alt=""/>
          </div>
          <img src={ftt} alt="" className="footter" width="10px"/>
        </footer>
        </>
    );
};

export default Footer;