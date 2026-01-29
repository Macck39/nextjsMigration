import AdminDashboard from "@/components/pages/AdminDashboard";
import PrivateRoute from "@/components/PrivateRoute";

export default function AdminDashboardPage() {
  return (
    <PrivateRoute>
      <AdminDashboard />
    </PrivateRoute>
  );
}

