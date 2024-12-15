// "use client";
// import React, { useState } from "react";

// const Page = () => {
//   // Sample data for students
//   const [students, setStudents] = useState([
//     {
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//       phoneNo: 9876543210,
//       branch: "CSE",
//       USN: "2GI21CS001",
//       points: 90,
//       passingYear: 2025,
//     },
//     {
//       firstName: "Jane",
//       lastName: "Smith",
//       email: "jane.smith@example.com",
//       phoneNo: 9123456789,
//       branch: "ECE",
//       USN: "2GI21CS002",
//       points: 85,
//       passingYear: 2024,
//     },
//   ]);

//   const eventsWithClubs = [
//     {
//       club: { name: "Robotics Club" },
//       event: {
//         name: "Robotics Workshop",
//         date: "2024-11-12",
//         points: 10,
//         link: "https://example.com",
//       },
//     },
//     {
//       club: { name: "Cultural Club" },
//       event: {
//         name: "Cultural Fest",
//         date: "2024-09-21",
//         points: 15,
//         link: "https://example.com",
//       },
//     },
//   ];

//   // Modal state
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   // Modal close function
//   const closeModal = () => setSelectedStudent(null);

//   return (
//     <div className="container mx-auto min-h-screen rounded-lg bg-zinc-50 px-8 py-8 shadow-md">
//       {/* Title */}
//       <h1 className="mb-2 text-center font-primary text-4xl font-bold text-black">
//         Student Information
//       </h1>

//       {/* Line for separation */}
//       <div className="mb-6 border-b-2 border-gray-300"></div>

//       {/* Search and filter section */}
//       <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
//         <input
//           type="text"
//           placeholder="Search by USN"
//           className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
//         />
//         <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
//           <option value="">Select Year</option>
//           <option value="2023">2020</option>
//           <option value="2024">2021</option>
//           <option value="2025">2022</option>
//           <option value="2023">2023</option>
//           <option value="2024">2024</option>
//           <option value="2025">2025</option>
//         </select>
//         <button className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2 text-white shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none">
//           Search
//         </button>
//       </div>

//       {/* Student table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full rounded-lg bg-white shadow-md">
//           <thead>
//             <tr className="bg-gradient-to-r from-gray-200 to-gray-300 text-center text-base font-semibold uppercase tracking-wide text-gray-800">
//               <th className="px-4 py-3">First Name</th>
//               <th className="px-4 py-3">Last Name</th>
//               <th className="px-4 py-3">Email</th>
//               <th className="px-4 py-3">Phone No</th>
//               <th className="px-4 py-3">Branch</th>
//               <th className="px-4 py-3">USN</th>
//               <th className="px-4 py-3">Points</th>
//               <th className="px-4 py-3">Passing Year</th>
//               <th className="px-4 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student, index) => (
//               <tr
//                 key={index}
//                 className="text-center text-base text-gray-600 odd:bg-white even:bg-gray-100"
//               >
//                 <td className="px-4 py-3">{student.firstName}</td>
//                 <td className="px-4 py-3">{student.lastName}</td>
//                 <td className="px-4 py-3">{student.email}</td>
//                 <td className="px-4 py-3">{student.phoneNo}</td>
//                 <td className="px-4 py-3">{student.branch}</td>
//                 <td className="px-4 py-3 font-semibold text-blue-600">
//                   {student.USN}
//                 </td>
//                 <td className="px-4 py-3">{student.points}</td>
//                 <td className="px-4 py-3">{student.passingYear}</td>
//                 <td className="px-4 py-3">
//                   <button
//                     onClick={() => setSelectedStudent(student)}
//                     className="rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 px-4 py-2 text-white shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none"
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for displaying student details */}
//       {selectedStudent && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="relative w-full max-w-5xl rounded-lg bg-white p-10 shadow-xl">
//             <button
//               onClick={closeModal}
//               className="absolute right-4 top-4 text-2xl text-gray-700"
//             >
//               &times;
//             </button>

//             {/* Student Info Section - Spanning entire modal */}
//             <div className="mb-8 w-full rounded-lg bg-white p-6 shadow-md">
//               <h3 className="mb-4 font-primary text-lg font-semibold text-black md:text-2xl lg:text-3xl">
//                 Student Details:
//               </h3>

//               <table className="min-w-full table-auto text-lg text-gray-700">
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="px-4 py-3 font-semibold">Name:</td>
//                     <td className="px-4 py-3">
//                       {selectedStudent.firstName +
//                         " " +
//                         selectedStudent.lastName}
//                     </td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="px-4 py-3 font-semibold">USN:</td>
//                     <td className="px-4 py-3">{selectedStudent.USN}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="px-4 py-3 font-semibold">
//                       Year of Passing:
//                     </td>
//                     <td className="px-4 py-3">{selectedStudent.passingYear}</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="px-4 py-3 font-semibold">Branch:</td>
//                     <td className="px-4 py-3">{selectedStudent.branch}</td>
//                   </tr>
//                   {/* Integrated Total Points Earned */}
//                   <tr className="border-b">
//                     <td className="px-4 py-3 font-semibold">
//                       Total Points Earned:
//                     </td>
//                     <td className="px-4 py-3">{selectedStudent.points}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {/* Bottom Table with Events - Smaller section */}
//             <div className="rounded-lg bg-white p-6 shadow-md lg:p-10">
//               <h3 className="mb-6 text-xl font-semibold text-black md:text-2xl lg:text-3xl">
//                 Participated Events:
//               </h3>
//               <div className="overflow-x-auto rounded-lg">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr className="bg-blue-900 text-center text-white">
//                       <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
//                         Club Name
//                       </th>
//                       <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
//                         Activity Name
//                       </th>
//                       <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
//                         Date
//                       </th>
//                       <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
//                         Points
//                       </th>
//                       <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
//                         Certificate
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {eventsWithClubs.map((item, index) =>
//                       item && item.event ? (
//                         <tr
//                           key={index}
//                           className="border-t text-center odd:bg-gray-100 even:bg-white"
//                         >
//                           <td className="px-4 py-3 font-medium text-black md:px-5 md:py-4">
//                             {item.club ? item.club.name : "Club not found"}
//                           </td>
//                           <td className="px-4 py-3 text-black md:px-5 md:py-4">
//                             {item.event.name}
//                           </td>
//                           <td className="px-4 py-3 text-black md:px-5 md:py-4">
//                             {item.event.date}
//                           </td>
//                           <td className="px-4 py-3 text-black md:px-5 md:py-4">
//                             {item.event.points}
//                           </td>
//                           <td className="px-4 py-3 text-black md:px-5 md:py-4">
//                             <a
//                               href={item.event.link}
//                               className="rounded-xl bg-blue-500 px-3 py-1 text-white transition hover:bg-blue-700 md:px-3 md:py-2"
//                             >
//                               Download
//                             </a>
//                           </td>
//                         </tr>
//                       ) : (
//                         <tr key={index}>
//                           <td
//                             colSpan={5}
//                             className="px-4 py-3 text-center text-sm md:text-base"
//                           >
//                             Event data not found
//                           </td>
//                         </tr>
//                       ),
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useEffect, useState } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import {
  getStudentsByBranch,
  getFacultyBranch,
  getStudentsByYear,
  getBodsByBranch,
  getAdminsByBranch,
  getBodsByYear,
  getAdminsByYear,
  findStudent,
  findBod,
  findAdmin,
  getParticipatedStudent,
  getParticipatedBod,
  getParticipatedAdmin,
  getParticipatedEvent,
  getParticipatedClub,
} from "../../_lib/data-service";

const StudentsPage = () => {
  const { data: session, status } = useSession();
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [facultyBranch, setFacultyBranch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null); // State to track selected student for modal
  const [eventsWithClubs, setEventsWithClubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "authenticated" && session?.user) {
        try {
          const facultyBranchData = await getFacultyBranch(session.user.id);
          if (facultyBranchData && facultyBranchData.length > 0) {
            const branch = facultyBranchData[0]?.branch;
            setFacultyBranch(branch);

            // Fetch all data (students, BODs, and admins) from the same branch
            const studentsData = await getStudentsByBranch(branch);
            const bodsData = await getBodsByBranch(branch);
            const adminsData = await getAdminsByBranch(branch);

            const combinedData = [
              ...studentsData.map((student) => ({
                ...student,
                type: "Student",
              })),
              ...bodsData.map((bod) => ({ ...bod, type: "BOD" })),
              ...adminsData.map((admin) => ({ ...admin, type: "Admin" })),
            ];

            setAllData(combinedData);
            setFilteredData(combinedData);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [status, session]);

  useEffect(() => {
    if (selectedStudent) {
      const fetchEvents = async () => {
        let events = [];

        // Fetch the participated events based on the selected student's role
        if (selectedStudent.type === "Student") {
          events = await getParticipatedStudent(selectedStudent.id);
        } else if (selectedStudent.type === "BOD") {
          events = await getParticipatedBod(selectedStudent.id);
        } else if (selectedStudent.type === "Admin") {
          events = await getParticipatedAdmin(selectedStudent.id);
        }

        if (events && events.length > 0) {
          const eventsWithClubDetails = await Promise.all(
            events.map(async (event) => {
              const eventDetails = await getParticipatedEvent(event.eventId);
              if (eventDetails && eventDetails.clubId) {
                const clubDetails = await getParticipatedClub(
                  eventDetails.clubId
                );
                return { event: eventDetails, club: clubDetails };
              }
              return null;
            })
          );

          // Filter out any null values from the event details
          setEventsWithClubs(
            eventsWithClubDetails.filter((event) => event !== null)
          );
        } else {
          console.warn("No events found for this participant.");
          setEventsWithClubs([]); // Default to an empty array if no events exist
        }
      };

      fetchEvents();
    }
  }, [selectedStudent]);

  const handleYearChange = async (event) => {
    const year = event.target.value;
    setSelectedYear(year);

    if (year && facultyBranch) {
      try {
        const studentsByYear = await getStudentsByYear(
          Number(year),
          facultyBranch
        );
        const bodsByYear = await getBodsByYear(Number(year), facultyBranch);
        const adminsByYear = await getAdminsByYear(Number(year), facultyBranch);

        const combinedDataByYear = [
          ...studentsByYear.map((student) => ({ ...student, type: "Student" })),
          ...bodsByYear.map((bod) => ({ ...bod, type: "BOD" })),
          ...adminsByYear.map((admin) => ({ ...admin, type: "Admin" })),
        ];

        setFilteredData(combinedDataByYear);
      } catch (error) {
        console.error("Error fetching filtered data:", error);
      }
    } else {
      setFilteredData(allData); // Reset to all data if no year is selected
    }
  };

  const handleSearch = async () => {
    if (searchQuery) {
      try {
        const student = await findStudent(searchQuery);
        const bod = await findBod(searchQuery);
        const admin = await findAdmin(searchQuery);

        let result = [];
        if (student) result.push({ ...student, type: "Student" });
        if (bod) result.push({ ...bod, type: "BOD" });
        if (admin) result.push({ ...admin, type: "Admin" });

        setFilteredData(result);
      } catch (error) {
        console.error("Error searching by USN:", error);
      }
    } else {
      setFilteredData(allData);
    }
  };

  const closeModal = () => setSelectedStudent(null);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="container mx-auto min-h-screen rounded-lg bg-zinc-50 px-8 py-8 shadow-md">
      <h1 className="mb-2 text-center font-primary text-4xl font-bold text-black">
        Student Information
      </h1>
      <div className="mb-6 border-b-2 border-gray-300"></div>

      {/* Search and Year Filter */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Search by USN"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Year</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <button
          onClick={() => handleSearch()}
          className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2 text-white shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none"
        >
          Search
        </button>
      </div>

      {/* Display Combined Table for Students, BODs, Admins */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full rounded-lg bg-white shadow-md">
          <thead>
            <tr className="bg-gradient-to-r from-gray-200 to-gray-300 text-center text-base font-semibold uppercase tracking-wide text-gray-800">
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone No</th>
              <th className="px-4 py-3">Branch</th>
              <th className="px-4 py-3">USN</th>
              <th className="px-4 py-3">Points</th>
              <th className="px-4 py-3">Passing Year</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="text-center text-base text-gray-600 odd:bg-white even:bg-gray-100"
                >
                  <td className="px-4 py-3">{item.firstName}</td>
                  <td className="px-4 py-3">{item.lastName}</td>
                  <td className="px-4 py-3">{item.email}</td>
                  <td className="px-4 py-3">{item.phoneNo}</td>
                  <td className="px-4 py-3">{item.branch}</td>
                  <td className="px-4 py-3 font-semibold text-blue-600">
                    {item.USN || "-"}
                  </td>
                  <td className="px-4 py-3">{item.points || "-"}</td>
                  <td className="px-4 py-3">{item.passingYear || "-"}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelectedStudent(item)}
                      className="rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 px-4 py-2 text-white shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-6 w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 h-auto max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className=" text-center text-3xl font-bold mb-4">
              Student Details
            </h2>

            <div className="grid grid-cols-2 gap-4 text-lg text-gray-700">
              {/* Left Column */}
              <div>
                <div className="border-b py-3">
                  <span className="font-semibold">Name:</span>{" "}
                  <span>
                    {selectedStudent.firstName + " " + selectedStudent.lastName}
                  </span>
                </div>
                <div className="border-b py-3">
                  <span className="font-semibold">USN:</span>{" "}
                  <span>{selectedStudent.USN}</span>
                </div>
                <div className="border-b py-3">
                  <span className="font-semibold">Phone:</span>{" "}
                  <span>{selectedStudent.phoneNo}</span>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="border-b py-3">
                  <span className="font-semibold">Email:</span>{" "}
                  <span>{selectedStudent.email}</span>
                </div>
                <div className="border-b py-3">
                  <span className="font-semibold">Year of Passing:</span>{" "}
                  <span>{selectedStudent.passingYear}</span>
                </div>
                <div className="border-b py-3">
                  <span className="font-semibold">Branch:</span>{" "}
                  <span>{selectedStudent.branch}</span>
                </div>
              </div>

              {/* Highlighted Total Points Earned Section */}
              <div className="col-span-2 mt-6">
                <div className="bg-emerald-100 border border-emerald-500 rounded-lg p-4 text-center">
                  <span className="font-bold text-xl text-emerald-700">
                    Total Points Earned: {selectedStudent.points}
                  </span>
                </div>
              </div>
            </div>

            {/* Participated Events Table */}
            <div className="rounded-lg bg-white p-6 shadow-md lg:p-10 mt-10">
              <h3 className="mb-6 text-xl font-semibold text-black md:text-2xl lg:text-3xl">
                Participated Events:
              </h3>
              <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-blue-900 text-center text-white">
                      <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
                        Club Name
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
                        Activity Name
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
                        Date
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
                        Points
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold md:py-4 md:text-base">
                        Certificate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventsWithClubs.length > 0 ? (
                      eventsWithClubs.map((item, index) =>
                        item && item.event ? (
                          <tr
                            key={index}
                            className="border-t text-center odd:bg-gray-100 even:bg-white"
                          >
                            <td className="px-4 py-3 font-medium text-black md:px-5 md:py-4">
                              {item.club ? item.club.name : "Club not found"}
                            </td>
                            <td className="px-4 py-3 text-black md:px-5 md:py-4">
                              {item.event.name}
                            </td>
                            <td className="px-4 py-3 text-black md:px-5 md:py-4">
                              {item.event.date}
                            </td>
                            <td className="px-4 py-3 text-black md:px-5 md:py-4">
                              {item.event.points}
                            </td>
                            <td className="px-4 py-3 text-black md:px-5 md:py-4">
                              <a
                                href={item.event.link}
                                className="rounded-xl bg-blue-500 px-3 py-1 text-white transition hover:bg-blue-700 md:px-3 md:py-2"
                              >
                                Download
                              </a>
                            </td>
                          </tr>
                        ) : (
                          <tr key={index}>
                            <td
                              colSpan={5}
                              className="px-4 py-3 text-center text-sm md:text-base"
                            >
                              Event data not found
                            </td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-4 py-3 text-center text-sm md:text-base"
                        >
                          No events participated
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Page = (props) => {
  return (
    <SessionProvider>
      <StudentsPage {...props} />
    </SessionProvider>
  );
};

export default Page;
