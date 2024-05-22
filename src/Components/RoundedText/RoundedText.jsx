/* eslint-disable react/prop-types */

const RoundedText = ({ text, style }) => {
  return (
    <span
      className={`border rounded-[35px] w-28 h-6 py-1 px-2 ${style}`}
    >
      {text}
    </span>
  );
};

export default RoundedText;
