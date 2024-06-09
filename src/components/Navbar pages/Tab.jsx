import React from 'react'

const Tab = ({tabData, field, setField}) => {
  return (
    <div className='flex bg-[#004E89] p-1 gap-x-1 my-6 rounded-full w-fit'
    
    style={{
        boxShadow: "inset 0px-1px 0px rgba(255,255,255,0.18)"
    }}>
        {
            tabData.map((tab) => (
                <button key={tab.id}
                    onClick={() => setField(tab.type)}
                    className={`${
                        field === tab.type
                        ? "bg-[#6486a1] text-white" : 
                        " bg-transparent text-white"
                    } py-2 px-5 rounded-full transition-all duration-200`}>
                        {
                            tab?.tabName
                        }

                </button>
            ))
        }
    </div>
  )
}

export default Tab
