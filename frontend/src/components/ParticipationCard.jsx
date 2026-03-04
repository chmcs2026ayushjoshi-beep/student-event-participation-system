import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, CalendarDays, UserCircle, Edit2, Trash2, MapPin} from 'lucide-react';
import { formatDate } from '../lib/utils';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

const ParticipationCard = ({ participation, setParticipations }) => {

const [showModal, setShowModal] = useState(false);

const location = useLocation();

const isActive = location.pathname === `/participation/${participation._id}`;

const handleDelete = async () => {

try {

  await api.delete(`/${participation._id}`);

  setParticipations((prev) =>
    prev.filter((p) => p._id !== participation._id)
  );

  toast.success("Participation deleted successfully");

} catch {

  toast.error("Failed to delete participation");

} finally {

  setShowModal(false);

}

};

return (
<>

<Link
to={`/participation/${participation._id}`}
className={`relative block rounded-xl
bg-base-100 p-4 border transition-all duration-200
${isActive ? "border-primary shadow-lg" : "border-base-300"}
hover:border-primary hover:shadow-xl`}
>

<div className='flex justify-between items-start'>

<p className='text-xs text-base-content/60 truncate'>
{participation._id}
</p>

<span className='badge badge-secondary'>
Year {participation.year}
</span>

</div>

<div className='mt-4 space-y-2'>

<div className='flex items-center gap-2'>
<GraduationCap className='size-4 text-primary' />
<p className='font-medium text-base-content line-clamp-1'>
{participation.studentName}
</p>
</div>

<div className='flex items-center gap-2 text-base-content/70'>
<CalendarDays className='size-4 text-primary' />
<p className='text-sm line-clamp-1'>
{participation.eventTitle}
</p>
</div>

<div className='flex items-center gap-2 text-base-content/70'>
<MapPin className='size-4 text-primary' />
<p className='text-sm line-clamp-1'>
{participation.venue}
</p>
</div>

</div>

<div className='mt-6 flex justify-between items-center'>

<span className='text-xs text-base-content/60'>
{formatDate(new Date(participation.createdAt))}
</span>

<div className='flex items-center gap-4'>

{/* EDIT BUTTON */}
<Link
to={`/participation/${participation._id}`}
className='tooltip tooltip-warning'
data-tip="Edit Participation"
onClick={(e)=>e.stopPropagation()}
>

<Edit2 className='size-4 text-warning hover:scale-110 transition' />

</Link>

{/* DELETE BUTTON */}
<div className='tooltip tooltip-error' data-tip="Delete Participation">

<button
onClick={(e) => {
e.preventDefault();
setShowModal(true);
}}
className='text-error hover:scale-110 transition'
>

<Trash2 className='size-4' />

</button>

</div>

</div>

</div>

</Link>

{showModal && (

<dialog className='modal modal-open'>

<div className='modal-box'>

<h3 className='font-bold text-lg text-error flex items-center gap-2'>
<Trash2 className='size-5' /> Delete Participation
</h3>

<p className='py-4 text-base-content/70'>
Are you sure you want to delete
<span className='font-semibold text-base-content'>
{" "}"{participation.studentName}"
</span> ?
<br />
This action cannot be undone.
</p>

<div className='modal-action'>

<button
className='btn btn-ghost'
onClick={() => setShowModal(false)}
>
Cancel
</button>

<button
className='btn btn-error flex items-center gap-2'
onClick={handleDelete}
>

<Trash2 className='size-4' /> Delete

</button>

</div>

</div>

</dialog>

)}

</>
);
};

export default ParticipationCard;