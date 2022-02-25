type ILogoProps = {
  xl?: boolean;
  img: string;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`text-gray-900 inline-flex items-center ${fontStyle} w-40 sm:w-64`}
    >
      <img src={props.img} alt="Gatitolabs Logo"></img>
    </span>
  );
};

export { Logo };
