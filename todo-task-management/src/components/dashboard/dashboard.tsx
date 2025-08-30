import Icon from "../ui/Icon";
import Card from "../ui/card";

const Dashboard = () => {
  return (
    <section className="flex-1 w-full">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, Sundar 👋
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your tasks today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full bg-[red] 2xl:h-fit">
        <div className="lg:col-span-2">
          <div className="bg-white h-full 2xl:h-[460px] rounded-2xl border mb-10 border-gray-200 shadow-sm p-6">
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

            <div className="space-y-4 h-86 overflow-y-auto">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                <Icon name="CheckSquare" className="text-red-600" />
              </div>
              <h3 className="text-[#FF6767]">Task Status</h3>
            </div>
            <div className="flex flex-wrap justify-around items-center gap-2">
              <div className="flex flex-col items-center gap-4">
                <div
                  className="radial-progress text-[#05A301]"
                  style={{ "--value": 70 } as React.CSSProperties}
                  aria-valuenow={70}
                  role="progressbar"
                >
                  70%
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full size-2 bg-[#05A301]"></div>
                  <span className="text-sm">Completed</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div
                  className="radial-progress text-[#0225FF]"
                  style={{ "--value": 45 } as React.CSSProperties}
                  aria-valuenow={45}
                  role="progressbar"
                >
                  45%
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full size-2 bg-[#0225FF]"></div>
                  <span className="text-sm">In Progress</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div
                  className="radial-progress text-[#F21E1E]"
                  style={{ "--value": 15 } as React.CSSProperties}
                  aria-valuenow={15}
                  role="progressbar"
                >
                  15%
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full size-2 bg-[#F21E1E]"></div>
                  <span className="text-sm">Not Started</span>
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
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
