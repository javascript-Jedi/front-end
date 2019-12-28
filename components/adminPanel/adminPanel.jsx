import React, { useState, useEffect } from 'react'
import { AdminPanelStyled } from './adminPanelStyled'
import { get } from '../../static/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import EditPanel from './EditPanel'

const AdminPanel = props => {
  const [user, setUser] = useState('unset')
  const [courses, setCourses] = useState([])
  const [modules, setmodules] = useState([])
  const [lessons, setLessons] = useState([])
  const [parts, setParts] = useState([])
  const [exersices, setExersices] = useState([])
  const [dataForEdit, setDataForEdit] = useState(undefined)
  
  useEffect(() => {
    get('courses','', (res) => {setCourses(res)})
    get('modules','', (res) => setmodules(res))
    get('lessons','', (res) => setLessons(res))
    get('parts','', (res) => setParts(res))
    get('exersices','', (res) => setExersices(res))
  }, [])

  if (typeof window !== 'undefined' && user === 'unset') {
    setUser(JSON.parse(localStorage.getItem('user')))
  }

  if (user != 'unset' && !user.isAdmin) {
    history.pushState(null, null, '/')
    window.location.reload()
  }

  return (
    <AdminPanelStyled>
      {dataForEdit && <EditPanel {...dataForEdit}/>}
      <div className="wrapper">
        <div className="courses">
          <h2>Courses</h2>
          <div className="cards">
            {courses && courses.map(e => 
              <Card key={e._id} setDataForEdit={setDataForEdit} {...e}/>
              )}
          </div>
        </div>
        <div className="courses">
          <h2>Modules</h2>
        </div>
        <div className="courses">
          <h2>Lessons</h2>
        </div>
        <div className="courses">
          <h2>Parts</h2>
        </div>
        <div className="courses">
          <h2>Exersices</h2>
        </div>
      </div>
    </AdminPanelStyled>
  )
}

const Card = (props) => {
  return (
    <div className='card'>
      {props.imgUrl && <img src={props.imgUrl}/>}
      <span>{props.title}</span>
      <div className="editIcon">
        <FontAwesomeIcon onClick={() => {props.setDataForEdit(props)}} icon={faEdit} />
      </div>
    </div>
  )
} 

export default AdminPanel
