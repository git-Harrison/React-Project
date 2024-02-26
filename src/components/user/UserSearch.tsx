import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface User {
    nickname: string;
}

const UserSearch: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get<User[]>(`https://api.nexon.com/fconline/v1/id?nickname=`)
            .then((response: AxiosResponse<User[]>) => {
                setUsers(response.data);
            })
            .catch((error: any) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <form action="">
                <input type="text" id='nickname' />
                <button type='button'>유저조회</button>
            </form>

            <p>
                조회 결과: <span></span>
            </p>
            <div>
                <h2>User List</h2>
                <ul>

                </ul>
            </div>
        </div>

    )
};

export default UserSearch;


