import axios from 'axios';

export interface LotteryData {
  result: boolean;
  code: number;
  message: string;
  data: {
    lotteryName: string;
    lotteryPrice: number;
    roundNumber: number;
    previousWinningticket: number[];
    poolAmount: {
      poolId: string;
      lotteryId: string;
      coinId: string;
      coinSymbol: string;
      coinName: string;
      roundId: string;
      poolAmount: string;
      createdAt: string;
    }[];
    winningPot: number;
    currentPool: number;
    nextDraw: number;
    ticketCount: number;
    prevTicketCount: number;
    showPoolDetail: boolean;
  };
}

export async function fetchLotteryData(lotteryType: string): Promise<LotteryData> {
  const response = await axios.get(`https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=${lotteryType}`);
  return response.data;
}
