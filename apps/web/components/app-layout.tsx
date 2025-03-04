import { SidebarProvider } from "@repo/ui/components/sidebar";
import AppSidebar from "./app-sidebar";

type AppLayoutProps = {
	children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="h-screen flex-1 bg-sidebar pt-2">
				<div className="bg-background rounded-tl-xl h-full p-10 border">
					{children}
				</div>
			</main>
		</SidebarProvider>
	);
}

export default AppLayout;
