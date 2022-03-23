import React from 'react';

import { Link } from 'react-router-dom';

import './jobinfo.scss'

import { GeoAlt } from 'react-bootstrap-icons';
import Button from '../Button/Button'
import ButtonArrow from '../ButtonArrow/ButtonArrow'
import JobCard from '../JobCard/JobCard'

const JobInfo = () => {

    const text = `Mô tả công việc
    What you’ll do
    • Your role is to build frontend/backend web and mobile application prototypes based on the ideas submitted by customer’s staff to deliver impactful business outcomes and support cultivating the innovation culture within the customer.
    • As a prototype developer, you will work on a variety of projects critical to DIL’s needs (Digital Innovation Lab). We need our engineers to be versatile and be enthusiastic to take on new problems and solve them.
    • Collaborate with cross-functional teams to scope out technical and product requirements.
    • Manage API integrations with third party software/platforms.
    Who you are
    • Results oriented. You understand the value of rapidly creating experiences and then iterating based on feedback.
    • A track record of record of conceiving, prototyping and delivering interactive experiences that leverage emerging technologies. (e.g. chatbots, IoT devices like beacons, wearable devices, robotics, blockchain, etc)
    • Resourceful. You seek out connections and collaborations with other teams to allow you to drive your projects forward and to solve problems.
    • You have a passion for emerging technologies, current with industry trends and their application.
    
    
    Responsibilities
    • Daily cooperate with Product Owner to clarify requirements, initiative solutions and develop deliverable software in the iterations of Scrum.
    • Be involved in every phase of Agile software development includes planning, estimation, implementing and continuously delivering software.
    • Self-assign tasks and fully be responsible for quality/quantity of delivered result.
    • Self-determine appropriate architecture, technical solutions and make relevant recommendations to Product Owner.
    • Learn new technologies, languages, and techniques so that you are able to adapt to the evolving needs of our clients.
    
    Yêu cầu ứng viên
    • BS in Computer Science or related technical field, or an equivalent in relevant practical experience.
    • At least 2 years’ experience using NodeJS (ES5, ES6, TS).
    • Knowledge about one of cloud infrastructure platforms (Azure).
    • Experienced in frontend implementation of Angular/ReactJS/Vue and/or similar technologies.
    • Firm understanding of object oriented programming as well as common design patterns/anti-patterns.
    • Experience in building scalable cloud based solutions.
    • Experience working with and integrating REST APIs.
    • Experience  in building microservices architecture.
    • Previous experience working with MongoDB.
    • Working proficiency and communication skills in English is a plus.
    • Familiar with blockchain is a big plus (Ethereum, smart contract, web3js).
    
    Quyền lợi
    • Attractive offer, plus annual compensation and performance bonus.
    • Signing bonus Upto 40M for seniors who onboard before 23rd Apr, 2022.
    • “FPT care” health insurance provided by AON and is exclusive for FPT employees.
    • 20% discount on school fee if your sons/ daughters join FPT School.
    • Udemy for Business accounts for all FSofters.
    • Relocating package: Up to 100M (for senior candidates from Hanoi/HCM.C to Danang).
    • A slot to buy FPT Plaza Apartment at promotion price.
    • Support for learning and certificate examination.
    • Company shuttle buses provide convenient way of transportation for all employees.
    • Salary review 1 time/year or on excellent performance.
    • International, dynamic, friendly working environment.
    • Annual leave, working conditions follow Vietnam labor laws.
    • Annual Summer Vacation: follows company’s policy and starts from May every year.
    • F-Complex Campus provide many facilities for FPT employees such as football ground, gym & yoga centre, restaurant, cafeteria, spa, etc.`

    const ctyDes = `FPT Software là công ty thành viên thuộc Tập đoàn FPT. Được thành lập từ năm 1999, FPT Software hiện là công ty chuyên cung cấp các dịch vụ và giải pháp phần mềm cho các khách hàng quốc tế, với hơn 20.000 nhân viên, hiện diện tại 27 quốc gia trên toàn cầu. Nhiều năm liền, FPT Software được bình chọn là Nhà Tuyển dụng được yêu thích nhất và nằm trong TOP các công ty có môi trường làm việc tốt nhất châu Á.`

    return (
        <div className="jobinfo">
            <div className="jobinfo-head">
                {/* <h1 className="jobinfo-head__title">ReactJS Intern</h1>
                <h3 className="jobinfo-head__name">Công ty ABC</h3>
                <h6 className="jobinfo-head__location">
                    <GeoAlt/>
                    Thủ Đức, Thành phố Hồ Chí Minh
                </h6> */}
                <JobCard/>
            </div>
            {/* <div className="jobinfo-line"></div> */}

            <div className="jobinfo-content">
                <div className="row">
                    <div className="jobinfo-des col-8">
                        <p className="jobinfo-des__text">
                        {text.split('\n\n').map(paragraph =>
                            <p>
                                {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                            </p>
                        )}
                        </p>
                    </div>
                    <div className="jobinfo-cty col-4">
                        <img className='jobinfo-cty__img' src="https://www.fpt-software.com/wp-content/uploads/sites/2/2017/04/fpt-software-1.jpg" alt="" />
                        <h3 className="jobinfo-cty__name">Công ty ABC</h3>     
                        <p className="jobinfo-city__des">
                            {ctyDes.split('\n\n').map(paragraph =>
                                <p>
                                    {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                                </p>
                            )}
                        </p>                   
                    </div>
                </div>

                <div className="jobinfo-content__btns">
                    <Button>Ứng tuyển</Button>
                    <Link to='/'>
                        <ButtonArrow direction='left'>Trở lại</ButtonArrow>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default JobInfo;
