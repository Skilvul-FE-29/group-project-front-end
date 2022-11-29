// import React from "react";
// import "../styles/Schedule.css";

// const ScheduleDetail = ({
//   dataItem,
//   handleDetailsRemove,
//   teachers,
//   detail,
// }) => {
//   return (
//     <>
//       {detail && (
//         <div className="detail-sesi-wrapper" id="modal-detail">
//           <div className="header">
//             <h3 className="detail-title">Detail Sesi</h3>
//             {/* <button
//               className="btn-close-schedule"
//               onClick={handleDetailsRemove}
//             >
//               x
//             </button> */}
//           </div>
//           <hr />
//           <div className="detail-info">
//             <div className="detail-top">
//               <p>
//                 Pelajaran : <span>{dataItem.topik}</span>
//               </p>
//               <p>
//                 Pertemuan : <span>1</span>
//               </p>
//               <p>
//                 Pengajar : <span> </span>
//                 <span>
//                   {teachers.map((teacher) => {
//                     if (teacher.id == dataItem.teacherId) {
//                       return teacher.nama;
//                     }
//                   })}
//                 </span>
//               </p>
//               <p>
//                 Hari/Tanggal :{" "}
//                 <span>
//                   {new Date(dataItem.tanggal).toLocaleDateString("id-ID", {
//                     weekday: "long",
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                   })}
//                 </span>
//               </p>
//               <p>
//                 Waktu : <span>{dataItem.jamMulai} - selesai</span>
//               </p>
//             </div>
//             <div className="detail-bottom">
//               <h3>Detail Pembelajaran : </h3>
//               <p>
//                 1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               </p>
//               <p>
//                 2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               </p>
//               <p>
//                 3. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               </p>
//             </div>
//             <button className="btn-detail-sesi" style={{ marginTop: "20px" }}>
//               Online Via Zoom
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ScheduleDetail;
