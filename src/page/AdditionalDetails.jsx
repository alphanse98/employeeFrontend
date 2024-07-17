import React, { useEffect, useState } from "react";
import Heter from "../component/Heter";
import { createDetails, getDetails } from "../service/AdditonalDetailService";
const AdditionalDetails = () => {
  const [details, setDetails] = useState({
    age: "",
    gender: "",
    dob: "",
    mibile: "",
  });

  const [userDetails, setUserDetails] = useState();

  const updateValue = (e) => {
    // update input values
    let temCopy = { ...details };
    temCopy[e.target.name] = e.target.value;
    setDetails(temCopy);
  };

  const saveDetails = async () => {
    // post api call
    try {
      await createDetails(details);
      await alert("Add Details");
    } catch (error) {
      console.log("error", error);
      alert("Error");
    }
  };

  const getUsedetails = async () => {
    // get api call
    let res = await getDetails();
    setUserDetails(res?.data);
  };

  useEffect(() => {
    getUsedetails();
  }, []);
  return (
    <div>
      <Heter />
      <input
        type="number"
        placeholder="age"
        value={details?.age}
        onChange={(e) => updateValue(e)}
      />
      <input
        type="text"
        placeholder="gender"
        value={details?.age}
        onChange={(e) => updateValue(e)}
      />
      <input
        type="date"
        placeholder="dob"
        value={details?.age}
        onChange={(e) => updateValue(e)}
      />
      <input
        type="number"
        placeholder="mibile"
        value={details?.age}
        onChange={(e) => updateValue(e)}
      />
      <button
        onClick={() => saveDetails()}
        class=" m-1 shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"
      >
        Add{" "}
      </button>

      <div>
        <div>user Details</div>
        <p>Age : {userDetails?.age}</p>
        <p>gender : {userDetails?.gender}</p>
        <p>dob : {userDetails?.dob}</p>
        <p>mobile : {userDetails?.mobile}</p>
      </div>
    </div>
  );
};

export default AdditionalDetails;
