export const numberplus = () => {
  return { type: "NUMBER_PLUS" };
};

export const numberminus = () => {
  return { type: "NUMBER_MINUS" };
};

export const changenumber = (number) =>{
  return { type: "CHANGER_NUMBER",
           payload: number};
}
