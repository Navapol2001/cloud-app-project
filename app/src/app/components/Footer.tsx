import React from 'react'

export default function Footer() {
	return (
		<footer className="w-full bg-gray-800 text-white text-center p-4">
			© {new Date().getFullYear()} Your Company. All rights reserved.
		</footer>
	);
}
