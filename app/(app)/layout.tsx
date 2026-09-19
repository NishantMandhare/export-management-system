import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
            <SidebarProvider>
                <AppSidebar />
                <main className="flex-1">
                    <div className="p-2 flex justify-between items-center">
                        <SidebarTrigger />
                        <ThemeToggle />
                    </div>
                    {children}
                </main>
            </SidebarProvider>
        </TooltipProvider>
    );
}