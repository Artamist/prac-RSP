/** @jsx createElement **/

import React from 'react'
import { Component } from 'react'
import { Form } from './Form'
import { Field } from './Field'
import { Task, Roles } from '../task'

import TaskButtonsComponent from './TaskButtons'
import { TaskButtons } from '../taskButtons'
import { CreateTaskPopup } from '../createTaskPopup'

const taskButtonsData: TaskButtons[] = [
  {
    label: 'Button1',
    handler: () => console.log('Hello World'),
    roles: ['user'],
    color: 'primary'
  }
]

function renderCreateTaskPopup(createTaskPopup: CreateTaskPopup[], currentRole: Roles) {
  return createTaskPopup.map((createTaskPopup: CreateTaskPopup) => {
    const {url, label, roles, completed } = createTaskPopup
    
    if (!roles.includes(currentRole)) return

    return (
      <Form action="http://localhost:4351/api/contactus">
        <div className="alert alert-info" role="alert">
        Create Task
        </div>
        <Field id="title" label="Title" />
        <Field id="task" label="Task" editor="multilinetextbox" />
        <Field
          id="time"
          label="Time"
          editor="dropdown"
          options={["Select", "12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"]}
        />
        <Field
          id="month"
          label="Time"
          editor="dropdown"
          options={["Month", "January", "February", "March", "April", "May", "June", "July", "August", "October", "November", "December"]}
        />
        <Field
          id="day"
          editor="dropdown"
          options={["Day", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}
        />
        <Field
          id="year"
          editor="dropdown"
          options={["Year", "2020", "2021", "2022", "etc"]}
        />
        <Field
          id="frequency"
          label="Frequency"
          editor="dropdown"g
          options={["Select", "Daily", "Alternating days", "Weekly", "Bi-weekly", "Monthly"]}
        />
        <div className='task-list-style'>
          <ul>
            <li>
              <a href={url}>{label}</a>
              <TaskButtonsComponent 
                taskButtonsData={taskButtonsData} 
                role={'user'} 
              />
            </li>
          </ul>
        </div>
      </Form>
    )
  })
}

interface Props {
  createTaskData: <CreateTaskPopup>
  role: Roles
}

const CreateTaskComponent: FC<Props> = ({ createTaskPopup, role }) => {
  return (
    <div className='createtask'>
      {renderCreateTaskPopup(createTaskPopup, role)}
    </div>
  )
}

export default CreateTaskComponent
