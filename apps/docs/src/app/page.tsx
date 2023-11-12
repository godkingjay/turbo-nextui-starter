import { Button, SharedButton } from "ui/components";

export default function Page() {
	return (
		<>
			<div className="flex flex-col gap-4 p-4 min-h-screen items-center justify-center">
				<Button color="primary">NextUI Button!</Button>
				<button
					type="button"
					className="rounded-xl bg-blue-500 py-2 px-2.5 text-white hover:bg-blue-600"
				>
					Tailwind Button!
				</button>
				<SharedButton>Shared Button!</SharedButton>
			</div>
		</>
	);
}
