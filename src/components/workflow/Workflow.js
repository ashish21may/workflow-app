import React, { useState } from 'react'
import './Workflow.css'

const WorkFlowContainer = () => {
  const initialWorkFlow = {
    name: '',
    status: '',
    id: null
  }

  const [workFlow, setWorkFlow] = useState('')

  const handleSelect = e => {}

  return (
    <div className='workflow-container'>
      <div className='workflow-header'>
        <input className='workflow-search' type='input' />
        <div class='input-group mb-3'>
          <select class='custom-select' id='inputGroupSelect01'>
            <option selected>Choose...</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <button className='workflow-create'>
          {' '}
          <b>+</b> Create Workflow{' '}
        </button>
      </div>
      <hr style={{ width: '100%' }} />

      <div className='workflow-body'>
      <div class='card w-50'>
          <div class='card-body'>
            <input class='card-title' />
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href='#' class='btn btn-primary'>
              Completed
            </a>
            <a href='#' class='btn btn-danger'>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkFlowContainer
