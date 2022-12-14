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
                    {/* <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    DAILY LIMIT
                    </th> */}
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
                    <span className="text-gray-600">{new Date(event.eventDate).toLocaleString()}</span>
                    </td>

                    
                    <td className="px-6 py-3 whitespace-nowrap text-left border-b border-gray-200 text-sm">
                    <Menu as="div" className="inline-block text-left">
                        {({ open }) => (
                        <>
                            <div>
                            <Menu.Button className="bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                {/* <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" /> */}
                            </Menu.Button>
                            </div>
                            <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items
                                static
                                className="z-10 origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none fix"
                            >
                                <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (

                                    <div
                                        className={`
                                            ${active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700 '}
                                            block px-4 py-2 text-sm hover:text-red-700 cursor-pointer
                                        `}
                                        onClick={() => {}}
                                    >
                                        Delete
                                    </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <div
                                        onClick={() => {}}
                                        className={
                                            `${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm hover:text-purple-700 cursor-pointer`
                                        }
                                    >
                                        Edit
                                    </div>
                                    )}
                                </Menu.Item>
                                </div>
                            </Menu.Items>
                            </Transition>
                        </>
                        )}
                    </Menu>
                    </td>

                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default Table;