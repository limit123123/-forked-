import { useState, useRef, useMemo } from "react";
import { Props, Item } from "./type";
import "./style.css";

const DEFAULT_TIME = 7;
const DEFAULT_RANDOM_COUNT = 3;

const getRandomIndex = (len: number) => {
  const randomIndex: number[] = [];
  while (randomIndex.length < DEFAULT_RANDOM_COUNT) {
    const index = Math.floor(Math.random() * len);
    if (!randomIndex.includes(index)) {
      randomIndex.push(index);
    }
  }
  return randomIndex;
};

const component = ({ itemList, time }: Props) => {
  const [isStart, setIsStart] = useState(false);
  const [randomList, setRandomList] = useState<Item[]>([]);
  const timer = useRef<number | null>(null);
  const endTime = useRef(DEFAULT_TIME);
  const length = useMemo(() => itemList.length, [itemList]);

  const random = () => {
    const randomIndexList = getRandomIndex(length);
    console.log("randomIndexList", randomIndexList);
    setRandomList(randomIndexList.map((index) => itemList[index]));
  };

  const handleStartRandom = () => {
    endTime.current = (time || DEFAULT_TIME) * 10;
    if (length < DEFAULT_RANDOM_COUNT) return;
    if (timer.current) clearInterval(timer.current);
    random();
    timer.current = setInterval(() => {
      if (endTime.current > 0) {
        console.log("hello", endTime.current);
        random();
        endTime.current--;
      } else {
        setIsStart(false);
        timer.current && clearInterval(timer.current);
      }
    }, 300);
  };
  const handleStart = () => {
    if (!isStart) {
      setIsStart(true);
      handleStartRandom();
    }
  };
  return (
    <div className="wrapper">
      <div className="item-wrapper">
        {randomList.map((item) => (
          <div className="item">
            <img className="icon" src={item.icon} />
            <span className="name">{item.name}</span>
          </div>
        ))}
      </div>
      <button onClick={handleStart} disabled={isStart}>
        start
      </button>
    </div>
  );
};

export default component;
