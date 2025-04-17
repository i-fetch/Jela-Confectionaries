import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Calendar, ShoppingCart, Heart } from "lucide-react" // Import icons

export default async function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Jela's Café
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Dashboard Title */}
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Welcome, User</p>
         

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Reservations Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center gap-4">
              <div className="p-4 bg-green-100 text-green-600 rounded-full">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">120</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Reservations</p>
              </div>
            </div>
            {/* Orders Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center gap-4">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">250</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Orders</p>
              </div>
            </div>

            {/* Favourites Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center gap-4">
              <div className="p-4 bg-red-100 text-red-600 rounded-full">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">75</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Favourites</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}