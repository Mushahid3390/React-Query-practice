import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../api/task";
import type { Task } from "../api/task";

const TaskList = () => {
    const {data, isLoading, error} = useQuery<Task[]>({
        queryKey: ["tasks"],
        queryFn: fetchTasks,
    });

     if (isLoading) return <p className="text-center mt-10">Loading...</p>;

     if (error instanceof Error)
       return <p className="text-red-500 text-center">{error.message}</p>;


      return (
        <div className="max-w-xl mx-auto mt-10 p-4">
          <h1 className="text-2xl font-bold mb-4">Tasks</h1>

          <ul className="space-y-2">
            {data?.map((task) => (
              <li
                key={task.id}
                className="p-3 border rounded-lg flex justify-between"
              >
                <span>{task.title}</span>
                <span
                  className={`text-sm ${
                    task.completed ? "text-green-500" : "text-yellow-500"
                  }`}
                >
                  {task.completed ? "Done" : "Pending"}
                </span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => window.location.reload()}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Reload Page
          </button>
        </div>
      );
};

export default TaskList;
