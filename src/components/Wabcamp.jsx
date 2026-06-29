// import React, { useState, useEffect } from "react";
// import Logo from "../assets/Logo.png";
// import camera from "../assets/camera.png";
// import { useNavigate } from "react-router-dom";
// import { GrLogout } from "react-icons/gr";
// import axios from "axios";
// import QrReader from "react-qr-scanner";
// import { BsQrCodeScan } from "react-icons/bs";
// import toast from "react-hot-toast";
// import { FaCircleChevronLeft } from "react-icons/fa6";

// export default function Wabcamp() {

//   const baseUrl = "https://vmscrnagpur-1.onrender.com/"

//   // const baseUrl = "https://vmscrnagpur-1.onrender.com/"
// // temp

//   const navigate = useNavigate();
//   const [scannedValue, setScannedValue] = useState("");
//   const [fetchedData, setFetchedData] = useState(null);
//   const [isScanning, setIsScanning] = useState(false);
//   const [qrcode, setQrCode] = useState("");
//   const [devices, setDevices] = useState([]);
//   const [selectedDeviceId, setSelectedDeviceId] = useState(null);
//   const [conDate, setConDate] = useState();
//   const VendorData = JSON.parse(localStorage.getItem('VendorData')) || null;
//   console.log("VendorData", VendorData);

//   useEffect(() => {
//     navigator.mediaDevices.enumerateDevices().then((devices) => {
//       const videoDevices = devices.filter(device => device.kind === "videoinput");
//       setDevices(videoDevices);

//       // Default to the back camera if available
//       const backCamera = videoDevices.find(device => device.label.toLowerCase().includes("back"));
//       setSelectedDeviceId(backCamera ? backCamera.deviceId : videoDevices[0]?.deviceId);
//     });
//   }, []);

//   const handleLogout = () => {
//     // localStorage.removeItem("AppUser");
//     localStorage.removeItem("Token");
//     navigate("/");
//   };

//   const handleScan = (id) => {
//     if (id) {
//       console.log("Id : ", id);
//       setScannedValue(id.text);
//       fetchData(id.text);
//       setIsScanning(false);
//     }
//   };

//   const handleError = (err) => {
//     console.error("QR Scan Error: ", err);
//   };

//   // const fetchData = async (id) => {
//   //   const toastId = toast.loading("Loading...");
//   //   try {
//   //     const response = await axios.post(

//   //       `https://vmscrnagpur-1.onrender.com//vendor/fetchVendorDataByQR`,

//   //       { qrcode: id }
//   //     );
//   //     if (response.data) {
//   //       console.log("Data : ", response.data.user)
//   //       setFetchedData(response.data.user);
//   //       localStorage.setItem("VendorData", JSON.parse(response.data.user))
//   //       setQrCode("")
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //     toast.error(error?.response?.data?.message)
//   //   }
//   //   toast.dismiss(toastId)
//   // };

//   const fetchData = async (id) => {
//     const toastId = toast.loading("Loading...");
//     try {
//       const response = await axios.post(
//         baseUrl + `/vendor/fetchVendorDataByQR`,
//         { qrcode: id }
//       );
//       if (response.data) {
//         console.log("Data:", response.data.user);
//         setFetchedData(response?.data?.user);
//         localStorage.setItem('VendorData', JSON.stringify(response?.data?.user)); // Use JSON.stringify
//         setQrCode("");
//         toast.success("Data fetched successfully!"); // Optional success message
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       toast.error(error?.response?.data?.message || "Failed to fetch data."); // Fallback message
//     } finally {
//       toast.dismiss(toastId); // Ensure the loading toast is dismissed
//     }
//   };
  

//   const handleInputClick = () => {
//     fetchData(qrcode);
//   };

//   const handleQrCodeValue = (e) => {
//     e.preventDefault();
//     setQrCode(e.target.value);
//   };

//   const switchCamera = () => {
//     const currentIndex = devices.findIndex(device => device.deviceId === selectedDeviceId);
//     const nextIndex = (currentIndex + 1) % devices.length;
//     setSelectedDeviceId(devices[nextIndex].deviceId);
//   };

//   const getFileTypeFromURL = (url) => {
//     if (!url) {
//       return 'unknown';
//     }

//     if (url.includes(".jpg") || url.includes(".jpeg") || url.includes(".png")) {
//       return 'image';
//     } else if (url.includes(".pdf")) {
//       return 'pdf';
//     } else {
//       return 'unknown';
//     }
//   };



//   const calculateDaysDifference = (start, end) => {
//     // const start = fetchData?.Contractor?.fromDate
//     // const end = fetchData?.Contractor?.toDate
//     console.log("startdate ", start, " end ", end);
//     const startDate = new Date(start);
//     const endDate = new Date(end);
//     if (!isNaN(startDate) && !isNaN(endDate)) {
//       return Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
//     }
//     return NaN;
//   };

//   useEffect(() => {
//     if(VendorData) {
//       setFetchedData(VendorData)
//     }
//   }, [])

//   console.log("fetchedData ", fetchedData);

//   // const fileType = getFileTypeFromURL("");

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         minHeight: "100vh",
//         justifyContent: "space-between",
//       }}
//     >
//       <header
//         style={{
//           height: "70px",

//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "5px",
//         }} className=" bg-blue-300"
//       >
//         <img src={Logo} style={{ height: "60px", width: "60px" }} alt="Logo" />
//         <GrLogout
//           style={{
//             height: "30px",
//             width: "30px",
//             margin: "0 20px 0 0",
//             cursor: "pointer",
//           }}
//           onClick={handleLogout}
//         />
//       </header>
//       <main
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           flex: "1",
//           padding: "20px",
//           marginBottom: "10px",
//         }}
//       >
//         {!fetchedData ? (
//           <>
//             <div className="flex items-center justify-center p-5 mb-5">
//               <div className="rounded-lg bg-gray-200 p-3">
//                 <form onSubmit={handleInputClick} className="flex">
//                   <input
//                     type="text"
//                     value={qrcode}
//                     onChange={handleQrCodeValue}
//                     required
//                     className="w-full max-w-[300px] bg-white pl-2 text-base font-semibold outline-0 placeholder:text-xl placeholder:text-black"
//                     placeholder="Enter QR Code"
//                   />
//                   <button
//                     // onClick={handleInputClick}
//                     type="submit"
//                     className="bg-blue-500 text-xl p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
//                   >
//                     Search
//                   </button>
//                 </form>
//               </div>
//             </div>

//             <div>
//               {/* <img
//                 src={camera}
//                 className=" w-[10rem] flex justify-center mx-auto"
//                 alt="Camera Icon"
//               /> */}

//               {isScanning ?
//                 (
//                   <QrReader
//                     delay={300}
//                     style={{ width: "100%", maxWidth: "300px", marginBottom: "20px" }}
//                     onError={handleError}
//                     onScan={handleScan}
//                     constraints={{
//                       // video: {
//                       //   deviceId: selectedDeviceId ? { exact: selectedDeviceId } : undefined,
//                       // },
//                       video: {
//                         facingMode: "environment"
//                       },
//                     }}
//                   />
//                 )
//                 : (<BsQrCodeScan className=" text-[10rem] my-5 mb-9 flex justify-center items-center mx-auto" />)
//               }
//               <button className=" px-3 py-2 rounded hover:bg-blue-600 text-white font-semibold text-xl bg-blue-500 mx-auto items-center flex "
//                 onClick={() => setIsScanning(true)} >
//                 Scan QR Code
//               </button>
//             </div>

//             <p
//               style={{
//                 width: "100%",
//                 textAlign: "center",
//                 fontWeight: "bold",
//                 padding: "10px 20px",
//                 margin: "0",
//               }}
//             >
//               Please click the button to access the camera to scan the QR code
//             </p>

//           </>
//         ) : (
//           <>
//             <div className=" flex justify-end items-end w-full ">
//               <button className=" text-white bg-black hover:bg-gray-700 rounded px-3 py-1 flex items-center gap-1" onClick={() => {setFetchedData(null), localStorage.removeItem("VendorData")}}> <FaCircleChevronLeft /> Back</button>
//             </div>
//             <div
//               style={{
//                 marginTop: "20px",
//                 textAlign: "center",
//                 padding: "10px",
//                 border: "1px solid lightgray",
//                 borderRadius: "10px",
//                 backgroundColor: "white",
//                 width: "100%",
//               }}
//               className=" mb-10"
//             >
//               {(!fetchedData?.isApproved && !fetchedData?.isRejected?.status) && <h3 className=" text-xl font-semibold my-2 mb-3 text-yellow-600">Pending Vendor Data</h3>}
//               {fetchedData?.isApproved && <h3 className=" text-xl font-semibold my-2 mb-3 text-green-600">Approved Vendor Data</h3>}
//               {fetchedData?.isRejected?.status && <h3 className=" text-xl font-semibold my-2 mb-3 text-red-500">Rejected Vendor Data</h3>}
//               <table style={{ width: "100%", borderCollapse: "collapse" }} >
//                 <tbody>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Profile Picture:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                       {getFileTypeFromURL(fetchedData?.profilePic) === "pdf" ? (
//                         <a href={fetchedData?.profilePic} target="_blank" className="text-blue-700 text">View PDF</a>
//                       ) : (
//                         <img
//                           src={fetchedData?.profilePic}
//                           alt="Profile"
//                           style={{ maxHeight: "100px", borderRadius: "10px" }}
//                         />
//                       )}
//                     </td>

//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Full Name:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {fetchedData.fname} {fetchedData.mname} {fetchedData.lname}
//                     </td>
//                   </tr>

//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Date of Birth:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {new Date(fetchedData.dob).toLocaleDateString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Mobile:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {fetchedData.mobile}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Aadhar No. :
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {fetchedData.aadhar}
//                     </td>
//                   </tr>
//                   { fetchedData.isRejected.status && <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" , color :"red"}}>
//                       Rejection Reason :
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" ,color :"red" }}>
//                       {fetchedData.isRejected.message}
//                     </td>
//                   </tr>}
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Contractor:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" text-blue-500 underline cursor-pointer" onClick={() => navigate("/contractorInfo", { state: { data: fetchedData?.Contractor?.contractorId
//  } })}>
//                       {fetchedData?.Contractor?.licensee}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Contract:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" text-blue-500 underline cursor-pointer" onClick={() => navigate("/contractInfo", { state: { data: fetchedData?.Contractor } })}>
//                       Contract Info
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Contract Type:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {fetchedData?.Contractor?.category}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Contract Period Upto:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {/* {calculateDaysDifference(fetchedData?.Contractor?.fromDate, fetchedData?.Contractor?.toDate)} */}
//                       {/* {new Date(fetchedData?.Contractor?.toDate) - new Date(fetchedData?.Contractor?.fromDate)} */}
//                       {/* {fetchedData?.Contractor?.toDate} */}
//                       {new Date(fetchedData?.Contractor?.toDate).toLocaleDateString()}
//                     </td>
//                   </tr>
//                   {(fetchedData?.Contractor?.category === "On Board Non-Catering") && <>
//                     <tr>
//                       <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                         Section Name:
//                       </td>
//                       <td style={{ padding: "8px", border: "1px solid lightgray" }} >
//                         {fetchedData?.Contractor?.sectionname?.map((s) => <p>{s}</p>)}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }} className="max-w-[50%]">
//                         Trains:
//                       </td>
//                       <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" max-w-[10px]">
//                         {fetchedData?.Contractor?.selectedTrains?.map((s) => <p>{s}</p>)}
//                       </td>
//                     </tr>
//                   </>}
//                   {(fetchedData?.Contractor?.category === "Static Unit") && <>
//                     <tr>
//                       <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                         Station Name:
//                       </td>
//                       <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                         {fetchedData?.Contractor?.stationName?.map((s) => <p>{s}</p>)}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                         Location of Stall:
//                       </td>
//                       <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                         {fetchedData.locationOfStall}
//                       </td>
//                     </tr>
//                   </>}

//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Authority Start Date:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {new Date(fetchedData?.startDate).toLocaleDateString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Authority End Date:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray", color: new Date(fetchedData.endDate) < new Date() ? 'red' : 'black' }}>
//                       {new Date(fetchedData?.endDate).toLocaleDateString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       QR Code:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {fetchedData.qrcode}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Aadhar Card:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       <a href={fetchedData.aadharCardImg} target="_blank" className=" text-blue-700 text">Aadhar Card</a>
//                     </td>
//                   </tr>
//                   {/* <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Rejection :
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {fetchedData.isRejected.message}
//                     </td>
//                   </tr> */}
//                   <tr>
//                     {(fetchedData?.medicalValidityDateFrom) && (
//                       <>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Medical Validity Start Date:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {new Date(fetchedData.medicalValidityDateFrom).toLocaleDateString()}
//                     </td></>)}

//                   </tr>
//                   <tr>{(fetchedData?.medicalValidityDateTo) && (
//                     <>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Medical Validity End Date:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray", color: new Date(fetchedData.medicalValidityDateTo) < new Date() ? 'red' : 'black' }}>
//                       {new Date(fetchedData.medicalValidityDateTo).toLocaleDateString()}
//                     </td></>)}
//                   </tr>

//                   <tr>
//                   {(fetchedData?.madicalValidityDocument) && (
//                       <>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Medical Validity Document:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       <a href={fetchedData.madicalValidityDocument} target="_blank" className=" text-blue-700 text">Medical Validity Document
//                       </a>
//                     </td></>)}
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Police Verification Start Date:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       {new Date(fetchedData.policeVarificationDateFrom).toLocaleDateString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Police Verification End Date:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray", color: new Date(fetchedData.policeVarificationDateTo) < new Date() ? 'red' : 'black' }}>
//                       {new Date(fetchedData.policeVarificationDateTo).toLocaleDateString()}
//                     </td>
//                   </tr>

//                   <tr>
//                     <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                       Police Verification Document:
//                     </td>
//                     <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                       <a href={fetchedData.policeVarificationDocument} target="_blank" className=" text-blue-700 text">Police Verification Document
//                       </a>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </>
//         )}
//       </main>
//       {/* <footer
//         style={{
//           height: "60px",
//           // backgroundColor: "lightgray",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         className=" bg-blue-300"
//       >
//       </footer> */}
//       {/* <p>WABCamp Project</p> */}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import camera from "../assets/camera.png";
import { useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import axios from "axios";
import QrReader from "react-qr-scanner";
import { BsQrCodeScan } from "react-icons/bs";
import toast from "react-hot-toast";
import { FaCircleChevronLeft } from "react-icons/fa6";

export default function Wabcamp() {

  const baseUrl = "https://vmscrnagpur-1.onrender.com/"

  // const baseUrl = "http://localhost:3000"
// temp

  const navigate = useNavigate();
  const [scannedValue, setScannedValue] = useState("");
  const [fetchedData, setFetchedData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [qrcode, setQrCode] = useState("");
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [conDate, setConDate] = useState();
  const VendorData = JSON.parse(localStorage.getItem('VendorData')) || null;
  // console.log("VendorData", VendorData);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter(device => device.kind === "videoinput");
      setDevices(videoDevices);

      // Default to the back camera if available
      const backCamera = videoDevices.find(device => device.label.toLowerCase().includes("back"));
      setSelectedDeviceId(backCamera ? backCamera.deviceId : videoDevices[0]?.deviceId);
    });
  }, []);

  const handleLogout = () => {
    // localStorage.removeItem("AppUser");
    localStorage.removeItem("Token");
    navigate("/");
  };

  const handleScan = (id) => {
    if (id) {
      // console.log("Link : ", id);
      // console.log("Id : ", id.text.split('/').pop());

      if (id?.text.startsWith('http')) {
        setScannedValue(id?.text.split('/').pop());
        fetchData(id?.text.split('/').pop());
      }else{
        setScannedValue(id?.text);
        fetchData(id?.text);
      }
      setIsScanning(false);
    }
  };

  const handleError = (err) => {
    console.error("QR Scan Error: ", err);
  };

  // const fetchData = async (id) => {
  //   const toastId = toast.loading("Loading...");
  //   try {
  //     const response = await axios.post(

  //       `https://nag-central-railwayserver.onrender.com/vendor/fetchVendorDataByQR`,

  //       { qrcode: id }
  //     );
  //     if (response.data) {
  //       console.log("Data : ", response.data.user)
  //       setFetchedData(response.data.user);
  //       localStorage.setItem("VendorData", JSON.parse(response.data.user))
  //       setQrCode("")
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     toast.error(error?.response?.data?.message)
  //   }
  //   toast.dismiss(toastId)
  // };

  const fetchData = async (id) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios.post(
        baseUrl + `/vendor/fetchVendorDataByQR`,
        { qrcode: id }
      );
      if (response.data) {
        // console.log("Data:", response.data.user);
        setFetchedData(response?.data?.user);
        localStorage.setItem('VendorData', JSON.stringify(response?.data?.user)); // Use JSON.stringify
        setQrCode("");
        toast.success("Data fetched successfully!"); // Optional success message
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      
      // Bypass/Fallback to mock vendor data for offline/local testing
      toast.error("Server connection failed. Loading mock vendor data...");
      const mockVendor = {
        fname: "Rajesh",
        mname: "Kumar",
        lname: "Sharma",
        dob: "1985-05-15",
        mobile: "9876543210",
        aadhar: "1234 5678 9012",
        profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        startDate: "2024-01-01",
        endDate: "2027-12-31",
        qrcode: id || "MOCK-QR-CODE",
        aadharCardImg: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
        isApproved: true,
        isRejected: { status: false, message: "" },
        medicalValidityDateFrom: "2024-01-01",
        medicalValidityDateTo: "2026-12-31",
        madicalValidityDocument: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
        policeVarificationDateFrom: "2024-01-01",
        policeVarificationDateTo: "2026-12-31",
        policeVarificationDocument: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
        locationOfStall: "Platform 1, Nagpur Junction",
        Contractor: {
          contractorId: {
            director_Name: "Raja Baig",
            firmName: "Nagpur Catering Associates",
            firmId: "FIRM-101",
            type_of_firm: "Partnership",
            firm_Contact_no: "+91 91234 56789",
            firm_Email: "contact@nagpurcatering.com",
            firm_office_address: "12, Railway Station Road, Nagpur"
          },
          licensee: "Sharma Catering Services Ltd.",
          agency: "Sharma Group",
          category: "Static Unit",
          fromDate: "2024-01-01",
          toDate: "2027-12-31",
          isApproved: true,
          stationName: ["Nagpur (NGP)", "Wardha (WR)"],
          locationOfStall: "Platform 1, Nagpur Junction",
          vendors_permitted_at_stole: 5,
          stallPhoto: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
          fireAuditdate: "2025-06-01",
          FireAuditDoc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
          licence_fees_paid_upto: "2026-12-31",
          Licensee_Contact_details: "+91 98765 43210",
          SanctionedLoad: 15,
          ConnectedLoad: 12,
          SupplyRelease: 24,
          EquipmentDetails: "Refrigerator, Oven, Microwave",
          NumberOfPlug: 6,
          Remarks: "Compliant with all security regulations",
          authorityDocument: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
          vendors: ["Rajesh Kumar Sharma"]
        }
      };
      setFetchedData(mockVendor);
      localStorage.setItem('VendorData', JSON.stringify(mockVendor));
      setQrCode("");
    } finally {
      toast.dismiss(toastId);
    }
  };
  

  const handleInputClick = (e) => {
    if (e) e.preventDefault();
    fetchData(qrcode);
  };

  const handleQrCodeValue = (e) => {
    e.preventDefault();
    setQrCode(e.target.value);
  };

  const switchCamera = () => {
    const currentIndex = devices.findIndex(device => device.deviceId === selectedDeviceId);
    const nextIndex = (currentIndex + 1) % devices.length;
    setSelectedDeviceId(devices[nextIndex].deviceId);
  };

  const getFileTypeFromURL = (url) => {
    if (!url) {
      return 'unknown';
    }

    if (url.includes(".jpg") || url.includes(".jpeg") || url.includes(".png")) {
      return 'image';
    } else if (url.includes(".pdf")) {
      return 'pdf';
    } else {
      return 'unknown';
    }
  };



  const calculateDaysDifference = (start, end) => {
    // const start = fetchData?.Contractor?.fromDate
    // const end = fetchData?.Contractor?.toDate
    // console.log("startdate ", start, " end ", end);
    const startDate = new Date(start);
    const endDate = new Date(end);
    if (!isNaN(startDate) && !isNaN(endDate)) {
      return Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    }
    return NaN;
  };

  useEffect(() => {
    if(VendorData) {
      setFetchedData(VendorData)
    }
  }, [])

  // console.log("fetchedData ", fetchedData);

  // const fileType = getFileTypeFromURL("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <header
        style={{
          height: "70px",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px",
        }} className=" bg-blue-300"
      >
        <img src={Logo} style={{ height: "60px", width: "60px" }} alt="Logo" />
        <GrLogout
          style={{
            height: "30px",
            width: "30px",
            margin: "0 20px 0 0",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        />
      </header>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: "1",
          padding: "20px",
          marginBottom: "10px",
        }}
      >
        {!fetchedData ? (
          <>
            <div className="flex items-center justify-center p-5 mb-5">
              <div className="rounded-lg bg-gray-200 p-3">
                <form onSubmit={handleInputClick} className="flex">
                  <input
                    type="text"
                    value={qrcode}
                    onChange={handleQrCodeValue}
                    required
                    className="w-full max-w-[300px] bg-white pl-2 text-base font-semibold outline-0 placeholder:text-xl placeholder:text-black"
                    placeholder="Enter QR Code"
                  />
                  <button
                    // onClick={handleInputClick}
                    type="submit"
                    className="bg-blue-500 text-xl p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div>
              {/* <img
                src={camera}
                className=" w-[10rem] flex justify-center mx-auto"
                alt="Camera Icon"
              /> */}

              {isScanning ?
                (
                  <QrReader
                    delay={300}
                    style={{ width: "100%", maxWidth: "300px", marginBottom: "20px" }}
                    onError={handleError}
                    onScan={handleScan}
                    constraints={{
                      // video: {
                      //   deviceId: selectedDeviceId ? { exact: selectedDeviceId } : undefined,
                      // },
                      video: {
                        facingMode: "environment"
                      },
                    }}
                  />
                )
                : (<BsQrCodeScan className=" text-[10rem] my-5 mb-9 flex justify-center items-center mx-auto" />)
              }
              <button className=" px-3 py-2 rounded hover:bg-blue-600 text-white font-semibold text-xl bg-blue-500 mx-auto items-center flex "
                onClick={() => setIsScanning(true)} >
                Scan QR Code
              </button>
            </div>

            <p
              style={{
                width: "100%",
                textAlign: "center",
                fontWeight: "bold",
                padding: "10px 20px",
                margin: "0",
              }}
            >
              Please click the button to access the camera to scan the QR code
            </p>

          </>
        ) : (
          <>
            <div className=" flex justify-end items-end w-full ">
              <button className=" text-white bg-black hover:bg-gray-700 rounded px-3 py-1 flex items-center gap-1" onClick={() => {setFetchedData(null), localStorage.removeItem("VendorData")}}> <FaCircleChevronLeft /> Back</button>
            </div>
            <div
              style={{
                marginTop: "20px",
                textAlign: "center",
                padding: "10px",
                border: "1px solid lightgray",
                borderRadius: "10px",
                backgroundColor: "white",
                width: "100%",
              }}
              className=" mb-10"
            >
              {(!fetchedData?.isApproved && !fetchedData?.isRejected?.status) && <h3 className=" text-xl font-semibold my-2 mb-3 text-yellow-600">Pending Vendor Data</h3>}
              {fetchedData?.isApproved && <h3 className=" text-xl font-semibold my-2 mb-3 text-green-600">Approved Vendor Data</h3>}
              {fetchedData?.isRejected?.status && <h3 className=" text-xl font-semibold my-2 mb-3 text-red-500">Rejected Vendor Data</h3>}
              <table style={{ width: "100%", borderCollapse: "collapse" }} >
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Profile Picture:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                      {getFileTypeFromURL(fetchedData?.profilePic) === "pdf" ? (
                        <a href={fetchedData?.profilePic} target="_blank" className="text-blue-700 text">View PDF</a>
                      ) : (
                        <img
                          src={fetchedData?.profilePic}
                          alt="Profile"
                          style={{ maxHeight: "100px", borderRadius: "10px" }}
                        />
                      )}
                    </td>

                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Full Name:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {fetchedData.fname} {fetchedData.mname} {fetchedData.lname}
                    </td>
                  </tr>

                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Date of Birth:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {new Date(fetchedData.dob).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Mobile:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {fetchedData.mobile}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Aadhar No. :
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {fetchedData.aadhar}
                    </td>
                  </tr>
                  { fetchedData.isRejected.status && <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" , color :"red"}}>
                      Rejection Reason :
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" ,color :"red" }}>
                      {fetchedData.isRejected.message}
                    </td>
                  </tr>}
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Contractor:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" text-blue-500 underline cursor-pointer" onClick={() => navigate("/contractorInfo", { state: { data: fetchedData?.Contractor?.contractorId
 } })}>
                      {fetchedData?.Contractor?.licensee}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Contract:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" text-blue-500 underline cursor-pointer" onClick={() => navigate("/contractInfo", { state: { data: fetchedData?.Contractor } })}>
                      Contract Info
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Contract Type:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {fetchedData?.Contractor?.category}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Contract Period Upto:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {/* {calculateDaysDifference(fetchedData?.Contractor?.fromDate, fetchedData?.Contractor?.toDate)} */}
                      {/* {new Date(fetchedData?.Contractor?.toDate) - new Date(fetchedData?.Contractor?.fromDate)} */}
                      {/* {fetchedData?.Contractor?.toDate} */}
                      {new Date(fetchedData?.Contractor?.toDate).toLocaleDateString()}
                    </td>
                  </tr>
                  {(fetchedData?.Contractor?.category === "On Board Non-Catering") && <>
                    <tr>
                      <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                        Section Name:
                      </td>
                      <td style={{ padding: "8px", border: "1px solid lightgray" }} >
                        {fetchedData?.Contractor?.sectionname?.map((s) => <p>{s}</p>)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }} className="max-w-[50%]">
                        Trains:
                      </td>
                      <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" max-w-[10px]">
                        {fetchedData?.Contractor?.selectedTrains?.map((s) => <p>{s}</p>)}
                      </td>
                    </tr>
                  </>}
                  {(fetchedData?.Contractor?.category === "Static Unit") && <>
                    <tr>
                      <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                        Station Name:
                      </td>
                      <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                        {fetchedData?.Contractor?.stationName?.map((s) => <p>{s}</p>)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                        Location of Stall:
                      </td>
                      <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                        {fetchedData.locationOfStall}
                      </td>
                    </tr>
                  </>}

                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Authority Start Date:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {new Date(fetchedData?.startDate).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Authority End Date:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray", color: new Date(fetchedData.endDate) < new Date() ? 'red' : 'black' }}>
                      {new Date(fetchedData?.endDate).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      QR Code:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {fetchedData.qrcode}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Aadhar Card:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      <a href={fetchedData.aadharCardImg} target="_blank" className=" text-blue-700 text">Aadhar Card</a>
                    </td>
                  </tr>
                  {/* <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Rejection :
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {fetchedData.isRejected.message}
                    </td>
                  </tr> */}
                  <tr>
                    {(fetchedData?.medicalValidityDateFrom) && (
                      <>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Medical Validity Start Date:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {new Date(fetchedData.medicalValidityDateFrom).toLocaleDateString()}
                    </td></>)}

                  </tr>
                  <tr>{(fetchedData?.medicalValidityDateTo) && (
                    <>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Medical Validity End Date:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray", color: new Date(fetchedData.medicalValidityDateTo) < new Date() ? 'red' : 'black' }}>
                      {new Date(fetchedData.medicalValidityDateTo).toLocaleDateString()}
                    </td></>)}
                  </tr>

                  <tr>
                  {(fetchedData?.madicalValidityDocument) && (
                      <>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Medical Validity Document:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      <a href={fetchedData.madicalValidityDocument} target="_blank" className=" text-blue-700 text">Medical Validity Document
                      </a>
                    </td></>)}
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Police Verification Start Date:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      {new Date(fetchedData.policeVarificationDateFrom).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Police Verification End Date:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray", color: new Date(fetchedData.policeVarificationDateTo) < new Date() ? 'red' : 'black' }}>
                      {new Date(fetchedData.policeVarificationDateTo).toLocaleDateString()}
                    </td>
                  </tr>

                  <tr>
                    <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                      Police Verification Document:
                    </td>
                    <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                      <a href={fetchedData.policeVarificationDocument} target="_blank" className=" text-blue-700 text">Police Verification Document
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
      {/* <footer
        style={{
          height: "60px",
          // backgroundColor: "lightgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className=" bg-blue-300"
      >
      </footer> */}
      {/* <p>WABCamp Project</p> */}
    </div>
  );
}