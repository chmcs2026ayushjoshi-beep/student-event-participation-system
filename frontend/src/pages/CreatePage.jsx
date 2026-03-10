import React, { useState } from 'react';
import api from '../lib/axios';
import { ArrowLeftIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const CreatePage = () => {

  const [studentName, setStudentName] = useState('');
  const [rollNum, setRollNum] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [venue, setVenue] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const departmentMap = {
        IT: "Information Technology",
        BCOM: "Bachelor of Commerce",
        CS: "Computer Science"
      };

const fullDepartment = departmentMap[department] || department;

      await api.post('/', {
        studentName,
        rollNum: Number(rollNum),
        department,
        year: Number(year),
        eventTitle,
        eventCategory,
        eventDate,
        venue,
        registrationDate
      });

      toast.success('Participation created successfully!');
      navigate('/');

    } catch (error) {

      console.log('Error creating participation', error);
      toast.error('Failed to create participation.');

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-xl mx-auto'>

          <Link to='/' className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' /> Back
          </Link>

          <div className='card bg-base-100 shadow-lg'>
            <div className='card-body'>

              <h2 className='card-title text-2xl mb-6'>
                Create New Participation
              </h2>

              <form onSubmit={handleSubmit}>

                <div className='form-control mb-4 w-full'>
                  <label className='label'>
                    <span className='label-text'>Student Name</span>
                  </label>
                  <input
                    type='text'
                    className='input input-bordered w-full'
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                  />
                </div>

                <div className='form-control mb-4 w-full'>
                  <label className='label'>
                    <span className='label-text'>Roll Number</span>
                  </label>
                  <input
                    type='number'
                    className='input input-bordered w-full'
                    value={rollNum}
                    onChange={(e) => setRollNum(e.target.value)}
                    required
                  />
                </div>

                <div className='form-control mb-4'>
                <label className='label'>
                <span className='label-text'>Department</span>
                </label>

                <select className='select select-bordered w-full' value={department} onChange={(e)=>setDepartment(e.target.value)} required>

    <option value="">Select Department</option>
    <option value="Information Technology">Information Technology</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Bachelor of Commerce">Bachelor of Commerce</option>

  </select>
</div>

                <div className='form-control mb-4 w-full'>
                  <label className='label'>
                    <span className='label-text'>Year</span>
                  </label>
                  <input
                    type='number'
                    className='input input-bordered w-full'
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </div>

                <div className='form-control mb-4 w-full'>
                  <label className='label'>
                    <span className='label-text'>Event Title</span>
                  </label>
                  <input
                    type='text'
                    className='input input-bordered w-full'
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    required
                  />
                </div>

                <div className='form-control mb-4 w-full'>
                  <label className='label'>
                    <span className='label-text'>Event Category (Cultural, Technical, Sports)</span>
                  </label>
                  <input
                    type='text'
                    className='input input-bordered w-full'
                    value={eventCategory}
                    onChange={(e) => setEventCategory(e.target.value)}
                    required
                  />
                </div>

                <div className='form-control mb-4 w-full'>
                  <label className='label'>
                    <span className='label-text'>Event Date</span>
                  </label>
                  <input
                    type='date'
                    className='input input-bordered w-full'
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  />
                </div>

                <div className='form-control mb-4 w-full'>
                  <label className='label'>
                    <span className='label-text'>Venue</span>
                  </label>
                  <input
                    type='text'
                    className='input input-bordered w-full'
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    required
                  />
                </div>

                <div className='form-control mb-6 w-full'>
                  <label className='label'>
                    <span className='label-text'>Registration Date</span>
                  </label>
                  <input
                    type='date'
                    className='input input-bordered w-full'
                    value={registrationDate}
                    onChange={(e) => setRegistrationDate(e.target.value)}
                    required
                  />
                </div>

                <div className='card-actions justify-end'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Participation"}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreatePage;
