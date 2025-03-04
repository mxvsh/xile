import { cn } from "@repo/ui/lib/utils";
import { ImageIcon } from "lucide-react";

function SidebarUpload() {
	return (
		<div
			className={cn(
				"h-32 cursor-pointer bg-background text-muted-foreground border-dashed flex gap-2 flex-col justify-center items-center border rounded-xl",
				"hover:bg-accent/50 transition-all duration-200",
			)}
		>
			<ImageIcon size={32} />
			<div className="text-center">
				<p className="font-medium text-sm">Drop files here</p>
				<p className="text-xs">or click here to upload</p>
			</div>
		</div>
	);
}

export default SidebarUpload;
