import { useQuery } from "react-query";
import { fetchLotteryData, LotteryData } from "../utils/api";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import LogoCosmic from "../assets/Images/LogoCosmic";
import MagnifierPlus from "../assets/Images/MagnifierPlus";
import Clock from "../assets/Images/Clock";
import Clasic from "@/assets/Images/Clasic";
import AtomicLogo from "@/assets/Images/AtomicLogo";
import LottaryTimer from "@/CommonComponents/LottaryTimer";
import AtomicScore from "@/assets/Images/AtomicScore";

export default function Home() {
  // const { data: cosmicData, error: cosmicError, isLoading: cosmicLoading } = useQuery<LotteryData>('cosmic', () => fetchLotteryData('COSMIC'));
  // const { data: classicData, error: classicError, isLoading: classicLoading } = useQuery<LotteryData>('classic', () => fetchLotteryData('CLASSIC'));
  // const { data: atomicData, error: atomicError, isLoading: atomicLoading } = useQuery<LotteryData>('atomic', () => fetchLotteryData('ATOMIC'));

  const [nextDrawTime, setNextDrawTime] = useState<string>("");

  // useEffect(() => {
  //   if (cosmicData) {
  //     const updateTime = () => {
  //       const remainingTime = new Date(Date.now() + cosmicData.data.nextDraw * 1000);
  //       setNextDrawTime(remainingTime.toLocaleTimeString());
  //     };

  //     const interval = setInterval(updateTime, 2000);
  //     return () => clearInterval(interval);
  //   }
  // }, [cosmicData]);

  // if (cosmicLoading || classicLoading || atomicLoading) return <div>Loading...</div>;
  // if (cosmicError || classicError || atomicError) return <div>Error loading data</div>;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Card className="d-flex flex-column justify-content-center align-items-center gap-2 border-none">
      <h1>Latest Results</h1>
      <section className="card cosmic-section">
        <div className="card-body px-0 pb-0">
          <div className="d-flex w-100 justify-content-between px-3">
            <div className="d-flex justify-content-between gap-2 align-items-center justify-content-center">
              <LogoCosmic />
              <div>No. 233321</div>
            </div>
            <div>
              <MagnifierPlus />
            </div>
          </div>
          <div className="d-flex w-100 px-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="cosmic-scores cosmic-scores-bg">
                {item}
              </div>
            ))}
          </div>
          <div className="d-flex w-100 justify-content-between gap-2 align-items-center justify-content-center px-3 mb-3">
            <div className="fontsize12 fw-medium">Winning Pot</div>
            <div className="fs-4 fw-bold">980,934,368,172</div>
            <div>LUCKI</div>
          </div>
          <LottaryTimer
            timerSectionClass="timer-section"
            drawInfoClass="custom-draw-info"
            clockWrapperClass="custom-clock-wrapper"
            timeDisplayClass="custom-time-display"
            buttonClass="custom-button"
            poolStatusClass="custom-pool-status"
            onClick={handleClick}
          />
        </div>
      </section>

      <section className="card classic-section">
        <div className="card-body px-0 pb-0">
          <div className="d-flex w-100 justify-content-between px-3 pb-3">
            <div className="d-flex justify-content-between gap-2 align-items-center justify-content-center">
              <Clasic />
              <div>Past 5 Results</div>
            </div>
            <div>
              <MagnifierPlus />
            </div>
          </div>
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div>2302123</div>
            <div>2302123</div>
            <div>2302123</div>
          </div>
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div>2302123</div>
            <div>2302123</div>
            <div>2302123</div>
          </div>
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div>2302123</div>
            <div>2302123</div>
            <div>2302123</div>
          </div>
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div>2302123</div>
            <div>2302123</div>
            <div>2302123</div>
          </div>
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div>2302123</div>
            <div>2302123</div>
            <div>2302123</div>
          </div>
          <LottaryTimer
            timerSectionClass="bg-classic-timer mt-3"
            drawInfoClass="custom-draw-info"
            clockWrapperClass="custom-clock-wrapper"
            timeDisplayClass="custom-time-display"
            buttonClass="custom-button"
            poolStatusClass="custom-pool-status"
            onClick={handleClick}
          />
        </div>
      </section>

      <section className="card attomic-section mb-2">
        <div className="card-body px-0 pb-0">
        <div className="d-flex w-100 justify-content-between px-3">
          <div className="d-flex justify-content-between gap-2 align-items-center justify-content-center">
            <AtomicLogo />
            <div>Past 5 Results</div>
          </div>
          <div>
            <MagnifierPlus />
          </div>
        </div>
        <div className="d-flex w-100 px-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="cosmic-scores atomic-scores-bg">
                {item}
              </div>
            ))}
          </div>
          <div className="d-flex w-100 justify-content-between gap-2 align-items-center justify-content-center px-3 mb-3">
            <div className="fontsize12 fw-medium">Winning Pot</div>
            <div className="fs-4 fw-bold">980,934,368,172</div>
            <div>LUCKI</div>
          </div>

          <LottaryTimer
            timerSectionClass="bg-atomic-timer mt-3"
            drawInfoClass="custom-draw-info"
            clockWrapperClass="custom-clock-wrapper"
            timeDisplayClass="custom-time-display"
            buttonClass="custom-button"
            poolStatusClass="custom-pool-status d-none"
            onClick={handleClick}
          />
          <div className="d-flex w-100 px-3">
          Current Pool Status
          </div>
          <div className="d-flex flex-column gap-1 flex-wrap">
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div><AtomicScore/></div>
            <div>4,651.8062 INAE</div>
          </div>
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div><AtomicScore/></div>
            <div>4,651.8062 INAE</div>
          </div>
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div><AtomicScore/></div>
            <div>4,651.8062 INAE</div>
          </div>
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div><AtomicScore/></div>
            <div>4,651.8062 INAE</div>
          </div>
          <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div><AtomicScore/></div>
            <div>4,651.8062 INAE</div>
          </div>  <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div><AtomicScore/></div>
            <div>4,651.8062 INAE</div>
          </div>  <div className="d-flex w-100 px-3 justify-content-between align-items-center">
            <div><AtomicScore/></div>
            <div>4,651.8062 INAE</div>
          </div>
          </div>
          <hr className="w-100 px-3" />
          <div className="d-flex w-100 justify-content-end gap-2 align-items-center justify-content-center px-3 mb-3">
            <div className="fontsize12 fw-medium">≈</div>
            <div className="fs-4 fw-bold">980,934,368,172</div>
            <div>LUCKI</div>
          </div>
        
        </div>
      </section>
    </Card>
  );
}

function handlePlayClick() {
  if (!isLoggedIn()) {
    window.location.href = "/login";
  } else {
    // Proceed to the play functionality
  }
}

function isLoggedIn(): boolean {
  return !!localStorage.getItem("authToken"); // Example check
}
