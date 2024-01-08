import "./css/App.css";
import Button from "./component/button";
import { useState } from "react";

function App() {
  const [isClickedButton1, setIsClickedButton1] = useState<boolean>(true);
  const [isClickedButton2, setIsClickedButton2] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("From Your Writing");
  const handleButtonClick = (buttonNumber: number) => {
    if (buttonNumber === 1) {
      setIsClickedButton1(true);
      setIsClickedButton2(false);
      setTitle("From Your Writing");
    } else if (buttonNumber === 2) {
      setIsClickedButton2(true);
      setIsClickedButton1(false);
      setTitle("From Your Essay");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="mx-auto sm:mr-1">
          <Button
            label="Writing Topic"
            backgroundColor={isClickedButton1 ? "#57C49F" : ""} // Change color on click
            textColor={isClickedButton1 ? "" : "#D0D0D0"}
            border={isClickedButton1 ? "" : "1px solid #D0D0D0"}
            size="336px"
            onClick={() => {
              console.log("click me 1");
              handleButtonClick(1);
            }}
          />
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-1 mx-auto">
          <Button
            label="From Your Essay"
            backgroundColor={isClickedButton2 ? "#57C49F" : ""} // Change color on click
            textColor={isClickedButton2 ? "" : "#D0D0D0"}
            border={isClickedButton2 ? "" : "1px solid #D0D0D0"}
            size="336px"
            onClick={() => {
              console.log("click me 2");
              handleButtonClick(2);
            }}
          />
        </div>
      </div>
      <div className="mt-2 mb-5">
        <h1 className="text-4xl sm:mr-[430px]">{title}</h1>
      </div>
      <main>
        <div className="mx-auto p-2 border border-gray-300 rounded w-[340px] sm:w-[700px]">
          <textarea
            rows={4}
            className="h-52 p-2 outline-none border-none resize-none w-full"
            placeholder="Type or paste your topic here"
          ></textarea>
        </div>
      </main>
      <div className="mt-5">
        <Button
          label="Writing Topic"
          backgroundColor="#57C49F"
          textColor=""
          border=""
          size="w-80"
          customClasses="w-80 sm:w-[700px]"
        />
      </div>
      <div className="mx-auto p-2 mt-5 border border-gray-300 rounded h-auto w-[345px] sm:w-[700px]">
        <div className="flex w-full h-[80px] ">
          <svg
            viewBox="0 0 160 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.0106 27.0836C69.0106 26.6846 69.169 26.302 69.4511 26.0199C69.7332 25.7378 70.1159 25.5793 70.5148 25.5793H100.6C100.999 25.5793 101.381 25.7378 101.663 26.0199C101.946 26.302 102.104 26.6846 102.104 27.0836C102.104 28.7021 102.068 30.2425 102.002 31.7046C103.191 31.9015 104.328 32.3344 105.347 32.9778C106.365 33.6212 107.245 34.4621 107.934 35.4508C108.622 36.4396 109.106 37.5563 109.356 38.735C109.606 39.9137 109.618 41.1305 109.39 42.3138C109.163 43.497 108.7 44.6227 108.031 45.6245C107.361 46.6262 106.498 47.4838 105.492 48.1465C104.485 48.8093 103.356 49.2638 102.172 49.4833C100.987 49.7029 99.7701 49.6829 98.5931 49.4247C96.2164 55.0356 92.9432 57.7793 90.0701 58.4833V65.0208L94.3572 66.0918C94.9408 66.2362 95.4914 66.4979 95.9727 66.859L101.502 71.0077C101.755 71.1971 101.941 71.4612 102.036 71.7626C102.13 72.0639 102.127 72.3872 102.027 72.6868C101.927 72.9863 101.735 73.2468 101.479 73.4314C101.223 73.616 100.916 73.7153 100.6 73.7153H70.5148C70.1991 73.7153 69.8914 73.616 69.6353 73.4314C69.3791 73.2468 69.1876 72.9863 69.0877 72.6868C68.9879 72.3872 68.9848 72.0639 69.079 71.7626C69.1731 71.4612 69.3597 71.1971 69.6123 71.0077L75.1419 66.859C75.6232 66.4979 76.1738 66.2362 76.7574 66.0918L81.0446 65.0208V58.4833C78.1714 57.7793 74.8982 55.0356 72.5215 49.4217C71.3439 49.6813 70.1263 49.7023 68.9404 49.4835C67.7546 49.2647 66.6246 48.8104 65.6173 48.1476C64.61 47.4848 63.7456 46.6269 63.0754 45.6244C62.4052 44.622 61.9426 43.4955 61.715 42.3113C61.4874 41.1271 61.4994 39.9093 61.7503 38.7299C62.0012 37.5504 62.4859 36.4332 63.1758 35.4442C63.8657 34.4552 64.7468 33.6145 65.767 32.9717C66.7872 32.3289 67.9259 31.897 69.1158 31.7016C69.045 30.1633 69.0099 28.6235 69.0106 27.0836ZM69.3084 34.7252C67.7385 35.0124 66.347 35.9115 65.4401 37.2247C64.5331 38.5379 64.185 40.1576 64.4722 41.7275C64.7595 43.2973 65.6586 44.6888 66.9718 45.5958C68.285 46.5027 69.9046 46.8509 71.4745 46.5636C70.4727 43.4047 69.7055 39.5057 69.3084 34.7252ZM99.6431 46.5636C101.213 46.8509 102.833 46.5027 104.146 45.5958C105.459 44.6888 106.358 43.2973 106.645 41.7275C106.933 40.1576 106.584 38.5379 105.678 37.2247C104.771 35.9115 103.379 35.0124 101.809 34.7252C101.409 39.5087 100.642 43.4047 99.6431 46.5636ZM72.0311 28.5878C72.0521 30.1432 72.1093 31.6144 72.1996 33.0073C72.5907 39.1086 73.5744 43.6755 74.817 47.048C77.4163 54.0999 80.9964 55.6643 82.5488 55.6643C82.9478 55.6643 83.3304 55.8228 83.6125 56.1049C83.8946 56.387 84.0531 56.7696 84.0531 57.1686V65.0208C84.053 65.6914 83.8289 66.3429 83.4163 66.8716C83.0037 67.4003 82.4262 67.776 81.7756 67.939L77.4855 69.01C77.2907 69.0585 77.1076 69.1454 76.947 69.2658L75.0276 70.7068H96.0871L94.1676 69.2658C94.006 69.1451 93.8219 69.0582 93.6261 69.01L89.339 67.939C88.6884 67.776 88.1109 67.4003 87.6983 66.8716C87.2857 66.3429 87.0616 65.6914 87.0616 65.0208V57.1686C87.0616 56.7696 87.22 56.387 87.5021 56.1049C87.7842 55.8228 88.1668 55.6643 88.5658 55.6643C90.1182 55.6643 93.6983 54.0999 96.2976 47.048C97.5402 43.6785 98.5239 39.1055 98.915 33.0073C99.0053 31.6144 99.0625 30.1432 99.0835 28.5878H72.0311Z"
              fill="black"
            />
          </svg>
          <h1 className="text-[15px] sm:text-[20px] font-bold self-center">
            Excess to 20 or more tools to convert PDF to Word....
          </h1>
        </div>
        <div className="m-auto text-[20px] w-5/6 h-full p-1">
          Before you know what kindness really is you must lose things,feel the
          future dissolve in a momentlike salt in a weakened broth. What you
          held in your hand,what you counted and carefully saved...
        </div>
      </div>
    </div>
  );
}

export default App;
