import React, { useEffect, useState } from "react";
import { useParams ,useNavigate } from "react-router-dom";

export default function Update() {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [age, setage] = useState();
    const[description,setDescription]=useState();
    const [data,setData]=useState();
    const [error,setError]=useState();
    const { id } = useParams();
    const navigate = useNavigate();

     const getSingleUser =async()=>{

        try {
           
            const response =  await fetch (`http://localhost:5000/${id}`)
            const result = await response.json();
         
            if(!response.ok){
                setError(result.error)
                console.log(result.error)
            }else{
                console.log(result )
                setname(result.name);
                setemail(result.email);
                setage(result.age);
                setDescription(result.description)

            }
        } catch (err) {
           
            console.log();
        }
     }
    const handleEdit = async (e) => {
        e.preventDefault();
        const adduser={name,email,age,description}
        try {
             
            const response = await fetch(`http://localhost:5000/update/${id}`, {
                method: "PATCH",
                body: JSON.stringify(adduser),
                headers: {
                  "Content-Type": "application/json",
                },
              });
            const result= await response.json()
            if (!response.ok) {
              setError(result.error || "An unexpected error occurred");
              return; // Prevent resetting the form on failure
            }
      
           else{
            console.log(result)
            navigate("/alluser")
           }
            
        } catch (error) {
            console.log()
            
         
        }
        
      };
    
    useEffect(()=>{
        getSingleUser();
    },[])
  return (
    <>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {error && <div className="mb-4 p-3 text-white bg-red-500 rounded-lg">
          {error}
        </div> }
      <h2 className="text-xl font-bold text-gray-700 mb-4">Edit User Data</h2>
      <form onSubmit={handleEdit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label
            className="block text-gray-600 font-medium mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            className="block text-gray-600 font-medium mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Age Input */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="age">
            Age:
          </label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your age"
          />
        </div>
           {/* Description Input */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
            Description:
          </label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>


        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </>
  );
}
