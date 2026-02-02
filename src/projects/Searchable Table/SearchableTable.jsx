import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { customers } from "./customers";
import htmlTable from "./images/html_table.jpg";
import search from "./images/search.png";

const SearchableTable = () => {
  const [customersList, setCustomersList] = useState(customers);
  const [searchInput, setSearchInput] = useState("");

  const handleCustomerSearch = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput === "") {
      setCustomersList(customers);
    } else {
      let filteredCustomers = customersList.filter((c) =>
        c.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setCustomersList(filteredCustomers);
    }
  }, [searchInput]);

  return (
    <div
      className="flex items-center justify-center h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${htmlTable})` }}
    >
      {/* Table */}
      <main className="w-[82vw] h-[90vh] bg-white/50 backdrop-blur-[7px] shadow-[0_0.4rem_0.8rem_#0005] rounded-[0.8rem] overflow-hidden">
        {/* Table Header */}
        <section className="w-full h-[10%] bg-white/40 py-[0.8rem] px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Customer's Orders</h1>
          {/* Input Group */}
          <div className="w-[35%] h-full bg-white/50 px-[0.8rem] rounded-[2rem] flex justify-center items-center transition-all duration-500 hover:w-[45%] hover:bg-white/80 hover:shadow-[0_0.1rem_0.4rem_#0002]">
            <input
              type="search"
              placeholder="Search Customers..."
              className="w-full pr-2 pl-[0.3rem] bg-transparent border-none outline-none placeholder:text-gray-600"
              value={searchInput}
              onChange={handleCustomerSearch}
            />
            <img src={search} alt="search" className="w-5 h-5" />
          </div>
        </section>
        {/* Table Body */}
        <section className="w-[95%] max-h-[calc(89%-1.6rem)] bg-white/70 my-[0.8rem] mx-auto rounded-[0.6rem] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[0.5rem] scrollbar-thumb-black/40 scrollbar-track-gray-100">
          <table className="w-full p-4 text-left">
            <thead>
              <tr>
                <th className="sticky top-0 left-0 bg-[#d5d1defe] p-4">id</th>
                <th className="sticky top-0 left-0 bg-[#d5d1defe] p-4">
                  Customer
                </th>
                <th className="sticky top-0 left-0 bg-[#d5d1defe] p-4">
                  Location
                </th>
                <th className="sticky top-0 left-0 bg-[#d5d1defe] p-4">
                  Order Date
                </th>
                <th className="sticky top-0 left-0 bg-[#d5d1defe] p-4">
                  Status
                </th>
                <th className="sticky top-0 left-0 bg-[#d5d1defe] p-4">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {customersList.map((customer) => (
                  <motion.tr
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="transition-all duration-300 ease-in-out even:bg-black/20 hover:bg-white/60 hover:cursor-pointer"
                    key={customer.id}
                  >
                    <td className="p-4 text-left">{customer.id}</td>
                    <td className="p-4 text-left">{customer.name}</td>
                    <td className="min-w-[12.1rem] lg:min-w-full p-4 text-left">
                      {customer.location}
                    </td>
                    <td className="min-w-[12.1rem] lg:min-w-full p-4 text-left">
                      {customer.date}
                    </td>
                    <td className="min-w-[12.1rem] lg:min-w-full p-4 text-left">
                      <p
                        className={`py-2 rounded-[2rem] text-center ${
                          customer.status === "Delivered"
                            ? "bg-[#86e49d] text-[#006b21]"
                            : customer.status === "Cancelled"
                            ? "bg-[#d893a3] text-[#b30021]"
                            : customer.status === "Shipped"
                            ? "bg-[#6fcaea]"
                            : customer.status === "Pending"
                            ? "bg-[#ebc474]"
                            : ""
                        }`}
                      >
                        {customer.status}
                      </p>
                    </td>
                    <td className="min-w-[12.1rem] lg:min-w-full p-4 text-left">
                      <strong>{customer.amount}</strong>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default SearchableTable;
