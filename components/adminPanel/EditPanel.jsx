import React, { useState, useEffect } from 'react'
import { EditPanelSt } from './adminPanelStyled'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditPanel = props => {
  useEffect(() => {}, [data])

  const [data, setdata] = useState(props)
  const removeElFromArray = (array, value) => {
    return array.filter(e => {
      return e != value
    })
  }

  return (
    <EditPanelSt>
      <div className="header">
        <h2>Edit</h2>
        <FontAwesomeIcon
          onClick={() => {
            props.setDataForEdit(undefined)
          }}
          icon={faTimes}
        />
        {data.objType == 'parts' && (
          <Parts
            removeElFromArray={(array, value) => {removeElFromArray(array, value)}}
            setdata={setdata}
            data={data}
          />
        )}
        {data.objType == 'modules' && <Modules setdata={setdata} removeElFromArray={(array, value) => {removeElFromArray(array, value)}} data={data} />}
        {data.objType == 'lessons' && <Lessons setdata={setdata} removeElFromArray={(array, value) => {removeElFromArray(array, value)}} data={data} />}
        {data.objType == 'exercises' && (
          <Exercises setdata={setdata} data={data} removeElFromArray={(array, value) => {removeElFromArray(array, value)}} />
        )}
        {data.objType == 'courses' && <Courses setdata={setdata} removeElFromArray={(array, value) => {removeElFromArray(array, value)}} data={data} />}
      </div>
    </EditPanelSt>
  )
}

const Parts = props => {
  debugger
  return (
    <div className="inputs">
      <div>
        <span>Title</span>
        <input type="text" value={props.title} />
      </div>
    </div>
  )
}
const Modules = props => {
  return (
    <div className="inputs">
      <div>
        <span>Title</span>
        <input type="text" value={props.title} />
      </div>
    </div>
  )
}
const Lessons = props => {
  return (
    <div className="inputs">
      <div>
        <span>Title</span>
        <input type="text" value={props.title} />
      </div>
    </div>
  )
}
const Exercises = props => {
  return (
    <div className="inputs">
      <div>
        <span>Title</span>
        <input type="text" value={props.title} />
      </div>
    </div>
  )
}
const Courses = props => {
  debugger
  return (
    <div className="inputs">
      <div>
        <span>ID</span>
        <input type="text" value={props.data._id} />
      </div>
      <div>
        <span>Title</span>
        <input type="text" value={props.data.title} />
      </div>
      <div>
        <span>Img url</span>
        <input type="text" value={props.data.imgUrl} />
      </div>
      <div>
        <span>Level</span>
        <input type="numbers" value={props.data.level} />
      </div>
      <div>
        <span>Для кого</span>
        <div className="withInputs">
          <div>
            {props.data.forWhom.map(e => (
              <textarea type="text" value={e} />
            ))}
          </div>
          <button
            onClick={() => {
              const tempArray = props.data.forWhom
              tempArray.push(' ')
              props.setdata({ ...props.data, forWhom: tempArray })
            }}
          >
            {' '}
            Add input
          </button>
        </div>
      </div>
      <div>
        <span>Чого навчишся</span>
        <div className="withInputs">
          <div>
            {props.data.willLearn.map(e => (
              <textarea type="text" value={e} />
            ))}
          </div>
          <button
            onClick={() => {
              const tempArray = props.data.willLearn || []
              tempArray.push(' ')
              props.setdata({ ...props.data, willLearn: tempArray })
            }}
          >
            {' '}
            Add input
          </button>
        </div>
      </div>
      <div>
        <span>Що отримаєш</span>
        <div className="withInputs">
          <div>
            {props.data.willGet && props.data.willGet.map(e => ( <>
              <textarea type="text" value={e} />
              <button
                  onClick={() => {
                    const res = props.removeElFromArray(props.data.willGet, e)
                    props.setdata({...props.data, willGet: res})
                  }}
                >
                  Delete
                </button> </>
            ))}
          </div>
          <button
            onClick={() => {
              const tempArray = props.data.willGet || []
              tempArray.push(' ')
              props.setdata({ ...props.data, willGet: tempArray })
            }}
          >
            {' '}
            Add input
          </button>
        </div>
      </div>
      {/* <div>
        <span>Модулі</span>
        <div className="withInputs">
          <div>
            {props.data.willGet && props.data.willGet.map(e => (
              <>
                <textarea type="text" value={e} />
                <button
                  onClick={() => {
                    debugger
                    const res = props.removeElFromArray(props.data.willGet, e)
                    props.setdata({...props.data, willGet: res})
                  }}
                >
                  Delete
                </button>
              </>
            ))}
          </div>
          <button
            onClick={() => {
              const tempArray = props.data.willGet
              tempArray.push(' ')
              props.setdata({ ...props.data, willGet: tempArray })
            }}
          >
            {' '}
            Add input
          </button>
        </div>
      </div> */}
    </div>
  )
}
export default EditPanel
