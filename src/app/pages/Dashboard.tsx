import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Calendar, Clock, User, FileText, MessageSquare, Settings, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const name = localStorage.getItem('userName') || 'User';
    const email = localStorage.getItem('userEmail') || '';
    setUserName(name);
    setUserEmail(email);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Primary Care',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'Video Call'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      date: '2024-01-20',
      time: '2:30 PM',
      type: 'Video Call'
    }
  ];

  const quickActions = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Book Appointment',
      description: 'Schedule a new consultation',
      action: () => alert('Booking feature coming soon!')
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Medical Records',
      description: 'View your health records',
      action: () => alert('Medical records feature coming soon!')
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Messages',
      description: 'Chat with your doctor',
      action: () => alert('Messaging feature coming soon!')
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Settings',
      description: 'Manage your account',
      action: () => alert('Settings feature coming soon!')
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navigation />
      <main className="py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome back, {userName.split(' ')[0]}!
                </h1>
                <p className="text-gray-600">{userEmail}</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Appointments */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center">
                            <User className="w-6 h-6 text-[#0D9488]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                            <p className="text-sm text-gray-600">{appointment.specialty}</p>
                            <p className="text-sm text-gray-500">{appointment.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{appointment.date}</p>
                          <p className="text-sm text-gray-600">{appointment.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No upcoming appointments</h3>
                    <p className="text-gray-600 mb-4">Schedule your first appointment today</p>
                    <button className="px-6 py-3 rounded-full bg-[#0D9488] text-white hover:bg-[#0c8478] transition-colors">
                      Book Appointment
                    </button>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left group"
                    >
                      <div className="w-12 h-12 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#0D9488]/20 transition-colors">
                        <div className="text-[#0D9488]">{action.icon}</div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Health Summary */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Health Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Last Checkup</span>
                    <span className="font-semibold text-gray-900">Dec 15, 2023</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Next Appointment</span>
                    <span className="font-semibold text-gray-900">Jan 15, 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Active Prescriptions</span>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Health Score</span>
                    <span className="font-semibold text-green-600">Excellent</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Message from Dr. Johnson</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Lab results available</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Appointment confirmed</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}