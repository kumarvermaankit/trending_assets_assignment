import { FC, useEffect } from "react";

interface Details {
  serial: number;
}

const Arc: FC<Details> = ({serial}) => {
  useEffect(() => {
    const canvas = document.getElementById(
      `myCanvas${serial}`
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx!.beginPath();
    ctx!.arc(150, 50, 61, Math.PI / 12, (11 * Math.PI) / 12);
    ctx!.strokeStyle = "#14172B";
    ctx!.fillStyle = "#14172B";
    ctx!.fill();
    ctx!.strokeStyle = "#14172B";
    ctx!.stroke();

    ctx!.beginPath();
    ctx!.arc(232.5, 70, 25, Math.PI, (3 * Math.PI) / 2);
    // ctx!.stroke();
    // ctx!.beginPath();
    ctx!.arc(67.5, 70, 25, (3 * Math.PI) / 2, 0);
    ctx!.fillStyle = "#14172B";
    ctx!.fill();
    ctx!.strokeStyle = "#14172B";
    ctx!.stroke();
  }, []);

//   left-[3.8rem]

  return (
    <canvas className="relative top-6 "   id={`myCanvas${serial}`}></canvas>
  );
};

export default Arc;
