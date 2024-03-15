import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
export default create(
  subscribeWithSelector((set) => {
    return {
      blocksCount: 10,
      blockSeed: 0,
    };
  })
);
