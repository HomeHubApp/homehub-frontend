import { Link } from "react-router";
import { Building2, Cpu, Activity } from "lucide-react";
import "../assets/CSS/dashboard.css";

export default function OverviewPage() {
  // Mock data - replace with real data from your backend
  const stats = [
    { label: "Total Houses", value: "3", icon: Building2, color: "#4F46E5" },
    { label: "Total Devices", value: "12", icon: Cpu, color: "#10B981" },
    { label: "Active Devices", value: "10", icon: Activity, color: "#F59E0B" },
  ];

  const recentActivity = [
    { house: "Main House", device: "Living Room Light", action: "Turned On", time: "2 mins ago" },
    { house: "Beach House", device: "Thermostat", action: "Temperature Set", time: "15 mins ago" },
    { house: "Main House", device: "Security Camera", action: "Motion Detected", time: "1 hour ago" },
  ];

  return (
    <div className="overview-page">
      <div className="overview-header">
        <h1>Dashboard Overview</h1>
        <p className="overview-subtitle">Welcome back! Here's what's happening with your devices.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: stat.color + "20" }}>
                <Icon size={24} style={{ color: stat.color }} />
              </div>
              <div className="stat-content">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="activity-section">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {recentActivity.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-details">
                <p className="activity-device">{activity.device}</p>
                <p className="activity-house">{activity.house}</p>
              </div>
              <div className="activity-meta">
                <span className="activity-action">{activity.action}</span>
                <span className="activity-time">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <Link to="/houses" className="action-button">
          <Building2 size={20} />
          Manage Houses
        </Link>
      </div>
    </div>
  );
}
