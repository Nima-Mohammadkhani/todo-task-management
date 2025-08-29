const Card = () => {
  return (
    <section className="border border-gray-300 rounded-xl w-84 p-3 shadow-sm">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-3 h-3 border-2 border-red-500 rounded-full mt-1 flex-shrink-0"></div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-2">
            Attend Nischal's Birthday Party
          </h3>
          <div className="flex items-start gap-3">
            <p className="text-xs text-gray-600 leading-relaxed flex-1">
              Buy gifts on the way and pick up cake from the bakery. (6 PM |
              Fresh Elements).....
            </p>
            <img
              src="../../../image/user.png"
              className="w-16 h-16 object-cover rounded border border-gray-200 flex-shrink-0"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 text-[10px]">
        <div className="flex items-center gap-1">
          <span className="text-gray-500">Priority:</span>
          <span className="text-blue-400 font-medium">Moderate</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500">Status:</span>
          <span className="text-red-400 font-medium">Not Started</span>
        </div>
        <span className="text-gray-400">Created on: 20/06/2023</span>
      </div>
    </section>
  );
};

export default Card;
