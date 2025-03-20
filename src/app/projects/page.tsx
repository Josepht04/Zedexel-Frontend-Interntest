"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

interface Project {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    status: string;
    venue: string;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/db.json');
                const result = await response.json() as { projects: Project[] };
                setProjects(result.projects);

            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const filteredProjects = search === '' ? projects : projects.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.venue.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className=" fixed top-1 w-full pr-44 z-20 bg-white flex justify-between items-center mb-4">
                <h2 className="font-bold text-2xl font-Oswald">Projects</h2>
                <div className="relative">
                    <Search className=" absolute left-2 text-gray-500" size={20} style={{ top: '11' }} />
                    <input
                        className="p-2 pl-8 border border-gray-300 rounded-full w-70 focus:outline-none focus:ring focus:ring-blue-900"
                        placeholder="Search by location, User.."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="mt-8">
                <div className='grid grid-cols-5 gap-4 p-3 rounded-xl' style={{ backgroundColor: '#f7f7fa' }}>
                    <div className="col-span-1 font-bold">Name</div>
                    <div className="col-span-1 ml-40 font-bold">Start date</div>
                    <div className="col-span-1 ml-10 font-bold">End date</div>
                    <div className="col-span-1 font-bold">Status</div>
                    <div className="col-span-1 font-bold">Venue</div>
                </div>

                <div className="mt-8">
                    {filteredProjects
                        .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
                        .map((project) => (
                            <Link key={project.id} href={`/projects/${project.id}`}>
                                <div className='grid grid-cols-5 gap-4 p-3 border-b items-center'>
                                    <div className="col-span-1" style={{ width: "390px" }}>{project.name}</div>
                                    <div className="col-span-1 ml-40">{project.startDate}</div>
                                    <div className="ml-10" style={{ width: "100px" }}>{project.endDate}</div>
                                    <div
                                        className={`col-span-1 inline-flex items-center justify-center p-1 mr-20 rounded-full ring-2 ring-inset 
                                    ${project.status === "Design Submitted" ? "ring-green-400 text-green-400 bg-green-50"
                                                : project.status === "Project Confirmed" || project.status === "Admin Approved" ? "ring-yellow-200 text-yellow-400 bg-yellow-50"
                                                    : "ring-red-500 text-red-400 bg-red-50"}`}
                                    >
                                        {project.status}
                                    </div>
                                    <div className="col-span-1">{project.venue}</div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Projects;
