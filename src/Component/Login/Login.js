import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import React from 'react';
import { FormGroup } from '@material-ui/core';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import google from '../../images/icons/google.png';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
const Login = () => {
    const [loggedIn, setLoggedIn,name, setName]=useContext(UserContext);
    
        const [confirmationError, setConfirmationError]=useState(false)
        const [isSignedUp, setisSignedUp]=useState(false)
        const [submiter, setSubmiter]=useState("")
        const [user, setUser]=useState({})
        const location=useLocation().location?.pathname
        const history=useHistory()
        const [verified, setVerified]=useState("null")
        const [verifyMessage, setVerifyMessage]=useState(false)
        
    
        const formHandler=(event)=>{
    
            event.preventDefault()
    //Signup with email and password
                if(submiter === "signup") {
                    user.password===user.confirmationPassword ?
                    firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
                    .then(res=>{
                        setConfirmationError(false)
                        setUser({...user, signupError:""})
                        setisSignedUp(true)
                        setVerifyMessage(true)
                        const currentUser = firebase.auth().currentUser;
                        currentUser.updateProfile({
                        displayName: `${user.fname} ${user.lname}`
                        })
                        currentUser.sendEmailVerification()
    
                    })
                    .catch(err=>{
                        setUser({...user, signupError:err.message})
                    })
                    : setConfirmationError(true)
                }
            
    
    // Sign in with email and password
            
    
            if(submiter === "signin"){
                setVerifyMessage(false)
                setUser({...user, signinError:""})
                        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
                        .then(res=>{
                            const currentUser = firebase.auth().currentUser;
                            setName(currentUser.displayName)
                            if(currentUser.emailVerified){
                                setLoggedIn(true)
                                history.replace(location || "/" )
                            }else{
                                currentUser.sendEmailVerification()
                                setVerified("false")
                            }
    
                        })
                        .catch(err=>{
                            setUser({...user, signinError:err.message})
                        })
                    
                 }     
        }
    
    
    // Google sign in handle
        const googleSigninHandler =()=>{
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(res=>{
                const currentUser = firebase.auth().currentUser;
                setName(currentUser.displayName)
                setLoggedIn(true)
                history.replace(location || '/')
            })
            .catch(err=>{
                setUser({...user, signinError:err.message})
            })
        }
    
    
    //signup and login toogler button
        const loginToggleHandler=()=>{
            setisSignedUp(true)
            setConfirmationError(false) 
            setUser({...user, signupError:""})
        }
    
        const signupToggleHandler=()=>{
            setisSignedUp(false)
            setUser({...user, signinError:""})
        }
       
        //Password reset
        const sendVerification=(email)=>{
            firebase.auth().sendPasswordResetEmail(email)
        }
    return (
        <div>
              <form onSubmit={formHandler}
        className="form-group auth-form-group"> 

            {
                    verifyMessage && 
                        <h5 style={{
                            textAlign:"center",
                            width:"200px",
                            margin:"auto",
                            padding:"7px",
                            borderRadius:"30px",
                            background:"#268b268c",
                            color:"white"
                        }}>
                            Verification mail sent!
                        </h5>
                }

            <FormGroup>
                {
                    isSignedUp? <h2 style={{textAlign:"left"}}>Login</h2>
                    : <h2 style={{textAlign:"left"}}>Create an account</h2>
                }

                {
                    !isSignedUp && <>
                        <input style={{marginTop:'20px',}} onBlur={(event)=>setUser({...user,fname:event.target.value})}
                            type="text" placeholder="First name" required/>
                        <input style={{marginTop:'20px'}}  onBlur={(event)=>setUser({...user,lname:event.target.value})}
                            type="text" placeholder="Last name" required/>
                    </> 
                }

                <input style={{marginTop:'20px'}}  onBlur={(event)=>setUser({...user,email:event.target.value})}
                    type="email" placeholder="Email address" required/>

                <input style={{marginTop:'20px'}}  onBlur={(event)=>setUser({...user,password:event.target.value})}
                    type="password" placeholder="Password" required/>
                {
                    !isSignedUp && 
                        <input style={{marginTop:'20px'}}  onBlur={(event)=>setUser({...user,confirmationPassword:event.target.value})}
                            type="password" placeholder="Confirm Password" required/>
                }

                {
                    isSignedUp && 
                        <div style={{display:"flex", justifyContent:"space-between", fontSize:"13px", fontWeight:"500"}}>
                            <div style={{display:"flex", alignItems:"center"}}>     
                                <input id="checkbox" type="Checkbox" />
                                <label htmlFor="checkbox" style={{marginBottom:"6px"}}>
                                    Remember me
                                </label>
                            </div>
                            <p onClick={ ()=>user.email && sendVerification(user.email)} style={{color:"red", cursor:"pointer"}}>Forgot Password</p>
                        </div>
                }

                {
                    user.signinError ?
                        <p style={{color:"red", fontSize:"13px"}}>
                            {user.signinError}
                        </p>
                    : ""
                }
                {
                     verified &&
                     verified==="false" &&
                        <p style={{color:"red", fontSize:"13px"}}>
                            Email Not verified ! Please check your email.
                        </p>

                }
                {
                     user.signupError ?
                        <p style={{color:"red", fontSize:"13px"}}>
                            {user.signupError}
                        </p>
                     : ""
                }
                
                {
                    confirmationError ?
                        <p style={{color:"red", fontSize:"13px"}}>
                            Doesn't match your password
                        </p>
                    : ""
                }
                {
                    isSignedUp ?
                    <input  name="signin" type="submit" value="Sign In" 
                        style={{cursor:"pointer", backgroundColor:'orange', border:'1px solid gray', borderRadius:'5px'}}
                        onClick={(event)=>setSubmiter(event.target.name)} />

                    : <input name="signup" type="submit" value="Sign Up"
                        style={{cursor:"pointer",backgroundColor:'orange', border:'1px solid gray', borderRadius:'5px',marginTop:'20px'}}
                        onClick={(event)=>setSubmiter(event.target.name)} />
                }
            </FormGroup>
                {
                    isSignedUp ?
                        <>
                            <span>Don't have an account? </span>
                            <span onClick={signupToggleHandler} 
                                style={{color:"blue",cursor:"pointer"}}>
                                    Sign Up
                            </span>
                        </>
                    
                    :<>
                        <span>Already have an account? </span>
                        <span onClick={loginToggleHandler} 
                            style={{color:"blue",cursor:"pointer"}}>
                                Login
                        </span>
                    </>
                    
                } 
        </form>

    { /* ----- OutSide of Form ------ */ }
       <div style={{width:"300px", margin:"auto", marginTop:'10px', marginBottom:'40px'}}>

            <div onClick={googleSigninHandler} 
                    style={{cursor:"pointer"}} 
                    className="auth-provider-section">
                <img style={{width:"20px", height:"20px", marginLeft:"10px"}} src={google} alt=""/>
                <p style={{marginLeft:'30px', paddingTop:'12px'}} >
                    Sign Up Using Google
                </p>
            </div>

        </div>
        </div>
    );
};

export default Login;