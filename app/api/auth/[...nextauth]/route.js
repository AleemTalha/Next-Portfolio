// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async jwt({ token, user }) {
//       // Assign role if signing in
//       if (user?.email) {
//         const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
//         const userEmail = user.email.trim().toLowerCase();
//         token.role = userEmail === adminEmail ? "admin" : "user";
//         token.email = user.email; // Ensure email is always on the token
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // Expose role and email to client
//       if (token?.role) session.user.role = token.role;
//       if (token?.email) session.user.email = token.email;
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };
