import './UserPage.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export function UserPage() {
    const { userId } = useParams();
    const [ userData, setUserData ] = useState({});
    
    useEffect(() => {
        const url = `https://reqres.in/api/users/${userId}`;
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            setUserData(result.data);

        });
    }, []);

    
    return (
        <div className={'person'}>
            <h1 className={'person__name'}>{ userData.first_name }&nbsp;{ userData.last_name }</h1>
            <img src={ userData.avatar } alt={'user pic'}/>
          
        </div>
    )
   

}
