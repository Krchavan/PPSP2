import React from 'react'
import './../Ourteam/team.css';
import team01 from './../Asset/Image/sir.jpg'
import team02 from './../Asset/Image/kr.jpg'
import team03 from './../Asset/Image/mam1.jpg'
import team04 from './../Asset/Image/mam4.jpg'



const teamMembers = [
    {
        imgUrl: team01,
        name: 'Dr.Anil.Latke',
        position: 'CEO'
    },
  
    {
        imgUrl: team02,
        name: 'Mr.Krushna Chavan',
        position: 'Software developer'
    },

    {
        imgUrl: team03,
        name: 'Mrs.Dipali Mankar',
        position: 'Hr'
    },

    {
        imgUrl: team04,
        name: 'Miss.Puja Yadav',
        position: 'Accountant'
    },



   
  
  
]

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>
                        Join With <span className='highlight'>Our Team</span>
                    </h2>
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team