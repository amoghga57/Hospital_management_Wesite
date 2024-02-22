import React, { useRef, useState } from 'react'
import style from "./create.module.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const Create = () => {
  const [Name, setName] = useState("")
  const [Age, setAge] = useState("")
  const [Phone, setPhone] = useState("")
  const [Status, setStatus] = useState("")
  const [Address, setAddress] = useState("")
  const [City, setCity] = useState("")
  const [State, setState] = useState("")
  const [Res, setRes] = useState("")
  const [PhoneResult, setPhoneResult] = useState("")

  const submitButt = useRef(null)
  const popUp = useRef(null)
  const load = useRef(null)

  const submitDetails = (e) => {
    if (checkLength()) {
      let obj = {
        "patient_name": Name,
        "age": Age,
        "city": City,
        "state": State,
        "address": Address,
        "phone": Phone,
        "covid_status": Status
      }
      axios.post(`http://localhost:8080/patient/save`, obj)
        .then((response) => { result(response) })
        .catch(() => { window.alert("Server Down") })
    } else {
      checkLength()
    }
    e.preventDefault();
  }

  let result = (response) => {
    submitButt.current.style.backgroundColor = "green"
    popUp.current.style.visibility = "visible"
    load.current.style.display="flow-root"
    setRes(response.data.body)
    setTimeout(() => {
      window.location.assign("/patient/details")
    }, 3000);
  }

  let checkLength = () => {
    if (Phone.length !== 10) {
      setTimeout(() => {
        window.alert("Enter a valid Phone Number")
      }, 1000);
      return false;
    } else {
      return true;
    }
  }

  let phoneValid=(phone)=>{
    axios.get(`http://localhost:8080/patient/phone/${phone}`)
    .then((response)=>{
      if(response.data.body){
        setPhoneResult(response.data.message)
      }else{
        setPhoneResult(response.data.message)
      }
    })
    .catch(()=>{ })
  }

  return (
    <main>
      <div id={style.head}>New Patient </div>
      <div id={style.section}>
        <aside id={style.pop} ref={popUp} >{Res}</aside>
        <div id={style.load} ref={load}><FontAwesomeIcon icon={faRotate} spin style={{color: "green",}} /></div>
        <article id={style.box}>
          <form id={style.form} onSubmit={(e) => { submitDetails(e) }} >
            <div id={style.colum}>
              <aside>
                <input type="text" placeholder='Patient Name' value={Name} onChange={(e) => { setName(e.target.value) }} required /><br />
                <input type="number" placeholder='Patient Age' value={Age} onChange={(e) => { setAge(e.target.value) }} required /><br />
                <input type="number" placeholder='Patient Phone Number' onBlur={checkLength} value={Phone}  onChange={(e) => { setPhone(e.target.value) ; phoneValid(Phone) }}  required /><br />
                <label>{PhoneResult}</label>
                <input type="text" placeholder='Patient Covid Status' value={Status} onChange={(e) => { setStatus(e.target.value)  }} required /><br />
              </aside>
              <div>
                <textarea cols="50" rows="3" placeholder='Address' value={Address} onChange={(e) => { setAddress(e.target.value) }} required ></textarea><br />
                <input type="text" placeholder='City' value={City} onChange={(e) => { setCity(e.target.value) }} required />
                <input type="text" placeholder='State' value={State} onChange={(e) => { setState(e.target.value) }} required />
              </div>
            </div>
            <div>
              <button type="submit" ref={submitButt} >Submit</button>
            </div>
          </form>
        </article>
      </div>
    </main>
  )
}

export default Create