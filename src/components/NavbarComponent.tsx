
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
} from "flowbite-react";
import { Bell } from "lucide-react";
import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { getApiErrorMessage, useAuth } from "../context/AuthContext";

type NavbarComponentProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export default function NavbarComponent({
  isSidebarOpen,
  toggleSidebar,
}: NavbarComponentProps) {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const notificationsMessages = [
    "Living room lights were turned on.",
    "Front door was unlocked.",
    "Water usage alert detected in the kitchen.",
    "Motion detected at the garage.",
    "Your schedule was updated for today.",
  ];
  const notificationsCount = notificationsMessages.length;

  async function handleSignOut() {
    setIsSigningOut(true);

    try {
      await toast.promise(logout(), {
        loading: "Signing you out...",
        success: "Signed out successfully.",
        error: (error) => getApiErrorMessage(error),
      });

      navigate("/login", { replace: true });
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <Navbar fluid rounded>
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">
          {isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        </span>
        <HiMenu className="h-6 w-6" />
      </button>

      <div className="flex items-center gap-2 md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="relative inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <span className="sr-only">View notifications</span>
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-semibold text-white">
                {notificationsCount}
              </span>
            </div>
          }
        >
          <DropdownHeader>
            <span className="block text-sm font-medium">Notifications</span>
            <span className="block truncate text-sm text-gray-500">
              {notificationsCount} new alerts
            </span>
          </DropdownHeader>
          {notificationsMessages.slice(0, 5).map((message, index) => (
            <DropdownItem key={`${message}-${index}`}>{message}</DropdownItem>
          ))}
        </Dropdown>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">{user?.name ?? "HomeHub User"}</span>
            <span className="block truncate text-sm font-medium">{user?.email ?? "Signed in"}</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem onClick={handleSignOut} disabled={isSigningOut}>
            {isSigningOut ? "Signing out..." : "Sign out"}
          </DropdownItem>
        </Dropdown>
      </div>
      
    </Navbar>
  );
}
