import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../redux/postSlice";

export default function PostsCreator() {
  const dispatch = useDispatch();
  const [whereInput, setWhereInput] = useState('');
  const [whenInput, setWhenInput] = useState('');
  const testName = useSelector((state) => state.user.username) || 'falseName';

  function postButtonClick(name) {
    const testName = 'testName'
    const body = { placeId: whereInput, expirationTime: whenInput, owner: name }

    dispatch(addPost(body))
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
      .catch((err) => console.log(err))

    setWhereInput('');
    setWhenInput('');
  }

  return (
    <div className="postBox">
      <form className="post">
        <input value={whereInput} type="text" onChange={(e) => {
          setWhereInput(e.target.value);
        }} name="wherePost" placeholder="Where are you going?" />
        <input value={whenInput} type="datetime-local" onChange={(e) => {
          setWhenInput(e.target.value)
        }} name="whenPost" placeholder="What time?" />
        <button className="postButton" onClick={(e) => {
          e.preventDefault()
          postButtonClick(testName);
        }}>Post</button>
      </form>
    </div>
  )
}
