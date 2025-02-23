// import React from "react";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <div className="the-footer">
//       <div className="container">
//         <div className="logo-slogan">
//           <a href="http://localhost:3000/">
//             <Image
//               src="/logo.png"
//               width={50}
//               height={50}
//               alt="Pegasis logo"
//               className="shadow-sm"
//             />
//             <p className="text-3xl font-bold">MechaWorks</p>
//           </a>
//           <div className="desc">
//             Engage • <span className="grow">Grow</span> • Succeed
//           </div>
//         </div>
//         <div className="footer-nav container_right">
//           <div>
//             <div className="titlee">For Workers</div>
//             <a href="http://localhost:3002/" className="list-item">
//               Home
//             </a>
//             <a href="http://localhost:3002/" className="list-item">
//               Tasks
//             </a>
//             <a href="http://localhost:3002/" className="list-item">
//               Users Center
//             </a>
//             <a href="http://localhost:3002/" className="list-item">
//               Communities
//             </a>
//             <a href="http://localhost:3002/" className="list-item">
//               Payout
//             </a>
//           </div>
//           <div>
//             <div className="titlee">For Business</div>
//             <a href="http://localhost:3001/" className="list-item">
//               Home
//             </a>
//             <a href="http://localhost:3001/" className="list-item">
//               Create Task
//             </a>
//             <a href="http://localhost:3001/" className="list-item">
//               payment
//             </a>
//             <a href="http://localhost:3001/" className="list-item">
//               Communities
//             </a>
//             <a href="http://localhost:3001/" className="list-item">
//               insight
//             </a>
//           </div>
//           <div>
//             <div className="titlee">For Business</div>
//             <a href="http://localhost:3000/" className="list-item">
//               Discord
//             </a>
//             <a href="http://localhost:3000/" className="list-item">
//               Twitter
//             </a>
//             <a href="http://localhost:3000/" className="list-item">
//               Telegram
//             </a>
//             <a href="http://localhost:3000/" className="list-item">
//               Mail
//             </a>
//             <a href="http://localhost:3000/" className="list-item">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="terms-row">
//         <a href="http://localhost:3000/">@MechaWorks 2024-2025</a>
//         <a href="http://localhost:3000/">Terms of Service</a>
//         <a href="http://localhost:3000/">Privacy Policy</a>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-[#0D0D0D] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <a
            href="http://localhost:3000/"
            className="flex items-center gap-3 mb-4"
          >
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Pegasis logo"
              className="rounded-lg shadow-sm"
            />
            <p className="text-3xl font-bold text-white">MechaWorks</p>
          </a>
          <div className="text-lg">
            Engage • <span className="text-purple-600">Grow</span> • Succeed
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <div className="text-white font-semibold mb-4">For Workers</div>
            <div className="flex flex-col gap-3">
              <a
                href="http://localhost:3002/"
                className="hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="http://localhost:3002/"
                className="hover:text-white transition-colors"
              >
                Tasks
              </a>
              <a
                href="http://localhost:3002/"
                className="hover:text-white transition-colors"
              >
                Users Center
              </a>
              <a
                href="http://localhost:3002/"
                className="hover:text-white transition-colors"
              >
                Communities
              </a>
              <a
                href="http://localhost:3002/"
                className="hover:text-white transition-colors"
              >
                Payout
              </a>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">For Business</div>
            <div className="flex flex-col gap-3">
              <a
                href="http://localhost:3001/"
                className="hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="http://localhost:3001/"
                className="hover:text-white transition-colors"
              >
                Create Task
              </a>
              <a
                href="http://localhost:3001/"
                className="hover:text-white transition-colors"
              >
                Payment
              </a>
              <a
                href="http://localhost:3001/"
                className="hover:text-white transition-colors"
              >
                Communities
              </a>
              <a
                href="http://localhost:3001/"
                className="hover:text-white transition-colors"
              >
                Insight
              </a>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Contact Us</div>
            <div className="flex flex-col gap-3">
              <a
                href="http://localhost:3000/"
                className="hover:text-white transition-colors"
              >
                Discord
              </a>
              <a
                href="http://localhost:3000/"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="http://localhost:3000/"
                className="hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a
                href="http://localhost:3000/"
                className="hover:text-white transition-colors"
              >
                Mail
              </a>
              <a
                href="http://localhost:3000/"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>@MechaWorks 2024-2025</div>
          <div className="flex gap-6">
            <a
              href="http://localhost:3000/"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="http://localhost:3000/"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
