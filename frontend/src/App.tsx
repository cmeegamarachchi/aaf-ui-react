import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar";

import Site404Page from "./features/core/Site404Page";
import ContactsPage from "./features/contacts/ContactsPage";
import SettingsPage from "./features/settings/SettingsPage";
import ErrorPage from "./features/core/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts/all",
    element: <ContactsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <Site404Page />,
  },
]);

export default function App() {
  return (
    <SidebarProvider>
      <RouterProvider router={router}></RouterProvider>
    </SidebarProvider>
  );
}
