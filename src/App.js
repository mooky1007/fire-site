import { getDatabase, ref, get, child } from 'firebase/database';
import { useEffect, useState } from 'react';

const App = () => {
    const db = getDatabase();
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, '/posts'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setDatas(Object.values(snapshot.val()));
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <div>Firebase</div>
            <ul>
                {datas.map((el, idx) => <li key={idx}>{el}</li>)}
            </ul>
        </>
    );
};

export default App;
