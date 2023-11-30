"use client";

export default function ShareLinkButton() {
	const handleShareClick = async () => {
		// Web Share API 지원 확인
		if (navigator.share) {
			try {
				// Web Share API 사용
				await navigator.share({
					title: "myojeong santa",
					url: process.env.NEXT_PUBLIC_FRONT_URL,
				});
			} catch (error) {
				console.log("error:", error);
			}
		} else {
			// Web Share API 지원 안될 경우 clipboard API 사용
			try {
				await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_FRONT_URL!);
				alert("복사 완료");
			} catch (error) {
				console.log("error:", error);
			}
		}
	};

	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			onClick={handleShareClick}
		>
			공유하기
		</button>
	);
}
