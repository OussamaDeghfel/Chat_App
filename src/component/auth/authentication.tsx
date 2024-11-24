import { useState } from "react";

import { Form, Input, Button, Checkbox } from "antd";

import messagebackground from "../../assets/messagebackground.webp";

import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase";
import { User } from "firebase/auth";

import { Navigate } from "react-router-dom";


const Authentication = ({ user }: {user: User | null}) => {
  const [isSignIn, setIsSignIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = () => {
    if(!email || !password) return
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log("USER : ", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    })
  }
  const handleSignIn = () => {
    if(!email || !password) return
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log("USER : ", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    })
  }

  if(user) return <Navigate to="/allChat"></Navigate>

  return (
    <div className="w-full h-full bg-contain flex justify-center items-center " style={{ backgroundImage: `url(${messagebackground})` }}>
        <div className="w-full h-full justify-center items-center flex bg-black/70" >
      <div className="w-1/3 h-fit border-2 bg-slate-400 border-slate-900 p-4 rounded-md space-y-4 shadow-neutral-800 shadow-lg">
      {isSignIn ? <h1 className="text-center font-bold text-3xl text-white">Sign Up</h1> : <h1 className="text-center font-bold text-3xl text-white">Sign In</h1>}
        <Form name="login" layout="vertical">
          {isSignIn && (
            <>
            <Form.Item name={"username"} label="User Name" rules={[{ required: true, message: "Please enter your First Name!" }]}>
              <Input placeholder="Enter your UserName" />
            </Form.Item>
            
          </>
          )}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
            {!isSignIn && (<Form.Item>
            <Button type="primary" htmlType="submit" block onClick={handleSignIn}>
              Sign IN
            </Button>
          </Form.Item>)}
          {isSignIn && (<Form.Item>
            <Button type="primary" htmlType="submit" block onClick={handleSignUp}>
              Sign Up
            </Button>
          </Form.Item>)}
          
        </Form>
        {!isSignIn ? (<button className="w-full h-full text-white text-center" onClick={() => setIsSignIn(true)}>Create Account</button>) : (<button className="w-full h-full text-white text-center" onClick={() => setIsSignIn(false)}>Already have an account</button>)}
        
        
      </div>
      </div>
    </div>
  );
};

export default Authentication;
