import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface Props{
    events: any[]
}

const Table = ({events}: Props) => {

    return (
        <table className="min-w-full">
            <thead>
                <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        NAME
                    </th>

                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        DESCRIPTION
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        EVENT DATE
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white">
            
            {events.map((event, idx) => (
                <tr key={idx}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex">
                        <span className="text-gray-800">{event.name} </span>
                    </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                        <span className="text-gray-600">{event.description} </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                        <span className="text-gray-600">{new Date(event.eventDate).toDateString()}</span>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default Table;