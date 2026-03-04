import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon } from "lucide-react";

const ParticipationDetailPage = () => {

  const [participation, setParticipation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    const fetchParticipation = async () => {
      try {
        const res = await api.get(`/${id}`);
        setParticipation(res.data);
      } catch (error) {
        toast.error("Failed to fetch participation");
      } finally {
        setLoading(false);
      }
    };

    fetchParticipation();

  }, [id]);

  const handleSave = async (e) => {

    e.preventDefault();
    setSaving(true);

    try {

      await api.put(`/${id}`, participation);

      toast.success("Participation updated successfully");
      navigate("/");

    } catch (error) {

      toast.error("Failed to update participation");

    } finally {

      setSaving(false);

    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-base-200">

      <div className="container mx-auto px-4 py-8">

        <div className="max-w-2xl mx-auto">

          <Link to="/" className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5"/> Back
          </Link>

          <div className="card bg-base-100">

            <div className="card-body">

              <h2 className="card-title text-2xl mb-4">
                Edit Participation
              </h2>

              <form onSubmit={handleSave}>

                <div className="form-control mb-5">
                  <label className="label block">
                    <span className="label-text">Student Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={participation.studentName}
                    onChange={(e)=>setParticipation({...participation, studentName:e.target.value})}
                  />
                </div>

                <div className="form-control mb-5">
                  <label className="label  block">
                    <span className="label-text">Roll Number</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered"
                    value={participation.rollNum}
                    onChange={(e)=>setParticipation({...participation, rollNum:e.target.value})}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label  block">
                    <span className="label-text">Department</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={participation.department}
                    onChange={(e)=>setParticipation({...participation, department:e.target.value})}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label block">
                    <span className="label-text">Year</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered"
                    value={participation.year}
                    onChange={(e)=>setParticipation({...participation, year:e.target.value})}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label block">
                    <span className="label-text">Event Title</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={participation.eventTitle}
                    onChange={(e)=>setParticipation({...participation, eventTitle:e.target.value})}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label block">
                    <span className="label-text">Event Category</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={participation.eventCategory}
                    onChange={(e)=>setParticipation({...participation, eventCategory:e.target.value})}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label block">
                    <span className="label-text">Event Date</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered"
                    value={participation.eventDate?.split("T")[0]}
                    onChange={(e)=>setParticipation({...participation, eventDate:e.target.value})}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label block">
                    <span className="label-text">Venue</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={participation.venue}
                    onChange={(e)=>setParticipation({...participation, venue:e.target.value})}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label block">
                    <span className="label-text">Registration Date</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered"
                    value={participation.registrationDate?.split("T")[0]}
                    onChange={(e)=>setParticipation({...participation, registrationDate:e.target.value})}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary" disabled={saving}>
                    {saving ? "Saving..." : "Save Changes"}
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

export default ParticipationDetailPage;