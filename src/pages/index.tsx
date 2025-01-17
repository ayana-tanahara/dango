import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-1 rounded-2xl">
      <div className="mx-auto">
        <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
          <span className="text-gray-700 select-none">{count}</span>
        </div>
        <div className="grid grid-cols-4 gap-2">

        <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">AC</span>
          </Button>

          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">±</span>
          </Button>

          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">%</span>
          </Button>

          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">÷</span>
          </Button>

        <Button
            className="py-2 bg-cyan-000 text-Black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 7);
            }}>
            <span className="select-none text-xl">7</span>
          </Button>

          <Button
            className="py-2 bg-cyan-000 text-Black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 8);
            }}>
            <span className="select-none text-xl">8</span>
          </Button>

          <Button
            className="py-2 bg-cyan-000 text-Black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 9);
            }}>
            <span className="select-none text-xl">9</span>
          </Button>


          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">×</span>
          </Button>


          <Button
            className="py-2 bg-cyan-000 text-Black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 4);
            }}>
            <span className="select-none text-xl">4</span>
          </Button>

          <Button
            className="py-2 bg-cyan-000 text-Black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 5);
            }}>
            <span className="select-none text-xl">5</span>
          </Button>

          <Button
            className="py-2 bg-cyan-)000 text-black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 6);
            }}>
            <span className="select-none text-xl">6</span>
          </Button>


          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(count / n);
            }}>
            <span className="select-none text-xl">-</span>
          </Button>


          <Button
            className="py-2 bg-cyan-)000 text-black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 1);
            }}>
            <span className="select-none text-xl">1</span>
          </Button>         


          <Button
            className="py-2 bg-cyan-)000 text-black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 2);
            }}>
            <span className="select-none text-xl">2</span>
          </Button>    


          <Button
            className="py-2 bg-cyan-)000 text-black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 3);
            }}>
            <span className="select-none text-xl">3</span>
          </Button>    

          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 1);
            }}>
            <span className="select-none text-xl">-</span>
          </Button>


          <Button
            className="py-2 bg-cyan-)000 text-black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count + 0);
            }}>
            <span className="select-none text-xl">0</span>
          </Button>    

          <Button
            className="py-2 bg-cyan-)000 text-black rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(0);
            }}>
            <span className="select-none text-xl">.</span>
          </Button>  

          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">C</span>
          </Button>

          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);

              setCount(count - 1);
            }}>
            <span className="select-none text-xl">=</span>
          </Button>


        </div>
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = () => {
// };

// eslint-disable-next-line import/no-default-export
export default IndexPage;
