"use client"
import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import{useState,useEffect} from "react";

const Users=()=>{
    const[search,setSearch]=useState('');
    const [allUsers, setAllUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/db.json');
                const result = await response.json();
                setAllUsers(result.users);
                setFilteredUsers(result.users);  // Display all users initially
            } catch (error) {
                console.error("Error fetching users data:", error);
            }
        };

        fetchUsers();
    }, []);


    useEffect(() => {
        if (search.trim() === '') {
            // Display all users when search box is empty
            setFilteredUsers(allUsers);
        } else {
            // Apply filtering only when there's a search value
            const filtered = allUsers.filter((user: any) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.location.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    }, [search, allUsers]);

    console.log(search)
    console.log(allUsers)
    return (
        <>
            <div className="fixed top-1 w-full pr-44 z-20 bg-white flex justify-between items-center mb-4">
                <h2 className="font-bold text-2xl font-Oswald">Users</h2>
                <div className="relative">
                    <Search className="absolute left-2 text-gray-500" size={20} style={{ top: '11' }} />
                    <input
                        className="p-2 pl-8 border border-gray-300 rounded-full w-70 focus:outline-none focus:ring focus:ring-blue-900"
                        placeholder="Search by location, user name.."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Display Filtered Users */}
            <div className="mt-20 p-4">
                {filteredUsers.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4">
                        {filteredUsers.map((user: any) => (
                            <div key={user.id} className="p-4 border rounded-lg shadow">
                                <Image
                                    src={user.userImgURL || "/Images/default-user.png"}
                                    alt={user.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full mb-2"
                                />
                                <h3 className="font-bold text-lg">{user.name}</h3>
                                <p className="text-gray-500">{user.location || "No Location Provided"}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No users found.</div>
                )}
            </div>
        </>
    );
};

export default Users;