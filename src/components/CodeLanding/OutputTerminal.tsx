import { TerminalWindow, Text } from '@/styles/components_styles/outputTerminalStyle';

export default function OutputTerminal({ outputDetails }: any) {
	const getOutput = () => {
		let statusId = outputDetails?.status?.id;

		if (statusId === 6) {
			return <pre className="px-2 py-1 font-normal text-xs text-red-500">{atob(outputDetails?.compile_output)}</pre>;
		} else if (statusId === 3) {
			return (
				<pre className="px-2 py-1 font-normal text-xs text-green-500">
					{atob(outputDetails.stdout) !== null ? `${atob(outputDetails.stdout)}` : null}
				</pre>
			);
		} else if (statusId === 5) {
			return <pre className="px-2 py-1 font-normal text-xs text-red-500">{`Time Limit Exceeded`}</pre>;
		} else {
			return <pre className="px-2 py-1 font-normal text-xs text-red-500">{atob(outputDetails?.stderr)}</pre>;
		}
	};
	return (
		<>
			<Text>Output</Text>
			<TerminalWindow>{outputDetails ? <>{getOutput()}</> : null}</TerminalWindow>
		</>
	);
}
