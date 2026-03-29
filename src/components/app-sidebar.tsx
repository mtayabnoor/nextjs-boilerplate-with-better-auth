import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import ProfileDropdown from "./shared/dropdown-profile"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        test
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
           
        </SidebarGroup>

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
      <ProfileDropdown />
    </Sidebar>
  )
}