import React from 'react'
import './Experience.scss'

const Experience = () => {

    return (
        <div className='fulll-data'>
            <div className='Abilities'>

                <h4>My Abilities</h4>
                <h2>My Experience</h2>


            </div>
            <div className="twocards">
                <div className="frontend">
                    <h5 id='front'>Frontend <br /> Development</h5>
                    <div className="contents-m1">

                        <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                            <span className='data-exp'>HTML</span></div>
                        <span id='Adv'>Advanced</span>
                        
                    </div>

                </div>
                <div className="backend">
                    <h5 id='front'>BackEnd <br /> Development</h5>

                </div>
            </div>

        </div>
    )
}

export default Experience
