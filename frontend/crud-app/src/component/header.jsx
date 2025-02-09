import React from 'react'
import '../component/component.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.css'

export default function Header() {
  return (
    <>
        <div id='header'>
            <div className='row'>
                <div className='col col-sm-12 heading'>
                    <label>Student CRUD</label>
                </div>
                {/* <div className='col col-sm-8 sub-heading'>
                    <ul>
                        <li><i class="fa fa-list" style={{color:'green'}}></i>&nbsp;Student List</li>
                        <li><i class="fa fa-solid fa-plus-square" style={{color:'black'}}></i>&nbsp;New Student</li>
                        <li><i class="fa fa-pencil" style={{color:'blue'}}></i>&nbsp;Update Sudent</li>
                        <li><i class="fa fa-trash" style={{color:'red'}}></i>&nbsp;Delete Student</li>
                    </ul>
                </div> */}
            </div>
        </div>
    </>
  )
}
