import { FileText, BookOpen, Briefcase, Users, DollarSign, Wrench, Banknote, Calendar, TrendingUp, AlertTriangle, Heart, LogIn, BookMarked } from 'lucide-react';

const categories = [
  { icon: FileText, title: "Railway Board Circulars", subtitle: "All Departments" },
  { icon: BookOpen, title: "RBE Orders & Office Orders", subtitle: "Official directives" },
  { icon: Users, title: "Establishment Rules", subtitle: "Service Rules" },
  { icon: Briefcase, title: "Personnel Department", subtitle: "HR Circulars" },
  { icon: DollarSign, title: "Commercial Circulars", subtitle: "Revenue & Operations" },
  { icon: Banknote, title: "Finance & Accounts", subtitle: "Financial Circulars" },
  { icon: Wrench, title: "Engineering Guidelines", subtitle: "Mechanical & Technical" },
  { icon: Calendar, title: "Leave & Pension Rules", subtitle: "Service Benefits" },
  { icon: TrendingUp, title: "Pay Commission Circulars", subtitle: "Salary & Allowances" },
  { icon: AlertTriangle, title: "Safety & Traffic", subtitle: "Operational Instructions" },
  { icon: Heart, title: "Medical & HR Policies", subtitle: "Employee Welfare" },
  { icon: LogIn, title: "Recruitment Rules", subtitle: "Appointment & Compassionate" },
];

export function DocumentCategories() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What You Can Find Here
          </h2>
          <p className="text-lg text-gray-600">Access all types of Railway documents in one place</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 transform hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-blue-600 group-hover:text-orange-500 transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{category.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 sm:p-8 border border-blue-200 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <BookMarked className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Plus Much More</span>
          </div>
          <p className="text-gray-700 font-semibold">
            60,000+ official PDFs indexed and searchable
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Manuals, Codes, Rulebooks, Master Circulars, and comprehensive railway documentation
          </p>
        </div>
      </div>
    </section>
  );
}
