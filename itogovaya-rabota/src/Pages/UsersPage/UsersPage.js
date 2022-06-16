import './UsersPage.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export function UsersPage() {
    const [ users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://reqres.in/api/users?per_page=11')
        .then((response) => response.json())
        .then((result) => {
            setUsers(result.data);

        });
    }, []);

    useEffect(() => {
        console.log('users changed');
    }, [users])

    return (
        <div className={'somelye'}>
            <h2 className={'somelye__title'}>Обратитесь к нашим лучши чайным сомелье</h2>
            <ul>
                {
                    users.map((user) => {
                        return (
                            <li className={'somelye__size'} key={user.id}>
                                <Link to={`users/${user.id}`}>
                                    { user.first_name }&nbsp;{ user.last_name }
                                </Link> 
                            </li>
                        )
                    })
                }
   
            </ul>
        </div>
    )
}
