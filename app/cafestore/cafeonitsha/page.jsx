import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Calendar, ShoppingCart, Heart } from "lucide-react";

export default async function Page() {
  return (
    <SidebarProvider className={"bg-[#000] "}>
      <AppSidebar />
      <SidebarInset >
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 bg-[#060400] border-b border-[#2b2d2b] px-4 shadow-sm">
          <div className="flex items-center gap-2 w-full ">
            <SidebarTrigger className="-ml-1 text-white" />
            <Separator orientation="vertical" className="mr-2 h-4 bg-yellow-600" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="text-yellow-500 hover:underline">
                    Jela&apos;s Café
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-gray-400" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-6 bg-[#000] text-white min-h-screen p-6">

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Reservations */}
            <div className="bg-black rounded-xl shadow-md shadow-white p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="p-4 bg-green-100/10 text-green-400 rounded-full inline-block">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-white">120</p>
                <p className="text-sm text-gray-400">Reservations</p>
              </div>
            </div>

            {/* Orders */}
            <div className="bg-black rounded-xl shadow-md shadow-white p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="p-4 bg-blue-100/10 text-blue-400 rounded-full inline-block">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-white">250</p>
                <p className="text-sm text-gray-400">Orders</p>
              </div>
            </div>

            {/* Favourites */}
            <div className="bg-black rounded-xl shadow-md shadow-white p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="p-4 bg-red-100/10 text-red-400 rounded-full inline-block">
                <Heart className="w-6 h-6" />
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-white">75</p>
                <p className="text-sm text-gray-400">Favourites</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
