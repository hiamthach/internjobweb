import React, {useEffect, useState} from 'react';

import './candidates.scss'

import { useSelector } from 'react-redux';

import { selectPostCandidates } from '../../redux/selectors';
import CandidateItem from '../CandidateItem/CandidateItem'

import { db } from '../../firebase-config'
import { doc, getDoc, collection } from 'firebase/firestore'

const Candidates = () => {
    
    const postCandidates = useSelector(selectPostCandidates)
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        const modifyData = () => {
            const candidateList = postCandidates.candidates
            candidateList?.map((candidate) => {
                const candidateRef = doc(db, "users", candidate)
                const getCandidateData = async () => {
                    const data = (await getDoc(candidateRef)).data()
                    setCandidates([...candidates, data])
                }
                return getCandidateData()
            })
        }
        modifyData()

        return () => {
            modifyData()
        }

    }, [])


    useEffect(() => {console.log(candidates)}, [candidates])

    return (
        <div className='candidates'>
            <h4 className="candidates--subtitle">Danh sách ứng viên</h4>
            <h1 className='candidates--title'>{postCandidates.position}</h1>
            <div className="candidates--wrap">
                {
                    candidates.map((candidate)=> <CandidateItem {...candidate}/>)
                }
            </div>
        </div>
    );
}

export default Candidates;
