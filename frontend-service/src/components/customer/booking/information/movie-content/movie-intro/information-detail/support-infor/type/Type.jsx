import React from "react";

const Type = ({ genres = [] }) => {
  const typeList = genres.map((g) => g.name);

  return (
    <div className="flex flex-nowrap text-sm text-[#777777]">
      <span className="h-8 py-[6px]">Thể loại:</span>
      <div className="ml-4 flex flex-wrap gap-1 flex-1">
        {typeList.map((item, idx) => (
            <div key={idx} className="cursor-pointer text-sm text-black inline-flex h-8 border border-[rgba(0,0,0,0.1)] rounded-lg px-4 py-2 items-center">
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Type;
