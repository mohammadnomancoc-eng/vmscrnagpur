import React from 'react'

export default function Footer() {
  //123
  return (
    <div style={{
      fontWeight: 'bold',
      textAlign: 'center',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'lightblue',
      height: '45px',
      lineHeight: '45px',
    }} className=' text-[#979b9b] text-[0.6rem] bg-blue-300'>
      {/* &copy; Designed and Developed by <a href="">Royals Webtech</a> */}
      {/* <div className=' flex gap-12 text-center mx-auto justify-center items-center'>
        <p>Copyright &copy; Nagpur Central Railway</p>  <p>Royals Webtech - 2024</p>
      </div> */}

      Copyright &copy; Nagpur Central Railway - 2024
    </div>
  )
}
