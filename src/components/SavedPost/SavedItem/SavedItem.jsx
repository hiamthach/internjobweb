import React, {useState, useEffect} from 'react';

import Card from '../../Card/Card';

import { db } from '../../../firebase-config';
import { getDoc, doc } from 'firebase/firestore';

const Saveditem = ({id, reference}) => {

    const [savedData, setSavedData] = useState()

    useEffect(() => {
        const getData = async () => {
            const savedRef = doc(db, reference, id)

            const data = await getDoc(savedRef)

            setSavedData(data.data())
        }

        getData()
    }, [])


    return (
        <>
            {(savedData) ? <Card {...savedData} saved={true}/> : ''}
        </>
    );
}

export default Saveditem;
