import React, { useEffect, useState } from 'react'
import style from "./view.module.css"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const View = () => {

  const [PatinetDetails, setPatinetDetails] = useState([])
  const [Id, setId] = useState()

  useEffect(() => {
    if (Id > 0) {
      axios.get(`http://localhost:8080/patient/details/${Id}`)
        .then((response) => {
          if (response.data.body === "No patient found") {
            setTimeout(() => {
              window.alert("Invalid Id")
            }, 3000);
          } else {
            setPatinetDetails(response.data.body)
          }
        })
        .catch(() => {
          window.alert("Server Down")
        })
    }
    else {
      axios.get(`http://localhost:8080/patient/details`)
        .then((response) => {
          setPatinetDetails(response.data.body)
        })
        .catch(() => {
            window.alert("Server Down")
        })
    }

  }, [Id])

  const deletePatient = (id) => {
    axios.delete(`http://localhost:8080/patient/delete/${id}`)
    window.location.assign('/patient/details')
  }



  return (
    <main>
      {/* The search bar */}
      <header id={style.searchBar}>
        <input type="number" placeholder='Search Patient by id' value={Id} onChange={(e) => { setId(e.target.value) }} />
      </header>
      {/* The table of the patient */}
      <body id={style.detailsTable}>
        <table border={1}>
          <thead id={style.tableHead}>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Covid Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {PatinetDetails.map((body) => {
              return (
                <tr id={style.box} key={body.patient_id}>
                  <td>{body.patient_id}</td>
                  <td>{body.patient_name}</td>
                  <td>{body.covid_status}</td>
                  <td><button id={style.edit}> <Link to={`/patient/edit/${body.patient_id}`}><FontAwesomeIcon icon={faPenToSquare} size="lg"/></Link> </button></td>
                  <td><button id={style.delete}><FontAwesomeIcon icon={faTrashCan} size="lg" onClick={() => { deletePatient(body.patient_id) }} /></button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </body>
    </main>
  )
}


export default View