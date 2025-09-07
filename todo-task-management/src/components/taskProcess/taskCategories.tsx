import Button from "../ui/Button";
const TaskCategories = () => {
  return (
    <section className="flex flex-col flex-wrap">
      <div className="flex flex-col gap-4 flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-2">
            <div className="border-b-2 border-red-400">
              <h2 className="font-semibold text-gray-900">Task</h2>
            </div>
            <h2 className="font-semibold text-gray-900">Categories</h2>
          </div>
          <div className="border-b-2 border-black">
            <h2 className="text-gray-900 text-sm">Go Back</h2>
          </div>
        </div>
        <Button
          title="Add Category"
          className="text-white bg-[#F24E1E] w-fit p-2 font-medium"
          size="sm"
        />
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center self-start gap-2 text-sm">
            <div className="border-b-2 border-red-400">
              <h2 className="text-gray-900">Task</h2>
            </div>
            <h2 className="text-gray-900">Status</h2>
          </div>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center self-start gap-2 text-sm">
            <div className="border-b-2 border-red-400">
              <h2 className="text-gray-900">Task</h2>
            </div>
            <h2 className="text-gray-900">Priority</h2>
          </div>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TaskCategories;
