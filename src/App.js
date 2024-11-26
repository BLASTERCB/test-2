import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const App = () => {
  return (
    <div className='flex flex-col font-mercury'>
      <div className='flex h-20 justify-center items-center text-blue border-b-[1px] border-blue2'>
        <h1 className='text-[19px] uppercase text-blue1'>THE WHITE HOUSE</h1>
      </div>
      <div className='fixed w-0 md:w-[44px] md:h-[60px] bg-blue2 rounded-r-md bottom-[100px] text-white justify-center items-center flex text-2xl border-[1px] border-white'><FaArrowUpLong /></div>
      <div className='fixed h-0 md:w-[44px] md:h-[160px] bg-blue3 rounded-l-md right-0 bottom-[270px] text-blue2 gap-7 justify-center items-center flex flex-col text-xl'><FaFacebookF /><RiTwitterXFill /><FaLink />
      </div>
      <div className='flex justify-end mx-5 md:mx-20 my-2'> <div className='justify-end bg-red-100 rounded-full p-2'><CiSearch /></div></div>
      <div className='mx-0 md:mx-5 lg:mx-[250px] '>
        <header className='text-center mb-[50px]'>
          <p className='text-[11px] mb-2 text-blue1'>AUGUST 19, 2022</p>
          <h1 className='text-xl md:text-[44px] text-blue1 text-center font-medium   md:leading-[55px]'>FACT SHEET: How the Inflation Reduction Act Helps Asian American, Native Hawaiian, and Pacific Islander Communities</h1>
          <div className=' flex items-center justify-center'>
            <div className="flex w-[70%] gap-2 md:gap-3 border-b-2 border-t-2 border-gray1 md:px-5 py-2 mt-5 items-center justify-center">
              <div className="w-[30px] h-[20px] md:w-[36px] md:h-[20px] flex items-center justify-center">
                <img src="whiteHouse.JPG" alt="White House" />
              </div>
              <div className="flex items-center"><IoMdArrowDropright aria-label="Arrow Right" /></div>
              <div className="flex items-center ">
                <p className="text-blue2 text-[10px] md:text-[12px] font-decimal ">BRIEFING ROOM</p>
              </div>
              <div className="flex items-center"><IoMdArrowDropright aria-label="Arrow Right" /></div>
              <div className="flex items-center">
                <p className="text-blue2 text-[10px] md:text-[12px] font-decimal">STATEMENTS AND RELEASES</p>
              </div>
            </div>
          </div>

        </header>

        <div className='mx-5 md:mx-10 lg:mx-[60px]'>
          <div class="introduction">
            <p className='text-blue1 text-base leading-8 font-normal'>By signing the Inflation Reduction Act, President Biden is delivering on his promise to build an economy that works for working families, including Asian American, Native Hawaiian, and Pacific Islander (AA and NHPI) families. The Inflation Reduction Act lowers prescription drug costs, health care costs, and energy costs. It’s the most aggressive action we have taken to confront the climate crisis. It’ll lower the deficit and ask the super wealthy and corporations to pay their fair share. And no one making under <span className='text-blue2'>$400,000 per year</span> will pay a penny more in taxes. </p>
            <p className='text-blue1 text-base leading-8 mt-6 font-normal '>President Biden and Congressional Democrats beat back the special interests to pass this historic legislation that lowers costs for Americans and their families, advances environmental justice while building a cleaner future, and grows the economy from the bottom up and the middle out.</p>
          </div>
          <div class="first-section">
            <h2 className='text-blue1 text-base leading-8 font-bold underline mt-6'>LOWER HEALTH CARE COSTS</h2>
            <p className='text-blue1 text-base leading-8 font-normal'>The Inflation Reduction Act (IRA) will lower health care costs, including prescription drug costs, and expand health insurance coverage for AA and NHPI families.</p>
            <p className='text-blue1 text-base leading-8 mt-6 font-normal'>Lower Prescription Drug Costs for Seniors: Americans pay <span className='text-blue2'>2-3 times more</span> for their prescription drugs than people in other wealthy countries. Nearly 1 in 4 Americans struggle to afford prescription drugs, and high prices contribute to racial and ethnic health inequities. The Inflation Reduction Act will help close the gap in access to medication by improving prescription drug coverage and lowering drug prices in Medicare. The law:</p>
            <ul className="list-disc pl-5">
              <li className='text-blue1 text-base leading-8 mt-3 font-normal'>Caps the amount that seniors will have to pay for prescription drugs they buy at the pharmacy at <span className='text-blue2'>$2,000 a year</span>, giving peace of mind to seniors who no longer have to worry about spending thousands and thousands more on prescription drugs.</li>
              <li className='text-blue1 text-base leading-8 mt-3 font-normal'>Caps the amount that seniors will have to pay for insulin at <span className='text-blue2'>$35 for a month’s</span> supply.</li>
              <li className='text-blue1 text-base leading-8 mt-3 font-normal'>Provides access to a number of additional free vaccines, including the shingles vaccine, forMedicare beneficiaries.</li>
            </ul>
          </div>
          <div class="second-section">
            <h2 className='text-blue1 text-base leading-8 font-bold underline mt-6'>MAKE THE TAX CODE FAIRER</h2>
            <p className='text-blue1 text-base leading-8 font-normal'>President Trump and Congressional Republicans’ <span className='text-blue2'>2017 tax law </span>only made an unfair tax system worse. The Inflation Reduction Act of 2022 is a critical step forward in making our tax code fairer. It will raise revenue by:</p>
            <ul className="list-disc pl-5">
              <li className='text-blue1 text-base leading-8 mt-3 font-normal'>Ensuring that high-income people and large corporations pay the taxes they already owe.</li>
              <li className='text-blue1 text-base leading-8 mt-3 font-normal'>Cracking down on large, profitable corporations that currently get away with paying no federalincome tax.</li>
              <li className='text-blue1 text-base leading-8 mt-3 font-normal'>Imposing a <span className='text-blue2'>1% surcharge</span> on corporate stock buybacks that will encourage businesses to invest</li>
            </ul>
            <p className='text-blue1 text-base leading-8 mt-6 font-normal'>The legislation’s tax reforms won’t just raise revenue to finance critically needed investments to lower costs and combat climate change, they are also an important component of building an economy that rewards work rather than wealth and doesn’t let the rich and powerful get away with playing by aseparate set of rules.</p>
            <p className='text-blue1 text-base leading-8 mt-6 font-normal'>Millions of working families will have better access to the benefits they are entitled to under the taxcode and be able to get their questions answered quickly and efficiently, thanks to the Act’stransformational investments in the Internal Revenue Service. And, no family making less than $400,000per year will see their taxes go up by a single cent.</p>
            <p className='text-blue1 text-base text-center leading-8  mt-6 font-normal'>###</p>
          </div>

        </div>

      </div>
      <div className=' mx-5 px-5 md:px-[100px] lg:px-[220px] py-10 text-center bg-blue2 hover:bg-blue1 rounded-lg my-5'>
        <h2 className='text-white leading-[40px] text-lg md:text-2xl lg:text-3xl'>FACT SHEET: The Inflation Reduction Act Supports Workers and Families</h2>
        <div className='flex text-center justify-center items-center gap-2 text-white text-xs lg:text-sm my-5'>
          <p>AUGUST 19,2022</p>
          <GoDotFill />
          <p>STATEMENTS AND RELEASES</p>
        </div>
        <button className='border-b-2 border-white text-white'>NEXT</button>
      </div>
    </div>
  );
};

export default App;
