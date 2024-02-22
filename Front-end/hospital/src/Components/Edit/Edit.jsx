import React, { useEffect, useRef, useState } from 'react'
import style from "../Create/create.module.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const Edit = () => {

  const x = useParams()
  const Id=x.id

  useEffect(() => {
    axios.get(`http://localhost:8080/patient/details/${Id}`)
    .then((response)=>{
      let patient=response.data.body[0]
      setName(patient.patient_name)
      setAge(patient.age)
      setPhone(patient.phone)
      setStatus(patient.covid_status)
      setAddress(patient.address)
      setCity(patient.city)
      setState(patient.state)
    })
    .catch(()=>{
      window.alert("Server down")
    })
  }, [Id])
  

  const [Name, setName] = useState("")
  const [Age, setAge] = useState("")
  const [Phone, setPhone] = useState("")
  const [Status, setStatus] = useState("")
  const [Address, setAddress] = useState("")
  const [City, setCity] = useState("")
  const [State, setState] = useState("")
  const [Res, setRes] = useState("")

  const submitButt = useRef(null)
  const popUp = useRef(null)
  const load = useRef(null)

  const submitDetails = (e) => {
    let obj = {
      "patient_name": Name,
      "age": Age,
      "city": City,
      "state": State,
      "address": Address,
      "phone": Phone,
      "covid_status": Status
    }
    axios.put(`http://localhost:8080/patient/edit/${Id}`, obj)
      .then((response) => {
        result(response)
      })
      .catch(() => {
        window.alert("Server Down")
      })
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

    return (
        <main>
          <div id={style.head}>Edit Patient Deatils</div>
          <div>
            <aside id={style.pop} ref={popUp} >{Res}</aside>
            <div id={style.load} ref={load}><FontAwesomeIcon icon={faRotate} spin style={{color: "green",}} /></div>
            <article id={style.box}>
              <form id={style.form} onSubmit={(e) => { submitDetails(e) }} >
                <div id={style.colum}>
                  <aside>
                    <input type="text" placeholder='Patient Name' required value={Name} onChange={(e) => { setName(e.target.value) }} /><br />
                    <input type="number" placeholder='Patient Age' required value={Age} onChange={(e) => { setAge(e.target.value) }} /><br />
                    <input type="number" placeholder='Patient Phone Number' onBlur={checkLength} required value={Phone} onChange={(e) => { setPhone(e.target.value) }} /><br />
                    <input type="text" placeholder='Patient Covid Status' required value={Status} onChange={(e) => { setStatus(e.target.value) }} /><br />
                  </aside>
                  <div>
                    <textarea cols="50" rows="3" placeholder='Address' required value={Address} onChange={(e) => { setAddress(e.target.value) }} ></textarea><br />
                    <input type="text" placeholder='City' required value={City} onChange={(e) => { setCity(e.target.value) }} /> 
                    <input type="text" placeholder='State' required value={State} onChange={(e) => { setState(e.target.value) }} /> 
                    </div>
                </div>
                <div>
                  <button type="submit" ref={submitButt} >Update</button>
                </div>
              </form>
            </article>
          </div>
        </main>
    )
  }

  export default Edit