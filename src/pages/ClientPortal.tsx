import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Sun,
  LayoutDashboard,
  Package,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  Bell,
  Search,
  Truck,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export default function ClientPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const shipments = [
    { id: 'SL-88392', origin: 'Gaborone, BW', destination: 'Johannesburg, ZA', status: 'In Transit', eta: 'Tomorrow, 14:00', type: 'Flat deck' },
    { id: 'SL-88393', origin: 'Francistown, BW', destination: 'Lusaka, ZM', status: 'Customs Clearance', eta: 'Oct 28, 2023', type: 'Tautliner' },
    { id: 'SL-88394', origin: 'Durban, ZA', destination: 'Gaborone, BW', status: 'Delivered', eta: 'Oct 24, 2023', type: 'Tipper' },
    { id: 'SL-88395', origin: 'Gaborone, BW', destination: 'Harare, ZW', status: 'Pending Pickup', eta: 'Oct 30, 2023', type: 'Flat deck' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Transit': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Customs Clearance': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'Delivered': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'Pending Pickup': return 'text-slate-600 bg-slate-50 border-slate-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Transit': return <Truck className="w-4 h-4" />;
      case 'Customs Clearance': return <AlertCircle className="w-4 h-4" />;
      case 'Delivered': return <CheckCircle2 className="w-4 h-4" />;
      case 'Pending Pickup': return <Clock className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col fixed h-full z-20">
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-orange-500" fill="currentColor" />
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white leading-none uppercase">Sunrise</span>
              <span className="font-bold text-sm tracking-tight text-slate-500 leading-none uppercase">Portal</span>
            </div>
          </Link>
        </div>

        <div className="flex-1 py-6 px-4 space-y-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('shipments')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'shipments' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <Package className="w-5 h-5" /> Active Shipments
          </button>
          <button 
            onClick={() => setActiveTab('documents')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'documents' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <FileText className="w-5 h-5" /> Documents
          </button>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'billing' ? 'bg-orange-500 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <CreditCard className="w-5 h-5" /> Billing & Invoices
          </button>
        </div>

        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <Link to="/login" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-orange-400 transition-colors mt-2">
            <LogOut className="w-5 h-5" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search shipments, invoices, or documents..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-orange-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">Acme Corporation</p>
                <p className="text-xs text-slate-500">Client ID: AC-9928</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold border border-orange-200">
                AC
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-1">Welcome back, Acme Corp</h1>
                <p className="text-slate-500 text-sm">Here is what's happening with your logistics today.</p>
              </div>
              <button className="bg-orange-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20 flex items-center gap-2">
                <Package className="w-4 h-4" /> Request New Quote
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">+2 this week</span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Active Shipments</p>
                <h3 className="text-3xl font-bold text-slate-900">4</h3>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Delivered This Month</p>
                <h3 className="text-3xl font-bold text-slate-900">12</h3>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">2 pending</span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">Customs Clearance</p>
                <h3 className="text-3xl font-bold text-slate-900">1</h3>
              </div>
            </div>

            {/* Recent Shipments Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-900">Recent Shipments</h2>
                <button className="text-sm font-medium text-orange-600 hover:text-orange-700">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/50 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      <th className="px-6 py-4">Tracking ID</th>
                      <th className="px-6 py-4">Route</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">ETA</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {shipments.map((shipment) => (
                      <tr key={shipment.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-semibold text-slate-900">{shipment.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-slate-900 font-medium">{shipment.origin}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400" />
                            <span className="text-slate-900 font-medium">{shipment.destination}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-600">{shipment.type}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(shipment.status)}`}>
                            {getStatusIcon(shipment.status)}
                            {shipment.status}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-600">{shipment.eta}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-sm font-medium text-orange-600 hover:text-orange-700">Track</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
