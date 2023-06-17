export default function OutputDetails({ outputDetails }: any) {
	return (
		<div className="metrics-container mt-4 flex flex-col space-y-3">
			<p className="text-sm">
				Status: <span className="font-semibold px-2 py-1 rounded-md ">{outputDetails?.status?.description}</span>
			</p>
			<p className="text-sm">
				Memory: <span className="font-semibold px-2 py-1 rounded-md ">{outputDetails?.memory}</span>
			</p>
			<p className="text-sm">
				Time: <span className="font-semibold px-2 py-1 rounded-md ">{outputDetails?.time}</span>
			</p>
		</div>
	);
}
