import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../redux/postSlice";
import SearchForm from './SearchForm.jsx';
import { useNavigate } from 'react-router-dom';
import "../styles/postsCreator.css"

export default function PostsCreator() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const [whereInput, setWhereInput] = useState('');
  const [whenInput, setWhenInput] = useState('');
  const testName = useSelector((state) => state.user.username) || 'falseName';

  function postButtonClick(e) {
    const testName = 'testName'
    let address = e.target.parentElement.firstChild.firstChild.value
    const placeName = address.slice(0, address.indexOf(','))
    address = address.split(' ').join('+')
    const body = { placeId: placeName, expirationTime: whenInput, owner: user, address }

    if (!address || !whenInput) {
      return;
    }


    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }
    fetch('/posts', requestOptions)
      .then(res => res.json())
      .then((data) => console.log(data))
      .then((data) => {
        navigate('/listview')
      })
      .catch((err) => console.log(err))

    setWhereInput('');
    setWhenInput('');
  }

  return (
    <div className="postBox">
      <form className="post">
        <SearchForm />
        {/* <input value={whereInput} type="text" onChange={(e) => {
          setWhereInput(e.target.value);
        }} name="wherePost" placeholder="Name of place" /> */}
        <input value={whenInput} type="datetime-local" onChange={(e) => {
          setWhenInput(e.target.value)
        }} name="whenPost" placeholder="What time?" />
        <button className="postButton" onClick={(e) => {
          e.preventDefault()
          postButtonClick(e);
        }}>Post</button>
      </form>
    </div>
  )
}
