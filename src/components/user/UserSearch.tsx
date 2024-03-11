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
            // API 응답에서 사용자 정보 추출
            const user: User = response.data;
            // 추출된 사용자 정보를 상태에 설정
            setSearchResult(user);
            console.log("성공함", response);
        } catch (error) {
            console.error("실패함", error);
            console.log(nickName)
            
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


