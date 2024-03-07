import { useAtom } from "jotai";
import { atomTrackingLine } from "../store/atomTrackingLine";

export const useTrackingLine = () => {
  const [valueAtomTrackingLine, setValueAtomTrackingLine] =
    useAtom(atomTrackingLine);

  const valueAtomTrackingLineParsed = JSON.parse(valueAtomTrackingLine);

  const setTrackingLineSelected = (data: any) => {
    const JSONData = JSON.stringify(data);
    setValueAtomTrackingLine(JSONData);
  };

  return {
    valueAtomTrackingLine,
    valueAtomTrackingLineParsed,
    setValueAtomTrackingLine,
    setTrackingLineSelected,
  };
};
