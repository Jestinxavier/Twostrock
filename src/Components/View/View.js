import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../Storage/PostContext';
import firebase from 'firebase';
import './View.css';
function View() {
  const {post} = useContext(PostContext)
  const [userdetails, setUserdetails] = useState(null)

  useEffect(() => {
    const {userId} = post;
    console.log(userId,"id")
    firebase.firestore().collection('usem').where("id","==",userId).get().then((res)=>{
      res.forEach(doc => {
        setUserdetails(doc.data())
        console.log(doc.data(),"doc.data()")
      });
    })
  }, [])

  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={post.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {post.price} </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        {userdetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userdetails.username}</p>
          <p>{userdetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
