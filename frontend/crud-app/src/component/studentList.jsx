import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.css'
import axios from 'axios';


export default function StudentList() {

  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    place: ''
  });

  const handleClearForm = () => {
    setFormData({
      name: '',
      email: '',
      place: ''
    });
  };


  //Fetch Student List from database.
  // State for pagination
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(30);

  const fetchStudentList = async () => {
    try {
      const response = await fetch('http://localhost:8080/crud/student/list');

      // for pagination and sorting uncomment below link
      // const response = await fetch(`http://localhost:8080/crud/student/list/${start}/${end}`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setStudentList(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch when start or end changes
  useEffect(() => {
    fetchStudentList();
  }, [start, end]);  

  const loadMore = () => {
    setStart(end + 1);
    setEnd(end + 30); 
    setLoading(true); 
  };



  //delete Student from the database once user give the confirmation.
  const handleDeleteStudentInfo = async (studentId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8080/crud/student/delete/${studentId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete student');
        }
        setStudentList(studentList.filter(student => student.id !== studentId));
        alert("Student deleted successfully.");
      }
      catch (error) {
        alert(error.message || "An error occurred while deleting the student.");
      }
    }
  };


  //update Student from the database once user give the confirmation.
  const handleUpdateStudentInfo = async (studentId) => {
    const confirmUpdate = window.confirm("Are you sure you want to update this student?");
    if (confirmUpdate) {
      navigate(`/student/update/${studentId}`);
    }
  };


  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //serach student from student List
  const handleSearchForm = (e) => {
    axios.post('http://localhost:8080/crud/search/student', formData)
      .then(response => {
        if (response.status === 200) {
          alert(response.data.length);  // Show the number of students returned
          setStudentList(response.data); // Update the student list with the response data
        }
        console.log('Data submitted successfully:', response);
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
        alert('Error while submitting the form.');
      });
  };


  return (
    <>
      <div id="student_list">
        <div id='student-list'>
          <label>Student List</label>
        </div>
        <div className='mt-2 text-right mr-3 right-item'>
          <Link to="/student/new"><button type='button' className='btn btn-sm btn-primary font-weight'>Add New Student</button></Link>
        </div>
        <div id="list">
          <div id="student-search">
            <h6 className='font-weight p-2'>Search Criteria</h6>
            <form className='mb-3 p-3'>
              <div className='row'>
                <div className='col-md-4'>
                  <label className='font-weight mb-1'>Search by Student First Name</label>
                  <div className='d-flex align-items-center position-relative'>
                    <input type="text" name="name" className='form-control-sm form-control' placeholder='Enter Student name to search' onChange={handleChanges} />
                    <i class="fa fa-search search ms-2" onClick={handleSearchForm}></i>
                  </div>
                </div>
                <div className='col-md-4'>
                  <label className='font-weight mb-1'>Search by Student Email</label>
                  <div className='d-flex align-items-center position-relative'>
                    <input type="text" name="email" className='form-control-sm form-control' placeholder='Enter Student name to search' onChange={handleChanges} />
                    <i class="fa fa-search search ms-2" onClick={handleSearchForm}></i>
                  </div>

                </div>
                <div className='col-md-4'>
                  <label className='font-weight mb-1'>Search by Student City</label>
                  <div className='d-flex align-items-center position-relative'>
                    <input type="text" name="place" className='form-control-sm form-control' placeholder='Enter Student City onChange={handleChanges}' />
                    <i class="fa fa-search search ms-2" onClick={handleSearchForm}></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div id="sub-list">
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <td>S.No.</td>
                  <td>Student Name</td>
                  <td>Father Name</td>
                  <td>Standard(class)</td>
                  <td>Contact No.</td>
                  <td>Email</td>
                  <td>City</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {studentList.length > 0 ? (
                  studentList.map((student, index) => (
                    <tr key={index}>
                      <td className="text-center font-weight">{index + 1}</td>
                      <td>{student.firstName} {student.lastName}</td>
                      <td>{student.fatherName}</td>
                      <td className="text-center font-weight">{student.standard}<sup>th</sup></td>
                      <td className="font-weight">+91&nbsp;-&nbsp;{student.phone}</td>
                      <td>{student.email}</td>
                      <td>{student.city}</td>
                      <td className='action'>
                        {/* <button><i class="fa fa-ellipsis-v"></i></button> */}
                        <button onClick={() => handleUpdateStudentInfo(student.id)} className="btn btn-link">
                          <i className="fa fa-pencil" style={{ color: 'blue' }}></i>
                        </button>
                        <button onClick={() => handleDeleteStudentInfo(student.id)} className="btn btn-link">
                          <i className="fa fa-trash" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">No students available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
