// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { FaGithub } from "react-icons/fa";

// export default function LoginPage() {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return (
//       <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--background)" }}>
//         <p style={{ color: "var(--foreground)" }}>Loading...</p>
//       </div>
//     );
//   }

//   if (!session) {
//     return (
//       <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--background)" }}>
//         <div
//           className="shadow-lg rounded-lg p-8 w-full max-w-sm flex flex-col items-center"
//           style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}
//         >
//           <FaGithub className="text-5xl mb-4" style={{ color: "var(--foreground)" }} />
//           <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--bold-text-color)" }}>
//             Sign in to your account
//           </h2>
//           <p className="mb-6 text-center" style={{ color: "var(--text-color)" }}>
//             Use your GitHub account to continue
//           </p>
//           <button
//             onClick={() => signIn("github", { callbackUrl: "/" })}
//             className="flex items-center gap-2 px-5 py-2.5 rounded transition font-semibold w-full justify-center"
//             style={{
//               backgroundColor: "var(--button-bg)",
//               color: "var(--button-text)",
//             }}
//           >
//             <FaGithub className="text-xl" />
//             Sign in with GitHub
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--background)" }}>
//       <div
//         className="shadow-lg rounded-lg p-8 w-full max-w-sm flex flex-col items-center"
//         style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}
//       >
//         <FaGithub className="text-5xl mb-4" style={{ color: "var(--foreground)" }} />
//         <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--bold-text-color)" }}>
//           Welcome!
//         </h2>
//         <p className="mb-4 text-center" style={{ color: "var(--text-color)" }}>
//           You are signed in with GitHub.
//         </p>
//         <button
//           onClick={() => signOut({ callbackUrl: "/" })}
//           className="px-5 py-2.5 rounded transition font-semibold w-full"
//           style={{
//             backgroundColor: "#d10000",
//             color: "white",
//           }}
//         >
//           Sign out
//         </button>
//       </div>
//     </div>
//   );
// }


import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
