//rfc คีย์ลัดสำหรับสร้างฟังก์ชันคอมโพเนนต์ใน React

import React from "react"; 
import Link from "next/link";

export default function NavbarMain() {  
    return (
        //<div style={{ display: "flex", gap: "10px", padding: "10px", backgroundColor: "#f0f0f0" }}>
        <div className="flex justify-center gap-4 p-4 bg-gray-600">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/product">Products</Link>
        </div>
    );
}