import React, { useEffect, useState } from "react";

const NewPromise = () => {
  const [personDetails, setPersonDetails] = useState([]);
  const [reject, setReject] = useState(null);
  const [postDetails, setPostDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    let promise1 = new Promise((resolve) => {
      const person = {
        name: "Simmi",
        age: 28,
        city: "Amsterdam",
      };
      resolve(person);
    });

    const promise2 = new Promise((resolve, reject) => {
      resolve("Hey");
    });
    const postList = fetch("https://dummyjson.com/users").then((r) => r.json());
    console.log(postList);

    Promise.all([promise1, promise2, postList]).then((response) => {
      setPersonDetails(response[0]);
      setReject(response[1]);
      setPostDetails(response[2].users);
      setIsLoading(false);
    }). catch(()=>{
        setIsLoading(false);
        setError("Something Went Wrong")
    });
  }, []); 

  return (
    <>
      {isLoading ? <div>Data is being fetchd to Display</div> : null}
      {error ? <div> Data Fecthing is Failed</div> : null}

      {personDetails ? (
        <div>
          <div>{personDetails.name}</div>
          <div>{personDetails.age}</div>
          <div>{personDetails.city}</div>
        </div>
      ) : null}

      {reject ? <div>{reject}</div> : null}

      {postDetails 
        ? postDetails.map((userDetails) => {
            return (
              <div>
                <div>First Name: {userDetails.firstName}</div>
                <div>Last Name:{userDetails.LasttName}</div>
                <div>Age: {userDetails.age}</div>
                <div>Date Of Birth: {userDetails.birthDate}</div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default NewPromise;
