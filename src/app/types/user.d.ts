// declare module 'next-auth' {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       id: string;
//       name: string;
//       email: string;
//       profile_image: string;
//       gender: string;
//       mobile: string;
//       age: string;
//     };
//   }

//   interface User {
//     id: string;
//     name: string;
//     email: string;
//     profile_image: string;
//     gender: string;
//     mobile: string;
//     age: string;
//   }

//   interface Profile {
//     response: {
//       id: string;
//       name: string;
//       email: string;
//       profile_image: string;
//       gender: string;
//       mobile: string;
//       age: string;
//     };
//   }

//   interface AdapterUser {
//     id: string;
//     name: string;
//     email: string;
//     profile_image: string;
//     gender: string;
//     mobile: string;
//     age: string;
//   }
// }

// // declare module 'next-auth/jwt' {
// //   /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
// //   interface JWT {
// //     /** OpenID ID Token */
// //   }
// // }
