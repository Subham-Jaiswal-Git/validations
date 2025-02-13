import Aadhaar from "../Components/Aadhaar";
import DL from "../Components/DL";
import Gst from "../Components/Gst";
import Pan from "../Components/Pan";
import VoterIDForm from "../Components/VoterIDForm";
const ParentComponent = () => {
  return (
    <>
      {/*<div className=" flex justify-center items-center min-h-screen bg-gray-100">
        <VoterIDForm className="bg-white shadow-lg rounded-lg p-6" />
      </div> */}
      
      <Pan/>
      <VoterIDForm/>
      <DL/>
      <Aadhaar/>
      <Gst/>
      
    </>
  );
};

export default ParentComponent;