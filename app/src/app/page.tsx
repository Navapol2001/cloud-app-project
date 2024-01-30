"use client";
import Image from "next/image";
import { useState } from 'react';



export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    // Logic for login
    setShowLogin(false);
  };

  const handleSignup = () => {
    // Logic for signup
    setShowSignup(false);
  };


  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto p-8">
        <header className="text-center mb-12">
          <nav className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Loan Management System</h1>
            <div>
              <button className="mr-4 p-2 bg-blue-500 text-white rounded" onClick={() => setShowLogin(true)}>Login</button>
              <button className="p-2 bg-green-500 text-white rounded" onClick={() => setShowSignup(true)}>Sign Up</button>
            </div>
          </nav>

          <p className="text-lg mt-4">Efficiently manage and track loans and payment statuses.</p>
        </header>

        {showLogin && (
          <div className="modal">
            {/* Login Form Here */}
            <button onClick={() => setShowLogin(false)}>Close</button>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}

        {showSignup && (
          <div className="modal">
            {/* Signup Form Here */}
            <button onClick={() => setShowSignup(false)}>Close</button>
            <button onClick={handleSignup}>Sign Up</button>
          </div>
        )}

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-3">Creditor Dashboard</h2>
            <p>Manage loan offerings, track repayments, and analyze borrower profiles.</p>
            <Image src="/creditor_dashboard.svg" alt="Creditor Dashboard Image" width={100} height={100} />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-3">Client Dashboard</h2>
            <p>View loan details, track your repayment schedule, and manage your loan status.</p>
            <Image src="/client_dashboard.svg" alt="Client Dashboard Image" width={100} height={100} />
          </div>
        </section>

        <footer className="text-center mt-12">
          <p>&copy; {new Date().getFullYear()} Group Name Something. All Rights Reserved.</p>
        </footer>

      </div>
    </main>
  );
}
