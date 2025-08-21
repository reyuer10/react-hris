import React from "react";

function Header() {
  const headerData = [
    {
      id: 1,
      name: "Juan Dela Cruz",
      position: "Position",
      gmail: "juandelacruz@gmail.com",
      address: "Clark, Pampanga",
      sss: "12-3456789-0",
      phic: "12-1234567890-1",
      hdmf: "1234-1234-1234",
      tin: "1234-123-123-123",
      anual_leave: "10.00",
    },
  ];
  return (
    <div className="h-[15%] border border-gray-300 p-4 rounded-2xl bg-gray-50">
      {headerData.map((h, index) => {
        return (
          <div className="flex max-sm:flex-col sm:w-full space-y-4" key={h.id}>
            <div className="flex flex-col sm:w-[35%]">
              <span>Position: {h.position}</span>
              <span>Address: {h.address}</span>
              <span>Email: {h.gmail}</span>
            </div>
            <div className="flex flex-col sm:w-[35%]">
              <span>SSS: {h.sss}</span>
              <span>PHIC: {h.phic}</span>
              <span>HDMF: {h.hdmf}</span>
              <span>TIN: {h.tin}</span>
            </div>
            <div className="sm:w-[30%] ">
              <span>Anual Leave: {h.anual_leave}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Header;
