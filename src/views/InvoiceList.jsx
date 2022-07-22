import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { invoiceListMock, creditNotesListMock } from "../data/invoices";
import InvoiceBox from "../components/Invoice";
import Modal from "../components/Modal";
import { useEffect } from 'react';

function InvoiceList() {
  // States
  const [invoiceSelected, setInvoiceSelected] = useState(null);
  const [creditNoteSelected, setCreditNoteSelected] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const [creditNotesList, setCreditNotesList] = useState(null)

  useEffect((invoiceSelected) => {
    filterCreditNotes()
  })

  // Callback Functions
  const handleButtonClick = () => {
    setShowModal(true)
  }

  const closeModalCallback = () => {
    setInvoiceSelected(null);
    setCreditNoteSelected(null);
  };

  const filterCreditNotes = () => {
    const filtered = creditNotesListMock.filter((creditNote) => creditNote.reference === invoiceSelected)
    const creditNotesList = filtered.map((creditNote) => {
      return <InvoiceBox 
      id={creditNote.id}
      description={creditNote.description}
      clpAmount={creditNote.amount.clp}
      usdAmount={creditNote.amount.usd}
      type={creditNote.type}
      reference={creditNote.reference}
      selectedState={creditNoteSelected}
      setSelectedState={setCreditNoteSelected}
      />
    });
    setCreditNotesList(creditNotesList);
  }

  const invoiceList = invoiceListMock.map((invoice) => {
    return <InvoiceBox 
    id={invoice.id}
    description={invoice.description}
    clpAmount={invoice.amount.clp}
    usdAmount={invoice.amount.usd}
    type={invoice.type}
    reference={invoice.reference}
    selectedState={invoiceSelected}
    setSelectedState={setInvoiceSelected}
    clickCallback={filterCreditNotes}
    />
  });

    return (
    <div className="px-20 py-6">
      <div className="invoiceList rounded-md bg-slate-100 px-4 py-4">
      <p className="font-sans text-xl py-6 font-bold">Selecciona una factura</p>
        {invoiceList}
      </div>
      {invoiceSelected? <div className="creditNoteList">
      <p className="font-sans text-xl py-6 font-bold">Selecciona una nota de crédito</p>
          {creditNotesList}
      </div> : null}

      {creditNoteSelected? <Button className="flex flex-row bg-violet-500 px-4 py-3 rounded-xl align-center hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                onClick={handleButtonClick}>Asignar</Button>
: null}
      {showModal? 
      <div>
        <Modal 
              className="px-20 py-20 bg-violet-100"
              open={showModal}
              setOpen={setShowModal}
              closeCallback={closeModalCallback}/> 
      </div>
      : null}
      </div>
      
      );
  }
export default InvoiceList;
