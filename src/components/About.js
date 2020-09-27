import React, { Component } from 'react'
import { AiFillCamera } from "react-icons/ai";
import { CgSwiss } from "react-icons/cg";
import { GiCrocJaws, GiHummingbird } from "react-icons/gi";
import Title from './Title';

export default class About extends Component { 

  state = {
    services: [
      {
        icon:<AiFillCamera/>,
        title: "Photography",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon:<CgSwiss/>,
        title: "Switzerland",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon:<GiHummingbird />,
        title: "Louisiana",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon:<GiCrocJaws/>,
        title: "Wildlife",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
              );
          })}
        </div>
      </section>
    )
  }

}