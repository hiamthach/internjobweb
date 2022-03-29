import React from 'react';

import { Link } from 'react-router-dom';

import './jobinfo.scss'

import Button from '../Button/Button'
import ButtonArrow from '../ButtonArrow/ButtonArrow'
import JobCard from '../JobCard/JobCard'

import { useSelector } from 'react-redux';
import { selectJobInfo } from '../../redux/selectors'

const JobInfo = () => {

    const jobInfo = useSelector(selectJobInfo)

    return (
        <div className="jobinfo">
            <div className="jobinfo-head">
                <JobCard {...jobInfo}/>
            </div>

            <div className="jobinfo-content">
                <div className="row">
                    <div className="jobinfo-des col-8">
                        <div className="jobinfo-des__gr">
                            <h2>Mô tả công việc</h2>
                            {jobInfo.description ? jobInfo.description.split('\n\n').map(paragraph =>
                                <p>
                                    {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                                </p>
                            ) : ''}
                        </div>
                        <div className="jobinfo-des__gr">
                            <h2>Yêu cầu công việc</h2>
                            {jobInfo.requirement ? jobInfo.requirement.split('\n\n').map(paragraph =>
                                <p>
                                    {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                                </p>
                            ) : ''}
                        </div>

                        <div className="jobinfo-des__gr">
                            <h2>{jobInfo.otherInfo ? 'Những thông tin khác' : ''}</h2>
                            {jobInfo.otherInfo ? jobInfo.otherInfo.split('\n\n').map(paragraph =>
                                <p>
                                    {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                                </p>
                            ) : ''}
                        </div>
                    </div>
                    <div className="jobinfo-cty col-4">
                        <img className='jobinfo-cty__img' src="https://www.fpt-software.com/wp-content/uploads/sites/2/2017/04/fpt-software-1.jpg" alt="" />
                        <h3 className="jobinfo-cty__name">{jobInfo.author.name}</h3>     
                        <p className="jobinfo-city__des">
                            {jobInfo.author.des.split('\n\n').map(paragraph =>
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
