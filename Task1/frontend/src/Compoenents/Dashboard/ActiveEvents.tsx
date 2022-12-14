import { useAppDispatch, useAppSelector } from "App/hooks";
import { getEventsAction, selectActiveEvents } from "App/reducers/eventSlice";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Table from "./Table";


const ActiveEvents = () =>{

    const dispatch = useAppDispatch();

    const activeEvents = useAppSelector(selectActiveEvents);

    const[isAddEvent, setIsAddEvent] = useState(true);

    useEffect(() => {
        dispatch(getEventsAction('active', {limit:10, offset:0}));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
        {isAddEvent && (
            <Modal 
                closeModal={() => setIsAddEvent(false)}
            />
        )}
        <div>
          <main className="our-custom-w main-padding">

            <div className=" sm:block overflow-hidden mx-auto hideScrollBar w-full max-w-screen-2xl px-24">
              <span className="rounded-md mt-5 mb-4 block text-right mr-5 lg:mr-2">
                <div
                  className="w-48 inline-block main-btn-color cursor-pointer text-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:bg-green-700 focus:shadow-outline-indigo active:bg-green-700 transition ease-in-out duration-150"
                  onClick={() => setIsAddEvent(true)}
                >
                  <i className="fa fa-plus pr-1" aria-hidden="true"></i> Add New Event
                </div>
              </span>
              <div className="flex flex-col lg:overflow-hidden overflow-x-auto hideScrollBar">
                <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">

                  <div className="hideScrollBar align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <Table events={activeEvents} />

                    {activeEvents.length === 0 && (
                      <div className="px-6 py-4 text-center no-order">
                        There is no event
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* {addCustomerModal && (
            <AddCustomer customer={customer} modelHandler={openAddCustomerModal} />
          )} */}
          {/* {limitCustomerModal && (
            <LimitCustomer
              customer={customer}
              modelHandler={openLimitCustomerModal}
            />
          )} */}
        </div>


      {/* {deleteCustomerAlert && (
        <DeleteAlert onClose={deleteAlertHandler} onDelete={() => deleteCustomer(customerId)} />
      )} */}
      <div>
        {/* <Pagination itemsCountPerPage={ limit } totalItemsCount={totalCustomers} callBack={ getCustomer }/> */}
      </div>
    </>
    )
}


export default ActiveEvents;