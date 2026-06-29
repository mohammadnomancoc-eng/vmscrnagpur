import React from 'react'
import { FaCircleChevronLeft } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from "../assets/Logo.png";
import { GrLogout } from 'react-icons/gr';

const ContractorInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state || {};
    console.log("data ", data);

    const handleLogout = () => {
        // localStorage.removeItem("AppUser");
        localStorage.removeItem("Token");
        navigate("/");
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
                    <h1 className='text-center font-semibold text-2xl mb-2'>Contractor Information</h1>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <tbody >
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Director Name
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.director_Name}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                Firm Name
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.firmName}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                FirmId
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.firmId}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Type of Firm
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.type_of_firm}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                     Contact No.
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.firm_Contact_no}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                Email
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.firm_Email}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Office Address
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {data?.firm_office_address}
                                </td>
                            </tr>
                            
                            
                            {/* <tr>
                                <td style={{ fontWeight: "bold", padding: "8px", border: "1px solid lightgray" }}>
                                    Contract fromDate
                                </td>
                                <td style={{ padding: "8px", border: "1px solid lightgray" }}>
                                    {new Date(data?.fromDate).toLocaleDateString()}
                                </td>
                            </tr> */}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default ContractorInfo
