import {heroStats} from "./messages";
import {heroStats1} from "./messages";
export default function StatsBlock() {
  return (
    <section className="px-6 py-16 w-full flex flex-col  gap-2 bg-none">
        {/* upper */}
      <div className=" w-full  flex  justify-center items-center flex-wrap gap-2">
        {heroStats.map((s) => (
          <div key={s.id} className="p-6  min-w-[300px]  flex-1 bg-[#02172694] h-80 rounded-lg shadow-md border border-transparent hover:border-[#058bae] transition flex flex-col justify-between">

            <div>0{s.id}/</div>
                
            <div>
               <div className="text-[#05c0e0] font-bold museo text-2xl lg:text-3xl">{s.metric}</div>
            <div className="mt-2 text-white text-xl museo lg:text-2xl font-semibold">{s.title}</div>
            {s.subtitle && (
              <p className="mt-3 text-gray-300 text-sm mont">{s.subtitle}</p>
            )}
            </div>
            
          </div>
        ))}
      </div>
      {/* bottom */}
        <div className=" w-full  flex justify-center items-center flex-wrap gap-2">
        {heroStats1.map((s) => (
          <div key={s.id} className="p-6 min-w-[300px]  flex-1 bg-[#02172694] h-80 rounded-lg shadow-md border border-transparent hover:border-[#058bae] transition flex flex-col justify-between">

            <div>0{s.id}/</div>
                
            <div>
               <div className="text-[#05c0e0] font-bold museo text-2xl lg:text-3xl">{s.metric}</div>
            <div className="mt-2 text-white text-xl museo lg:text-2xl font-semibold">{s.title}</div>
            {s.subtitle && (
              <p className="mt-3 text-gray-300 text-sm mont">{s.subtitle}</p>
            )}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
