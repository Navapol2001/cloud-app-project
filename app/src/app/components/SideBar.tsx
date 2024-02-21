"use client";
import React, { useEffect, useState } from 'react';

export default function SideBar() {
	const [currentPath, setCurrentPath] = useState('');

	useEffect(() => {
		// This assumes you have access to window.location in your component's context
		// In a fully server-rendered component, you'd use props or a context provider instead
		setCurrentPath(window.location.pathname);
	}, []);

	const isClient = currentPath.includes('app/client');
	const isCreditor = currentPath.includes('app/creditor');

	return (
		<div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
			<div className="px-5 py-4">
				<h1 className="text-xl font-semibold">Dashboard</h1>
			</div>
			<ul className="flex-grow">
				{isClient && (
					<>
						<li className="px-5 py-2 hover:bg-gray-700 cursor-pointer">Client Home</li>
						<li className="px-5 py-2 hover:bg-gray-700 cursor-pointer">Client Profile</li>
						<li className="px-5 py-2 hover:bg-gray-700 cursor-pointer">Client Settings</li>
					</>
				)}
				{isCreditor && (
					<>
						<li className="px-5 py-2 hover:bg-gray-700 cursor-pointer">Creditor Dashboard</li>
						<li className="px-5 py-2 hover:bg-gray-700 cursor-pointer">Creditor Reports</li>
						<li className="px-5 py-2 hover:bg-gray-700 cursor-pointer">Creditor Settings</li>
					</>
				)}
				{!isClient && !isCreditor && (
					<>
						<li className="px-5 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
						<li className="px-5 py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
						<li className="px-5 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
					</>
				)}
			</ul>
		</div>
	);
}
