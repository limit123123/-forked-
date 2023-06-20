export type Item = {
  name: string;
  icon: string;
};

export type Props = {
  itemList: Item[];
  /**
   * 多少秒
   */
  time?: number;
};
