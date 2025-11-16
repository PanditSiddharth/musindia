import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {AchievementsSection} from "@/components/Achievements";

export default function AchievementsPage() {
    return (
        <div className="bg-white flex flex-col gap-8 ">
            <Navbar />
            <main className="max-w-6xl mx-auto">
                <AchievementsSection />
            </main>
            <Footer />
        </div>
    );
}
