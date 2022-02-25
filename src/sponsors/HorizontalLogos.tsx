import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  imageAlt: string;
  reverse?: boolean;
};

const HorizontalLogos = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-5',
    'flex',
    'flex-wrap',
    'items-center',
    'container',
    'mx-auto'
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
      <div className="w-full sm:px-6 flex flex-wrap content-start center-align items-center justify-center">
        <div className="w-1/3 p-6">
          <img src={`${router.basePath}${props.image1}`} alt={props.imageAlt} />
        </div>
        <div className="w-1/3 p-6">
          <img src={`${router.basePath}${props.image2}`} alt={props.imageAlt} />
        </div>
      </div>
    </div>
  );
};

export { HorizontalLogos };
