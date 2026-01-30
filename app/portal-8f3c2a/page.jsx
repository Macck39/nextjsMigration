import dynamic from "next/dynamic";
import PrivateRoute from "@/components/PrivateRoute";

// Dynamic import for AdminDashboard - Admin-only, heavy with xlsx library
const AdminDashboard = dynamic(
  () => import("@/components/pages/AdminDashboard"),
  { 
    loading: () => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Loading Dashboard...</div>
          <div className="spinner"></div>
        </div>
      </div>
    ),
    ssr: false 
  }
);

export default function AdminDashboardPage() {
  return (
    <PrivateRoute>
      <AdminDashboard />
    </PrivateRoute>
  );
}

