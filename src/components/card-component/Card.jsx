import React from "react";
import Tooltip from "@mui/material/Tooltip";
function Card({ image, follower, title, songs }) {
  return (
    <div className="bg-black gap-0">
      <Tooltip disableFocusListener disableTouchListener title={songs} placement="top" arrow>
        <div className="w-[159px]  p-2">
          <img
            className="rounded-tl-lg rounded-tr-lg w-full h-[170px] object-cover"
            src={image}
            alt="not found"
          />
          <div className="bg-white p-2 rounded-br-lg rounded-bl-lg">
            <p className="bg-black w-max p-1 px-2 rounded-md text-white">
              {follower} Follows
            </p>
          </div>
        </div>
      </Tooltip>
      <h3 className="text-white w-max p-2 font-semibold text-xs">
        {title.substring(0, 20)}
        {`${title.length > 20 && "..."}`}
      </h3>
    </div>
  );
}

export default Card;
