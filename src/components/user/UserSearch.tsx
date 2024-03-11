import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    nickname: string;
}

const UserSearch: React.FC = () => {
    const [nickName, setNickName] = useState("");
    const [searchResult, setSearchResult] = useState<User | null>(null);

    async function searchNickName(){
        try {
            const response = await axios.get(`https://open.api.nexon.com/fconline/v1/id?nickname=${nickName}`);
            if (response.data) {
                const user: User = response.data;
                setSearchResult(user);
                console.log("성공함", response);
            } else {
                console.error("응답 데이터에 사용자 정보가 포함되어 있지 않습니다.");
            }
        } catch (error) {
            console.error("실패함", error);
            console.log(nickName);
        }
    }
    function handleInput(e: React.ChangeEvent<HTMLInputElement>){
        setNickName(e.target.value);
        console.log(e.target.value)
    }
    return (
        <div>
            <form action="">
                <label htmlFor="nickName"></label>
                <input type="text" id='nickName' onChange={e => {handleInput(e);}} />
                <button type='button' id='searchBtn' onClick={searchNickName}>유저조회</button>
            </form>

            <p>
                조회 결과: {searchResult  ? <span>{searchResult.nickname}</span> : <span>조회결과없음</span>}
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


