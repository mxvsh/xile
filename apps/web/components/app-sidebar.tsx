"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@repo/ui/components/sidebar";
import {
	LayoutDashboardIcon,
	SettingsIcon,
	StarIcon,
	TrashIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarUpload from "./sidebar/upload";

const items = [
	{
		label: "Dashboard",
		icon: <LayoutDashboardIcon />,
		href: "/",
	},
	{
		label: "Favorites",
		icon: <StarIcon />,
		href: "/favorites",
	},
	{
		label: "Recycle Bin",
		icon: <TrashIcon />,
		href: "/recycle-bin",
	},
	{
		label: "Settings",
		icon: <SettingsIcon />,
		href: "/settings",
	},
];

function AppSidebar() {
	const pathname = usePathname();

	return (
		<Sidebar className="border-transparent">
			<SidebarHeader className="space-y-4 z-10">
				<Image
					draggable={false}
					src="/logo.svg"
					alt="logo"
					width={40}
					height={40}
					className="bg-primary rounded-2xl p-2"
				/>
				<SidebarUpload />
			</SidebarHeader>
			<SidebarContent className="z-10">
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => {
								const isActive = pathname === item.href;
								return (
									<SidebarMenuItem key={item.label}>
										<SidebarMenuButton asChild isActive={isActive}>
											<Link href={item.href}>
												{item.icon}
												<span>{item.label}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="z-10" />

			<div className="absolute inset-0 overflow-hidden z-0">
				<div className="pointer-events-none absolute -left-2/3 bottom-0 aspect-square w-[140%] translate-y-1/4 rounded-full opacity-15 blur-[75px] bg-[conic-gradient(from_32deg_at_center,#855AFC_0deg,#3A8BFD_72deg,#00FFF9_144deg,#5CFF80_198deg,#EAB308_261deg,#f00_360deg)]" />
			</div>
		</Sidebar>
	);
}

export default AppSidebar;
