import React, { useEffect, useState } from "react";

export default function Read() {

  const [data, setData]=useState();
  const [error, setError]=useState();
 
   
  const handleDelete=async(id)=>{
    try {
      const response = await fetch (`http://localhost:5000/${id}`,{
        method:"DELETE",
      });
      const result = await response.json()
      if(!response.ok){
        setError(result.error)
      }
      else{
        setError("Deleted Succefully")
       setTimeout(()=>{
        setError("")
        
        fetchData();

       },2000)
      }
    } catch (error) {

      
      
    }
  }

  const fetchData = async () => {
   try {
    const response = await fetch("http://localhost:5000/alluser");
    const result = await response.json();
    
    if(!response.ok){
      setError(result.error)
    }
    else{
      setData(result)
    }
    
   } catch (error) {
    console.log(error)
   }
  };

  useEffect(()=>{
    fetchData()

  },[])

  return (
    <>
    {error && <div className="mb-4 p-3 text-white bg-red-500 rounded-lg">
      {error}</div>}
      <div className="grid grid-cols-4">
        {data?.map((item) => {
         return (<div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-lg p-4">
            {/* Card Title */}
            <div key={item._id} className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
            </div>

            {/* Card Content: Email and Age */}
            <div className="mb-2">
              <p className="text-gray-600">{item.email}</p>
              <p className="text-gray-600">{item.age}</p>
            </div>

            {/* Action Buttons: Edit and Delete */}
            <div className="flex space-x-4 mt-4">
              {/* Edit Button */}
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                Edit
              </button>

              {/* Delete Button */}
              <button  onClick={()=>handleDelete(item._id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
                Delete
              </button>
            </div>
          </div>)
        })}
      </div>
    </>
  );
}
