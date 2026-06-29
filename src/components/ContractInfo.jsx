// import React from 'react'
// import { FaCircleChevronLeft } from 'react-icons/fa6';
// import { useLocation, useNavigate } from 'react-router-dom'
// import Logo from "../assets/Logo.png";
// import { GrLogout } from 'react-icons/gr';

// const ContractInfo = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { data } = location.state || {};
//     console.log("data contractInfo", data);

//     const handleLogout = () => {
//         // localStorage.removeItem("AppUser");
//         localStorage.removeItem("Token");
//         navigate("/");
//     };

//     const getFileTypeFromURL = (url) => {
//         if (!url) {
//             return 'unknown';
//         }

//         if (url.includes(".jpg") || url.includes(".jpeg") || url.includes(".png")) {
//             return 'image';
//         } else if (url.includes(".pdf")) {
//             return 'pdf';
//         } else {
//             return 'unknown';
//         }
//     };

//     return (
//         <>
//             <header
//                 style={{
//                     height: "70px",

//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     padding: "5px",
//                 }} className=" bg-blue-300"
//             >
//                 <img src={Logo} style={{ height: "60px", width: "60px" }} alt="Logo" />
//                 <GrLogout
//                     style={{
//                         height: "30px",
//                         width: "30px",
//                         margin: "0 20px 0 0",
//                         cursor: "pointer",
//                     }}
//                     onClick={handleLogout}
//                 />
//             </header>
//             <div
//                 style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     flex: "1",
//                     padding: "20px",
//                     marginBottom: "10px",
//                 }}
//             >
//                 <div className=" flex justify-end items-end w-full mt-2 ">
//                     <button className=" text-white bg-black hover:bg-gray-700 rounded px-3 py-1 flex items-center gap-1" onClick={() => navigate(-1)}> <FaCircleChevronLeft /> Back</button>
//                 </div>

//                 <div style={{
//                     marginTop: "20px",
//                     textAlign: "center",
//                     padding: "10px",
//                     border: "1px solid lightgray",
//                     borderRadius: "10px",
//                     backgroundColor: "white",
//                     width: "100%",
//                 }}
//                     className=" mb-10">
//                     <h1 className='text-center font-semibold text-2xl mb-2'>Contract Information</h1>
//                     <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                         <tbody >
//                             <tr>
//                                 <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                     Contract Name
//                                 </td>
//                                 <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                                     {data?.licensee}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                     Contract Agency
//                                 </td>
//                                 <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                                     {data?.agency}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                     Contract Category
//                                 </td>
//                                 <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                                     {data?.category}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                     Contract Id
//                                 </td>
//                                 <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                                     {data?.contractId}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                     Contract fromDate
//                                 </td>
//                                 <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                                     {new Date(data?.fromDate).toLocaleDateString()}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }} >
//                                     Contract toDate
//                                 </td>
//                                 <td style={{ padding: "8px", border: "1px solid lightgray" }} className={`${new Date(data?.toDate) < new Date() ? "text-red-600" : ""}`}>
//                                     {new Date(data?.toDate).toLocaleDateString()}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                     Contract status
//                                 </td>
//                                 <td style={{ padding: "8px", border: "1px solid lightgray" }} className={`${data?.isApproved ? "text-green-600" : "text-red-600"}`}>
//                                     {data?.isApproved ? ("Approved") : ("Rejected")}
//                                 </td>
//                             </tr>
//                             {
//                                 data?.category === "Static Unit" &&
//                                 <>
//                                     <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                             Station Name
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                                             {data?.stationName.map((d, i) => (<p key={i}>{d}</p>))}
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                             Location Of Stall
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                                             {data?.locationOfStall}
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                             Vendors Permitted At Stall
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                                             {data?.vendors_permitted_at_stole}
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                             Stall Photos
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                                             {getFileTypeFromURL(data?.stallPhoto) === "pdf" ? (
//                                                 <a href={data?.stallPhoto} target="_blank" className="text-blue-700 text">View PDF</a>
//                                             ) : (
//                                                 <img
//                                                     src={data?.stallPhoto}
//                                                     alt="Profile"
//                                                     style={{ maxHeight: "100px", borderRadius: "10px" }}
//                                                 />
//                                             )}
//                                         </td>
//                                     </tr>

//                                     <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                             Fire Audit Date
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }} >
//                                             {new Date(data?.fireAuditdate).toLocaleDateString()}
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                         Fire Audit Doc
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                                             {getFileTypeFromURL(data?.FireAuditDoc) === "pdf" ? (
//                                                 <a href={data?.FireAuditDoc} target="_blank" className="text-blue-700 text">View PDF</a>
//                                             ) : (
//                                                 <img
//                                                     src={data?.FireAuditDoc}
//                                                     alt="Profile"
//                                                     style={{ maxHeight: "100px", borderRadius: "10px" }}
//                                                 />
//                                             )}
//                                         </td>
//                                     </tr>
//                                {     
//                                  data.SanctionedLoad &&   <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                         Sanctioned load (KW)
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                                       { data?.SanctionedLoad}
//                                         </td>
//                                     </tr>}

//                                 {  data.ConnectedLoad &&  <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                         ConnectedLoad (KW)
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                                       { data?.ConnectedLoad}
//                                         </td>
//                                     </tr>}

//                                  {data?.SupplyRelease &&   <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                         Supply Release for (Hrs)
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                                       { data?.SupplyRelease}
//                                         </td>
//                                     </tr>}

//                                    {data?.EquipmentDetails && <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                         Equipment Details
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                                       { data?.EquipmentDetails}
//                                         </td>
//                                     </tr>}
// {
//                                 data?.NumberOfPlug &&    <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                         Number Of Plug
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                                       { data?.NumberOfPlug}
//                                         </td>
//                                     </tr>}

//                                   { data.Remarks && <tr>
//                                         <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                       Remarks
//                                         </td>
//                                         <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                                       { data?.Remarks}
//                                         </td>
//                                     </tr>}
                                    
//                                 </>
//                             }
                   
//                             <tr>
//                                 <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                 Authority Document
//                                 </td>
//                                 <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
//                                     {getFileTypeFromURL(data?.authorityDocument) === "pdf" ? (
//                                         <a href={data?.authorityDocument} target="_blank" className="text-blue-700 text">View PDF</a>
//                                     ) : (
//                                         <img
//                                             src={data?.authorityDocument}
//                                             alt="Profile"
//                                             style={{ maxHeight: "100px", borderRadius: "10px" }}
//                                         />
//                                     )}
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
//                                     Total Vendors
//                                 </td>
//                                 <td style={{ padding: "8px", border: "1px solid lightgray" }}>
//                                     {data?.vendors.length}
//                                 </td>
//                             </tr>


//                         </tbody>
//                     </table>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default ContractInfo

import React from 'react'
import { FaCircleChevronLeft } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from "../assets/Logo.png";
import { GrLogout } from 'react-icons/gr';

const ContractInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state || {};
    console.log("data contractInfo", data);

    const handleLogout = () => {
        // localStorage.removeItem("AppUser");
        localStorage.removeItem("Token");
        navigate("/");
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

    return (
        <>
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
            <div
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
                <div className=" flex justify-end items-end w-full mt-2 ">
                    <button className=" text-white bg-black hover:bg-gray-700 rounded px-3 py-1 flex items-center gap-1" onClick={() => navigate(-1)}> <FaCircleChevronLeft /> Back</button>
                </div>

                <div style={{
                    marginTop: "20px",
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    width: "100%",
                }}
                    className=" mb-10">
                    <h1 className='text-center font-semibold text-2xl mb-2'>Contract Information</h1>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <tbody >
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Contract Name
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.licensee}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Contract Agency
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.agency}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Contract Category
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.category}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Contract Id
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.contractId}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Contract fromDate
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {new Date(data?.fromDate).toLocaleDateString()}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }} >
                                    Contract toDate
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }} className={`${new Date(data?.toDate) < new Date() ? "text-red-600" : ""}`}>
                                    {new Date(data?.toDate).toLocaleDateString()}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Contract status
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }} className={`${data?.isApproved ? "text-green-600" : "text-red-600"}`}>
                                    {data?.isApproved ? ("Approved") : ("Rejected")}
                                </td>
                            </tr>
                            {
                                data?.category === "Static Unit" &&
                                <>
                                    <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                            Station Name
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                            {data?.stationName.map((d, i) => (<p key={i}>{d}</p>))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                            Location Of Stall
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                            {data?.locationOfStall}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                            Vendors Permitted At Stall
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                            {data?.vendors_permitted_at_stole}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                            Stall Photos
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                                            {getFileTypeFromURL(data?.stallPhoto) === "pdf" ? (
                                                <a href={data?.stallPhoto} target="_blank" className="text-blue-700 text">View PDF</a>
                                            ) : (
                                                <img
                                                    src={data?.stallPhoto}
                                                    alt="Profile"
                                                    style={{ maxHeight: "100px", borderRadius: "10px" }}
                                                />
                                            )}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                            Fire Audit Date
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }} >
                                            {new Date(data?.fireAuditdate).toLocaleDateString()}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                        Fire Audit Doc
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                                            {getFileTypeFromURL(data?.FireAuditDoc) === "pdf" ? (
                                                <a href={data?.FireAuditDoc} target="_blank" className="text-blue-700 text">View PDF</a>
                                            ) : (
                                                <img
                                                    src={data?.FireAuditDoc}
                                                    alt="Profile"
                                                    style={{ maxHeight: "100px", borderRadius: "10px" }}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                             <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Licence Fees Paid Upto
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {new Date(data?.licence_fees_paid_upto).toLocaleDateString()}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Contract Contact
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.Licensee_Contact_details}
                                </td>
                            </tr>
                               {     
                                 data.SanctionedLoad &&   <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                        Sanctioned load (KW)
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                                      { data?.SanctionedLoad}
                                        </td>
                                    </tr>}

                                {  data.ConnectedLoad &&  <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                        ConnectedLoad (KW)
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                                      { data?.ConnectedLoad}
                                        </td>
                                    </tr>}

                                 {data?.SupplyRelease &&   <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                        Supply Release for (Hrs)
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                                      { data?.SupplyRelease}
                                        </td>
                                    </tr>}

                                   {data?.EquipmentDetails && <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                        Equipment Details
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                                      { data?.EquipmentDetails}
                                        </td>
                                    </tr>}
{
                                data?.NumberOfPlug &&    <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                        Number Of Plug
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                                      { data?.NumberOfPlug}
                                        </td>
                                    </tr>}

                                  { data.Remarks && <tr>
                                        <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                      Remarks
                                        </td>
                                        <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                                      { data?.Remarks}
                                        </td>
                                    </tr>}
                                    
                                </>
                            }
                   
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                Authority Document
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }} className=" mx-auto flex items-center justify-center">
                                    {getFileTypeFromURL(data?.authorityDocument) === "pdf" ? (
                                        <a href={data?.authorityDocument} target="_blank" className="text-blue-700 text">View PDF</a>
                                    ) : (
                                        <img
                                            src={data?.authorityDocument}
                                            alt="Profile"
                                            style={{ maxHeight: "100px", borderRadius: "10px" }}
                                        />
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Total Vendors
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.vendors.length}
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default ContractInfo