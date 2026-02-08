import PrivateRoute from "@/components/PrivateRoute";
import AdminDashboard from "@/components/pages/AdminDashboard";

export default function AdminDashboardPage() {
  return (
    <PrivateRoute>
      <AdminDashboard />
    </PrivateRoute>
  );
}

