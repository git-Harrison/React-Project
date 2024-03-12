import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    nickname: string;
}

const UserSearch: React.FC = () => {
    const [nickName, setNickName] = useState("");
    const [searchResult, setSearchResult] = useState<User | null>(null);

    const [info, setInfo] = useState("");

    async function searchNickName(){
        try {
            const apiKey = 'test_6f0c197e84ae4404190434ef3d22e04a0139b68bdef6442e8a85239fe60add9b5adf99ffd0f50f3265899f1955b5c56e';
            const encodedNickName = encodeURIComponent(nickName);
            const response = await axios.get(`https://open.api.nexon.com/fconline/v1/id?nickname=${encodedNickName}`,{
                headers: {
                    'x-nxopen-api-key': `${apiKey}`,
                }
            });
            if (response.data) {
                const user: User = response.data;
                setSearchResult(user);
                console.log("성공함", response);
                console.log(response.data.ouid);
                
            } else {
                console.error("응답 데이터에 사용자 정보가 포함되어 있지 않습니다.");
            }
        } catch (error) {
            console.error("실패함", error);
        }
    }
    function handleInput(e: React.ChangeEvent<HTMLInputElement>){
        setNickName(e.target.value);
    } 
    
    // async function searchNickName(){
    //     try {
    //         const apiKey = 'test_6f0c197e84ae4404190434ef3d22e04a0139b68bdef6442e8a85239fe60add9b5adf99ffd0f50f3265899f1955b5c56e';
    //         const encodedNickName = encodeURIComponent(nickName);
    //         const response = await axios.get(`https://open.api.nexon.com/fconline/v1/user/basic?ouid=${encodedNickName}`,{
    //             headers: {
    //                 'x-nxopen-api-key': `${apiKey}`,
    //             }
    //         });
    //         if (response.data) {
    //             const user: User = response.data;
    //             setSearchResult(user);
    //             console.log("성공함", response);
    //         } else {
    //             console.error("응답 데이터에 사용자 정보가 포함되어 있지 않습니다.");
    //         }
    //     } catch (error) {
    //         console.error("실패함", error);
    //     }
    // }

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


