import React, { FC } from 'react'
import { Form } from './Form'
import { Toggle } from './Toggle'
import { Field } from './Field'
// import { Roles } from '../task'

// import TaskButtonsComponent from './TaskButtons'
// import { TaskButtons } from '../taskButtons'
// import { CreateTaskPopup } from '../createTaskPopup'

// const taskButtonsData: TaskButtons[] = [
//   {
//     label: 'Button1',
//     handler: () => console.log('Hello World'),
//     roles: ['user'],
//     color: 'primary'
//   }
// ]

export const CreateTaskComponent: React.SFC = () => {
  return (
    <div className='create-task-wrapper'>
      <Form
        action='http://localhost:4351/api/contactus'>
            <header className='alert alert-info' role='alert'>
              Create Custom Task
            </header>
            <Field id='title' label='Title' />
            <Field id='task' label='Task' editor='multilinetextbox' />
            <Toggle>
              <Field
                id='time'
                label='Time'
                editor='dropdown'
                options={[
                  'Select',
                  '12:00 AM',
                  '01:00 AM',
                  '02:00 AM',
                  '03:00 AM',
                  '04:00 AM',
                  '05:00 AM',
                  '06:00 AM',
                  '07:00 AM',
                  '08:00 AM',
                  '09:00 AM',
                  '10:00 AM',
                  '11:00 AM',
                  '12:00 PM',
                  '01:00 PM',
                  '02:00 PM',
                  '03:00 PM',
                  '04:00 PM',
                  '05:00 PM',
                  '06:00 PM',
                  '07:00 PM',
                  '08:00 PM',
                  '09:00 PM',
                  '10:00 PM',
                  '11:00 PM'
                ]}
              />
              <Field
                id='month'
                label='Date'
                editor='dropdown'
                options={[
                  'Month',
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'October',
                  'November',
                  'December'
                ]}
              />
              <Field
                id='day'
                editor='dropdown'
                options={[
                  'Day',
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
                ]}
              />
              <Field
                id='year'
                editor='dropdown'
                options={['Year', '2020', '2021', '2022', 'etc']}
              />
              <Field
                id='frequency'
                label='Frequency'
                editor='dropdown'
                options={[
                  'Select',
                  'Daily',
                  'Alternating days',
                  'Weekly',
                  'Bi-weekly',
                  'Monthly'
                ]}
              />
            </Toggle>
      </Form>
    </div>
  )
}
export default CreateTaskComponent
