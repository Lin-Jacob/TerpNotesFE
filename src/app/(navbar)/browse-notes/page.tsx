"use client";

import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function BrowseNotes() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState(["CMSC131", "Fall 2023"]);

    const courses = [
        {
            course: "CMSC131",
            semester: "Fall 2023",
            tags: ["Introductory", "Java", "Project-based"],
            professors: [
                { name: "Dr. Lee", notes: 5 },
                { name: "Prof. Smith", notes: 3 },
            ],
        },
        {
            course: "MATH140",
            semester: "Spring 2024",
            tags: ["Core", "Calculus", "Popular"],
            professors: [
                { name: "Dr. Johnson", notes: 4 },
            ],
        },
    ];


    const removeFilter = (filter: string) =>
        setFilters(filters.filter((f) => f !== filter));

    return (
        <section className="min-h-screen bg-[#F9F1E5] px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h1
                    className="text-4xl font-extrabold text-[#1F1F1F] mb-8 text-center"
                    style={{ fontFamily: "sen" }}
                >
                    Search notes
                </h1>

                <div className="flex items-center gap-3 bg-white border border-[#e0d7cb] rounded-xl px-5 py-3 shadow-md mb-4">
                    <FiSearch className="text-[#CD1015]" size={20} />
                    <input
                        type="text"
                        placeholder="Search for courses, professors, topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full focus:outline-none bg-transparent text-[#1F1F1F]"
                        style={{ fontFamily: "sen" }}
                    />
                </div>

                <div className="flex flex-wrap gap-3 mb-10">
                    {filters.map((filter, index) => (
                        <span
                            key={index}
                            className="bg-[#CD1015] text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm"
                        >
                            {filter}
                            <FiX
                                className="cursor-pointer"
                                onClick={() => removeFilter(filter)}
                            />
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {courses.map((course, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-[#e0d7cb] rounded-2xl shadow p-6"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <h3
                                    className="text-xl font-bold text-[#1F1F1F]"
                                    style={{ fontFamily: "sen" }}
                                >
                                    {course.course}
                                </h3>
                                <span className="bg-[#EAD8C0] text-[#1F1F1F] text-sm px-3 py-1 rounded-full font-medium">
                                    {course.semester}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {course.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs bg-[#F3E8D8] text-[#1F1F1F] px-2.5 py-1 rounded-full border border-[#e0d7cb]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>


                            <div className="space-y-4 mt-4">
                                {course.professors.map((prof, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center border border-[#e0d7cb] rounded-xl px-4 py-3 bg-[#F9F1E5]"
                                    >
                                        <div>
                                            <div className="font-semibold text-[#1F1F1F]">
                                                {prof.name}
                                            </div>
                                            <div className="text-sm text-[#555]">
                                                {prof.notes} notes available
                                            </div>
                                        </div>
                                        <button className="cursor-pointer bg-transparent hover:bg-[#CD1015] text-[#CD1015] border hover:text-white px-4 py-2 rounded-xl border-[#CD1015] transition-all">
                                            View Notes
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
