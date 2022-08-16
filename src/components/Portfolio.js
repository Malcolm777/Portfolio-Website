import React, { Component } from 'react';
import WorkImg from './images/workImg.jpeg';
import eComm from './images/eComm.jpeg';
import stockViz from './images/stockViz.png'; 
import tradingAlgo from './images/tradingAlgo.jpeg';
import electricCar from './images/electricCar.jpeg'; 
import JRE from './images/JRE.jpeg'; 

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div name = 'work' className = 'w-full m:h-screen text-gray-300 bg-[#0a192f]'>
        <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className = 'pb-8'>
                <p className = 'text-4xl font-bold inline border-b-4 text-pink 300 border-pink-600'>Click on an image below to check out the project!</p>
                
            </div>

            <div 
            className = 'grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/*grid items */}
                <div 
                style = {{backgroundImage:`url(${eComm})`}}
                className = 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects*/}
                    <div className = 'opacity-0 group-hover:opacity-100'> 
                        <span className = 'text-2xl font-bold text-pink tracking-wider'>
                            React JS Application 

                        </span>
                        <div className = 'pt-8 text-center'>
                        <a href = "https://malcolm777.github.io/nexus-clothing/" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                                    Demo (click the home button)
                                </button>
                        </a>
                        <a href = "https://github.com/Malcolm777/nexus-clothing " target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                                    Code
                                </button>
                        </a>
                        </div>
                    </div>
                </div>
                {/*grid items */}
                <div 
                style = {{backgroundImage:`url(${stockViz})`}}
                className = 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects*/}
                    <div className = 'opacity-0 group-hover:opacity-100'> 
                        <span className = 'text-2xl font-bold text-white tracking-wider'>
                            HTML5/CSS3 website 

                        </span>
                        <div className = 'pt-8 text-center'>
                        <a href = "https://malcolm777.github.io/Elite-Capital-MOCK-/" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo 
                                </button>
                        </a>
                        <a href = "https://github.com/Malcolm777/Elite-Capital-MOCK-" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                        </a>
                        </div>
                    </div>
                </div>
                {/*grid items */}
                <div 
                style = {{backgroundImage:`url(${tradingAlgo})`}}
                className = 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects*/} 
                    <div className = 'opacity-0 group-hover:opacity-100'> 
                        <span className = ' text-2xl font-bold text-white tracking-wider'>
                            Python, pandas, numPy application  

                        </span>
                        <div className = 'pt-8 text-center'>
                        <a href = "https://github.com/Malcolm777/Trading_algorithms/blob/master/AAPL_MACD_8_26_20.ipynb" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo 
                                </button>
                        </a>
                        <a href = "https://github.com/Malcolm777/Trading_algorithms" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                        </a>
                        </div>
                    </div>
                </div>
                {/*grid items */}
                <div 
                style = {{backgroundImage:`url(${electricCar})`}}
                className = 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects*/}
                    <div className = 'opacity-0 group-hover:opacity-100'> 
                        <span className = 'text-2xl font-bold text-white tracking-wider'>
                            Java Application 

                        </span>
                        <div className = 'pt-8 text-center'>
                        <a href = "https://github.com/Malcolm777/Electric-Car-Shop/tree/main" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo 
                                </button>
                        </a>
                       <a href = "https://github.com/Malcolm777/Electric-Car-Shop/tree/main" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                        </a>
                        </div>
                    </div>
                </div>
                {/*grid items */}
                <div 
                style = {{backgroundImage:`url(${JRE})`}}
                className = 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects*/}
                    <div className = 'opacity-0 group-hover:opacity-100'> 
                        <span className = 'text-2xl font-bold text-white tracking-wider'>
                            Java with Spring/Hibernate framework

                        </span>
                        <div className = 'pt-8 text-center'>
                        <a href = "https://github.com/Malcolm777/StudentDirectory" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo 
                                </button>
                        </a>
                        <a href = "https://github.com/Malcolm777/StudentDirectory" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                        </a>
                        </div>
                    </div>
                </div>
                {/*grid items */}
                <div 
                style = {{backgroundImage:`url(${WorkImg})`}}
                className = 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects*/}
                    <div className = 'opacity-0 group-hover:opacity-100'> 
                        <span className = 'text-2xl font-bold text-white tracking-wider'>
                            Java Data Structures

                        </span>
                        <div className = 'pt-8 text-center'>
                        <a href = "https://github.com/Malcolm777/CitiesDataStructures" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo 
                                </button>
                        </a>
                        <a href = "https://github.com/Malcolm777/CitiesDataStructures" target = "_blank">
                                <button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                /* 
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                */
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}