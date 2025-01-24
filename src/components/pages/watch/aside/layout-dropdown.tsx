import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLayoutContext } from "@/stores/layout-store";
import { generateFocusLayout } from "@/util/layout-generator";
import { Layout } from "@phosphor-icons/react/dist/ssr";

export function LayoutDropdown() {
	const layout = useLayoutContext((s) => s);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" className="border-r-0" innerClassName="size-8">
					<Layout size="1.15rem" weight="bold" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side="left">
				<DropdownMenuItem
					className="[&_svg]:size-5"
					onClick={() => {
						layout.setHasChanged(true);
						layout.setLayout(
							generateFocusLayout({
								list: layout.layout,
								type: "one",
							}),
						);
					}}
				>
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						width="1rem"
						height="1rem"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6H5C4.44772 6 4 6.44772 4 7Z"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<line
							x1="5"
							y1="20"
							x2="27"
							y2="20"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<path d="M16 21V25" stroke="currentColor" strokeWidth="2" />
						<path d="M10 21V25" stroke="currentColor" strokeWidth="2" />
						<path d="M22 21V25" stroke="currentColor" strokeWidth="2" />
					</svg>
					1 live
				</DropdownMenuItem>
				<DropdownMenuItem
					className="[&_svg]:size-5"
					onClick={() => {
						layout.setHasChanged(true);
						layout.setLayout(
							generateFocusLayout({
								list: layout.layout,
								type: "two",
							}),
						);
					}}
				>
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						width="1rem"
						height="1rem"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6H5C4.44772 6 4 6.44772 4 7Z"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<line
							x1="5"
							y1="20"
							x2="27"
							y2="20"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<path d="M16 7V25" stroke="currentColor" strokeWidth="2" />
						<path d="M10 21V25" stroke="currentColor" strokeWidth="2" />
						<path d="M22 21V25" stroke="currentColor" strokeWidth="2" />
					</svg>
					2 lives
				</DropdownMenuItem>
				<DropdownMenuItem
					className="[&_svg]:size-5"
					onClick={() => {
						layout.setHasChanged(true);
						layout.setLayout(
							generateFocusLayout({
								list: layout.layout,
								type: "chat",
							}),
						);
					}}
				>
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						width="1rem"
						height="1rem"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6H5C4.44772 6 4 6.44772 4 7Z"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<line
							x1="5"
							y1="20"
							x2="27"
							y2="20"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<path d="M16 20V25" stroke="currentColor" strokeWidth="2" />
						<path d="M10 21V25" stroke="currentColor" strokeWidth="2" />
						<path d="M22 21V25" stroke="currentColor" strokeWidth="2" />
						<path d="M19 7V19" stroke="currentColor" strokeWidth="2" />
					</svg>
					Live e chat
				</DropdownMenuItem>
				<DropdownMenuItem
					className="[&_svg]:size-5"
					onClick={() => {
						layout.resetLayout();
					}}
				>
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						width="1rem"
						height="1rem"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 3L28 29"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M6.40832 5H5C3.89543 5 3 5.89543 3 7V25C3 26.1046 3.89543 27 5 27H26.716L24.8699 25H23V22.9743L19.3314 19H5V7H8.25448L6.40832 5ZM5 25V21H9V25H5ZM11 21H15V25H11V21ZM17 21H21V25H17V21Z"
							fill="currentColor"
						/>
						<path
							d="M22.0532 19H27V7L10.9763 7L9.13014 5H27C28.1046 5 29 5.89543 29 7V25C29 25.4235 28.8683 25.8163 28.6437 26.1397L27 24.359V21H23.8994L22.0532 19Z"
							fill="currentColor"
						/>
					</svg>
					Resetar
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
