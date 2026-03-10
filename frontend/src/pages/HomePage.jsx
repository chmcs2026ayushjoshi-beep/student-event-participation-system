import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../lib/axios";
import toast from "react-hot-toast";
import ParticipationCard from "../components/ParticipationCard";
import ParticipationNotFound from "../components/ParticipationNotFound";

const HomePage = () => {
  const [participations, setParticipations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [departmentFilter, setDepartmentFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    const fetchParticipations = async () => {
      try {
        const res = await api.get("/");
        console.log(res.data);
        setParticipations(res.data);
      } catch (error) {
        console.log("Error fetching participations");
        console.log(error);
        toast.error("Failed to load participations");
      } finally {
        setLoading(false);
      }
    };

    fetchParticipations();
  }, []);

  const filteredParticipations = participations.filter((p) => {

  const departmentMatch =
    departmentFilter === "" ||
    p.department.toLowerCase() === departmentFilter.toLowerCase();

  const categoryMatch =
    categoryFilter === "" ||
    p.eventCategory.toLowerCase() === categoryFilter.toLowerCase();

  return departmentMatch && categoryMatch;

});


  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">
            Loading participations...
          </div>
        )}

        <div className="flex gap-4 mb-6">

        <select
        className="select select-bordered"
        value={departmentFilter}
        onChange={(e)=>setDepartmentFilter(e.target.value)}>
        <option value="">All Departments</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Bachelor of Commerce">Bachelor of Commerce</option>
        </select>

        <select
        className="select select-bordered"
        value={categoryFilter}
        onChange={(e)=>setCategoryFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Cultural">Cultural</option>
        <option value="Technical">Technical</option>
        <option value="Sports">Sports</option>
        </select> </div>  

        {participations.length === 0 && <ParticipationNotFound />}

        {participations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParticipations.map((participation) => (
              <ParticipationCard
                key={participation._id}
                participation={participation}
                setParticipations={setParticipations}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
