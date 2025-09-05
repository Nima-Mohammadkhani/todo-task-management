import React, { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";

const VitalTasks = () => {
  const [selectedTask, setSelectedTask] = useState(0);

  const tasks = [
    {
      id: 1,
      title: "Walk the dog",
      description: "Take the dog to the park and bring treats as well...",
      priority: "Extreme",
      status: "Not Started",
      createdDate: "20/08/2023",
      image: "/api/placeholder/80/60",
      fullDescription:
        "Take Luffy and Jiro for a leisurely stroll around the neighbourhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!",
      activities: [
        "Listen to a podcast or audiobook",
        "Practice mindfulness or meditation",
        "Take photos of interesting sights along the way",
        "Practice obedience training with your dog",
        "Chat with neighbors or other dog walkers",
        "Listen to music or an upbeat playlist",
      ],
    },
    {
      id: 2,
      title: "Take grandma to hospital",
      description: "Go back home and take grandma to the hosp...",
      priority: "Moderate",
      status: "In Progress",
      createdDate: "20/08/2023",
      image: "/api/placeholder/80/60",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Extreme":
        return "text-red-500";
      case "Moderate":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Not Started":
        return "text-red-500";
      case "In Progress":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const TaskCard = ({ task, index, isSelected, onClick }) => (
    <div
      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
        isSelected
          ? "border-red-200 bg-red-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-4 h-4 rounded-full border-2 mt-1 ${
            task.status === "In Progress"
              ? "bg-blue-500 border-blue-500"
              : "border-red-500"
          }`}
        >
          {task.status === "In Progress" && (
            <div className="w-full h-full bg-blue-500 rounded-full"></div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-gray-900 mb-2">{task.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{task.description}</p>

          <div className="flex items-center gap-4 text-xs">
            <span className={`${getPriorityColor(task.priority)}`}>
              Priority: {task.priority}
            </span>
            <span className={`${getStatusColor(task.status)}`}>
              Status: {task.status}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Created on: {task.createdDate}
          </p>
        </div>

        <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 60'%3E%3Crect width='80' height='60' fill='%23d4a574'/%3E%3Ccircle cx='30' cy='30' r='8' fill='%238b4513'/%3E%3Cpath d='M22 25 Q30 20 38 25 Q35 35 30 35 Q25 35 22 25' fill='%23654321'/%3E%3C/svg%3E"
            alt={task.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

  const selectedTaskData = tasks[selectedTask];

  return (
    <section className="flex flex-wrap gap-6">
      <div className="w-80 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="border-b-2 border-red-400 pb-2 mb-3">
          <h2 className="text-lg font-semibold text-gray-900">Vital Tasks</h2>
        </div>

        <div className="space-y-4">
          {tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              index={index}
              isSelected={selectedTask === index}
              onClick={() => setSelectedTask(index)}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-20 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 64'%3E%3Crect width='80' height='64' fill='%23d4a574'/%3E%3Ccircle cx='30' cy='32' r='10' fill='%238b4513'/%3E%3Cpath d='M20 27 Q30 20 40 27 Q37 37 30 37 Q23 37 20 27' fill='%23654321'/%3E%3C/svg%3E"
              alt={selectedTaskData.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              {selectedTaskData.title}
            </h1>

            <div className="flex items-center gap-6 text-sm mb-2">
              <span
                className={`${getPriorityColor(selectedTaskData.priority)}`}
              >
                Priority: {selectedTaskData.priority}
              </span>
              <span className={`${getStatusColor(selectedTaskData.status)}`}>
                Status: {selectedTaskData.status}
              </span>
            </div>

            <p className="text-xs text-gray-400">
              Created on: {selectedTaskData.createdDate}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            {selectedTaskData.fullDescription || selectedTaskData.description}
          </p>
        </div>

        {selectedTaskData.activities && (
          <div>
            <ol className="space-y-2">
              {selectedTaskData.activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-400 font-medium min-w-[20px]">
                    {index + 1}.
                  </span>
                  <span className="text-gray-700">{activity}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="flex justify-end gap-3 mt-8">
          <button className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
            <Clock className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VitalTasks;
