import Spinner from '../../components/spinner'

export default function Loading() {
  return (
    <main className='h-screen flex items-center justify-center m-auto'>
        <Spinner />
    </main>



    // <div className="flex items-center justify-center h-screen bg-gray-200">
    //   {Array.from({ length: 10 }, (_, index) => (
    //     <div
    //       key={index}
    //       className={`w-5 h-100 bg-gradient-to-br from-red-500 to-yellow-600 m-4 animation-wave animation-delay-${index + 1}`}
    //     ></div>
    //   ))}

    // </div>
  );
}
