import { Navbar } from './Navbar';

// mejorar
interface Props {
  route: string[]
}

export const Header = ({ route }: Props): JSX.Element => {
  return (
    <>
      <Navbar />

      <div className='bg-white p-6 pt-8'>
        <h1 className='text-3xl text-stone-400 font-thin mb-2'>
          Sistema de Certificados
        </h1>
        <div className='flex gap-2 text-sm font-medium text-stone-700 text-sm'>
          {route.map((item, index) => (
            <>
              <h2 key={index} className={`${index === route.length - 1 ? 'font-bold text-gray-600' : 'font-normal'}`}>
                {item}
              </h2>
              {index < route.length - 1 && <p>{'/'}</p>}
            </>
          ))}
        </div>
      </div>
    </>
  );
};
