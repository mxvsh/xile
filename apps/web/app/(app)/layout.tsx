import AppLayout from "@/components/app-layout";

function Layout({ children }: { children: React.ReactNode }) {
	return <AppLayout>{children}</AppLayout>;
}

export default Layout;
