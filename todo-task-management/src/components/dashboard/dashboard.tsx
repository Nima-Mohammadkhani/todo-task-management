import Icon from "../ui/Icon";
import Card from "../ui/card";

const Dashboard = () => {
  return (
    <section className="h-full w-full">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, Sundar 👋
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your tasks today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Icon name="CheckSquare" className="text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Task Status
                </h2>
                <p className="text-sm text-gray-500">Manage your daily tasks</p>
              </div>
            </div>

            <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="CheckSquare" className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Progress Overview
                </h3>
                <p className="text-sm text-gray-500">
                  Your task completion status
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-blue-600">
                    70%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Completed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    85%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Not Started
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-red-600">
                    30%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Icon name="CheckSquare" className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Quick Actions
                </h3>
                <p className="text-sm text-gray-500">Add new tasks quickly</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors">
                + Add New Task
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-colors">
                Import Tasks
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Icon name="CheckSquare" className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Recent Activity
                </h3>
                <p className="text-sm text-gray-500">Latest updates</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    Task "Review project proposal" marked as completed
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    New task "Prepare presentation" added
                  </p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
