import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Count from './Count';
import ReactDOM from "react-dom";

const Form = () => {

  const [postTitle, setPostTitle] = useState('')
  const [postCategory, setPostCategory] = useState('')
  const [postContent, setPostContent] = useState('')
  const [tournamentName, setTournamentName] = useState('')
  const [myTeamName, setMyTeamName] = useState('')
  const [opponentTeamName, setOpponentTeamName] = useState('')
  const [firstSetMyCount, setFirstSetMyCount] = useState('')
  const [firstSetOpponentCount, setFirstSetOpponentCount] = useState('')
  const [secondSetMyCount, setSecondSetMyCount] = useState('')
  const [secondSetOpponentCount, setSecondSetOpponentCount] = useState('')
  const [thirdSetMyCount, setThirdSetMyCount] = useState('')
  const [thirdSetOpponentCount, setThirdSetOpponentCount] = useState('')
  const [victoryThrowMyCount, setVictoryThrowMyCount] = useState('')
  const [victoryThrowOpponentCount, setVictoryThrowOpponentCount] = useState('')
  const [totalMyCount, setTotalMyCount] = useState('')
  const [totalOpponentCount, setTotalOpponentCount] = useState('')

  useEffect(() => {
    myTotal();
    OpponentTotal();
  })

  const inputChange = (event) => {
    switch(event.target.name){
      case 'postTitle':
        setPostTitle(
          event.target.value
        )
        break;
      case 'postCategory':
        setPostCategory(
          event.target.value
        )
        break;
      case 'postContent':
        setPostContent(
          event.target.value
        )
        break;
      case 'tournamentName':
        setTournamentName(
          event.target.value
        )
        break;
      case 'myTameName':
        setMyTeamName(
          event.target.value
        )
        break;
      case 'opponentTameName':
        setOpponentTeamName(
          event.target.value
        )
        break;        
      default:
        break;
    }
  }

  const myTotal = () => {
    setTotalMyCount(Number(firstSetMyCount) + Number(secondSetMyCount) + Number(thirdSetMyCount))
  }

  const OpponentTotal = () => {
    setTotalOpponentCount(Number(firstSetOpponentCount) + Number(secondSetOpponentCount) + Number(thirdSetOpponentCount))
  }

  const selectChange = (event) => {
    switch(event.target.name){
      case 'firstSetMyCount':
        setFirstSetMyCount(
          event.target.value
        )
        break;
      case 'firstSetOpponentCount':
        setFirstSetOpponentCount(
          event.target.value
        )
        break;
      case 'secondSetMyCount':
        setSecondSetMyCount(
           event.target.value
        )
        break;
      case 'secondSetOpponentCount':
        setSecondSetOpponentCount(
          event.target.value
        )
        break;
      case 'thirdSetMyCount':
        setThirdSetMyCount(
           event.target.value
        )
        break;
      case 'thirdSetOpponentCount':
        setThirdSetOpponentCount(
          event.target.value
        )
        break;
      case 'victoryThrowMyCount':
        setVictoryThrowMyCount(
           event.target.value
        )
        break;
      case 'victoryThrowOpponentCount':
        setVictoryThrowOpponentCount(
          event.target.value
        )
        break;
      default:
        break;
    }
  }

  const submit = () => {
    if(postTitle === '' || postCategory === '' || postContent === ''){
      alert('入力してください');
    }

    axios.post('/api/addArticle',{
      title : postTitle,
      category : postCategory,
      content : postContent
    })
    .then(()=> {
      setPostTitle('')
      setPostCategory('')
      setPostContent('')
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <React.Fragment>
        <p>タイトル</p>
        <input type='text' name='postTitle' value={postTitle} onChange={inputChange}/>
        <p>カテゴリー</p>
        <input type='text' name='postCategory' value={postCategory} onChange={inputChange}/>
        <p>内容</p>
        <input type='text' name='postContent' value={postContent} onChange={inputChange}/>
        
        <div><input type='text' name='tournamentName' value={tournamentName} onChange={inputChange}/></div>
        <table>
          <thead>
            <tr>
              <th><input type='text' name='myTeamName' value={myTeamName} onChange={inputChange}/></th>
              <th>VS</th>
              <th><input type='text' name='opponentTeamName' value={opponentTeamName} onChange={inputChange}/></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><Count name='firstSetMyCount' onChange={selectChange}/></td>
            <td>FIRST SET</td>
            <td><Count name='firstSetOpponentCount' onChange={selectChange}/></td>
          </tr>
          <tr>
            <td><Count name='secondSetMyCount' onChange={selectChange}/></td>
            <td>SECOND SET</td>
            <td><Count name='secondSetOpponentCount' onChange={selectChange}/></td>
          </tr>
          <tr>
            <td><Count name='thirdSetMyCount' onChange={selectChange}/></td>
            <td>THIRD SET</td>
            <td><Count name='thirdSetOpponentCount' onChange={selectChange}/></td>
          </tr>
          <tr>
            <td><Count name='victoryThrowMyCount' onChange={selectChange}/></td>
            <td>VICTORY THROW</td>
            <td><Count name='victoryThrowOpponentCount' onChange={selectChange}/></td>
          </tr>
          <tr>
            <td>{totalMyCount}</td>
            <td>TOTAL SET</td>
            <td>{totalOpponentCount}</td>
          </tr>
          </tbody>
        </table>
        <button onClick={submit}>送信</button>
      
    </React.Fragment>
  );
}

export default Form;