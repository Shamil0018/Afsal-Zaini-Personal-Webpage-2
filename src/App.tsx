import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Products from "./pages/Products";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminDashboard from "@/pages/admin/index";
import AdminLogin from "@/pages/admin/login";
// import AdminAbout from "@/pages/admin/about";
// import AdminEvents from "@/pages/admin/events";
// import AdminCourses from "@/pages/admin/courses";
// import AdminContacts from "@/pages/admin/contacts";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/products" element={<Products />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            {/* <Route path="/admin/about" element={<AdminAbout />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/courses" element={<AdminCourses />} />
            <Route path="/admin/contacts" element={<AdminContacts />} /> */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
