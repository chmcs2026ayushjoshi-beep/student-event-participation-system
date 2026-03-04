import {FolderClock} from 'lucide-react'
import { Link } from 'react-router'

const ParticipationNotFound = () =>{
  return(
    <div className='flex flex-col items-center justify-center py-16
    space-y-6 max-w-md mx-auto text-center'>
    <div className='bg-primary/10 rounded-full p-8'>


    <FolderClock  className='size-10 text-primary' />

    
    </div>
    <h3 className='text-2xl font-bold'> No participation yet</h3>
    <p className='text-base-content/70'> 
    Ready to add participation? Add first participation to the Event Participation System.
    </p>
    <Link to= '/create' className='btn btn-primary'>
      Add First Participation to the Event Participation System
    </Link>
    </div>
  )
}

export default ParticipationNotFound
