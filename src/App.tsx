import "./App.css";

import RandomList from "./components/random-list";
import { Item } from "./components/random-list/type";

function App() {
  const itemList: Item[] = [
    {
      name: "1",
      icon: "https://img0.baidu.com/it/u=1122013262,2429552709&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1687366800&t=3abab42468346d1c2b6c7e6b990b742a",
    },
    {
      name: "2",
      icon: "https://img0.baidu.com/it/u=779040798,3900256075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1687366800&t=f07e0e869d0be1063d51cd55536ee83a",
    },
    {
      name: "3",
      icon: "https://img0.baidu.com/it/u=345359896,661384602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    {
      name: "4",
      icon: "https://img2.baidu.com/it/u=2027087424,1608351807&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    {
      name: "5",
      icon: "https://img0.baidu.com/it/u=1122013262,2429552709&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1687366800&t=3abab42468346d1c2b6c7e6b990b742a",
    },
    {
      name: "6",
      icon: "https://img0.baidu.com/it/u=779040798,3900256075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1687366800&t=f07e0e869d0be1063d51cd55536ee83a",
    },
    {
      name: "7",
      icon: "https://img0.baidu.com/it/u=345359896,661384602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    {
      name: "8",
      icon: "https://img2.baidu.com/it/u=2027087424,1608351807&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    {
      name: "9",
      icon: "https://img0.baidu.com/it/u=1122013262,2429552709&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1687366800&t=3abab42468346d1c2b6c7e6b990b742a",
    },
    {
      name: "10",
      icon: "https://img0.baidu.com/it/u=779040798,3900256075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1687366800&t=f07e0e869d0be1063d51cd55536ee83a",
    },
    {
      name: "11",
      icon: "https://img0.baidu.com/it/u=345359896,661384602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    {
      name: "12",
      icon: "https://img2.baidu.com/it/u=2027087424,1608351807&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
  ];
  return (
    <div className="App">
      <RandomList itemList={itemList} />
    </div>
  );
}

export default App;
