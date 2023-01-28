import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Power Hack-${title}`;
  }, [title]);
};
export default useTitle;
