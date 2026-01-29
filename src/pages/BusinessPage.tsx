import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HeroFnB from "../components/Businesspage/FnB";
import HeroRetail from "../components/Businesspage/Retail";
import HeroJasa from "../components/Businesspage/Jasa";

const TABS = [
	{ key: "fnb", label: "F&B" },
	{ key: "retail", label: "Retail" },
	{ key: "jasa", label: "Jasa" },
];

const BusinessPage = () => {
	const [searchParams] = useSearchParams();
	const initialTab = searchParams.get("tab") || "fnb";
	const [tab, setTab] = useState(initialTab);

	useEffect(() => {
		setTab(searchParams.get("tab") || "fnb");
	}, [searchParams]);

	return (
		<main className="min-h-screen w-full">
			<div className="flex justify-center gap-4 pt-10 pb-6">
				{TABS.map((t) => (
					<button
						key={t.key}
						onClick={() => setTab(t.key)}
						className={`px-6 py-2 rounded-full font-semibold border transition-colors duration-200 text-base
							${tab === t.key ? "bg-[#7CFF00] text-[#254D00] border-[#7CFF00]" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
					>
						{t.label}
					</button>
				))}
			</div>
			{tab === "fnb" && <HeroFnB />}
			{tab === "retail" && <HeroRetail />}
			{tab === "jasa" && <HeroJasa />}
		</main>
	);
};

export default BusinessPage;
