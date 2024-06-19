import Clock from "@/assets/Images/Clock";
import React from "react";

interface CustomComponentProps {
  timerSectionClass?: string;
  drawInfoClass?: string;
  clockWrapperClass?: string;
  timeDisplayClass?: string;
  buttonClass?: string;
  poolStatusClass?: string;
  onClick?: () => void;
}

const LottaryTimer: React.FC<CustomComponentProps> = ({
  timerSectionClass = "",
  drawInfoClass = "",
  clockWrapperClass = "",
  timeDisplayClass = "",
  buttonClass = "",
  poolStatusClass = "",
  onClick = () => {},
}) => {
  return (
    <>
      <div
        className={`d-flex w-100 justify-content-between gap-2 align-items-center justify-content-center timer-section px-3 ${timerSectionClass}`}
      >
        <div
          className={`d-flex justify-content-between gap-2 align-items-center justify-content-center ${drawInfoClass}`}
        >
          <div className="fontsize12 fw-medium text-white">Next Draw</div>
          <div className={clockWrapperClass}>
            <Clock />
          </div>
          <div className={`fs-4 fw-bold text-white ${timeDisplayClass}`}>
            142:32:01
          </div>
        </div>
        <div>
          <button className={`app-button ${buttonClass}`} onClick={onClick}>
            Play
          </button>
        </div>
      </div>
      <div
        className={`d-flex w-100 justify-content-between gap-2 align-items-center justify-content-center px-3 ${poolStatusClass}`}
      >
        <div className="d-flex align-items-center justify-content-center w-100">
          ▼ Current Pool Status
        </div>
      </div>
    </>
  );
};

export default LottaryTimer;
