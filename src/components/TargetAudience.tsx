import { Users, Building, BadgeCheck, GraduationCap, Briefcase, Shield, Clock, Heart } from 'lucide-react';

const audiences = [
  { icon: Users, title: "Railway Staff & Officers", description: "Field and administrative personnel" },
  { icon: Building, title: "HR & Personnel Department", description: "Human resources teams" },
  { icon: Briefcase, title: "Commercial & Operating Staff", description: "Operations and revenue teams" },
  { icon: BadgeCheck, title: "Accounts & Finance Teams", description: "Financial management personnel" },
  { icon: Heart, title: "Medical Department", description: "Railway medical professionals" },
  { icon: Shield, title: "RPF Personnel", description: "Railway Police Force officers" },
  { icon: Clock, title: "Retired Employees", description: "Post-retirement guidance and benefits" },
  { icon: GraduationCap, title: "Job Aspirants", description: "Recruitment rule and procedure seekers" },
];

export function TargetAudience() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who Benefits From This Platform?
          </h2>
          <p className="text-lg text-gray-600">Built for every role in Indian Railways</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {audience.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
