import { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useActivityStore } from "../store/ActivityStore"

export default function ActivityList() {

    const { activities } = useActivityStore()
  
    const categoryName = useMemo(() => 
        (category: Activity['category']) =>
        categories.map( cat => cat.id === category ? cat.name : '')
        , [activities])
    
    const isEmpty = useMemo(() => activities.length === 0, [activities])

    return (
        <>
        <h2 className='text-4xl font-bold text-slate-600 text-center mb-10'>Food & Activities</h2>
        {isEmpty ? (<p className="text-center">There's no activities yet...</p>)
        :(
        
        activities.map( activity => (
            <div key={activity.id} className="px-5 py-10 bg-slate-100 mt-5 flex justify-between shadow-md">
            <div className="space-y-2 relative">
            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold
                ${activity.category === 1 ? 'bg-green-700' : 'bg-red-800'}`}>
                {categoryName(+activity.category)}
            </p>
            <p className="text-2xl font-bold pt-5">
                {activity.name}
            </p>
            <p className={`font-black text-4xl ${activity.category === 1 ? 'text-green-700' : 'text-red-800'}`}>
                {activity.calories} {''}
                <span>Calories</span>
            </p>
            </div>

            <div className="flex gap-5 items-center">
                <button>
                <PencilSquareIcon
                    className="size-10 text-gray-800"
                    onClick={() => {}}
                />
                </button>

                <button>
                <XCircleIcon
                    className="size-10 text-red-500"
                    onClick={() => {}}
                />
                </button>
            </div>
            </div>
        )))}
        
        </>
    )
}
