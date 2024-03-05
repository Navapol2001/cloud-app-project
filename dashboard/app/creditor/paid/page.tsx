"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/components/Loading";
import ErrorCard from "@/app/components/Error";

// Define the structure of your data based on the API response
type PaidView = {
  cust_id: string;
  upd_date: string;
  checkID: string;
  pay_status: string;
  running_number: string;
  paid_amount: number;
};

export default function PaidPage() {
  const [paidViews, setPaidViews] = useState<PaidView[]>([]);
  const [custId, setCustId] = useState('');
  const [year, setYear] = useState('');
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let url = `http://localhost:8080/api/creditPaid`;
        if (custId || year) {
          url += custId && year ? `/filter/${custId}/${year}` : custId ? `/custId/${custId}` : `/year/${year}`;
        }
        url += `?page=${page}&size=${size}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPaidViews(data.content);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [custId, year, page, size]);

  const handlePreviousPage = () => setPage(prev => prev > 0 ? prev - 1 : 0);
  const handleNextPage = () => setPage(prev => prev + 1);

  if (isLoading) return <Loading />;
  if (error) return <ErrorCard errorMessage={error} />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Paid Information</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          className="input input-bordered"
          placeholder="Customer ID"
          value={custId}
          onChange={(e) => setCustId(e.target.value)}
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Update Date</th>
              <th>Check ID</th>
              <th>Payment Status</th>
              <th>Running Number</th>
              <th>Paid Amount</th>
            </tr>
          </thead>
          <tbody>
            {paidViews.map((view, index) => (
              <tr key={index}>
                <td>{view.cust_id}</td>
                <td>{view.upd_date}</td>
                <td>{view.checkID}</td>
                <td>{view.pay_status}</td>
                <td>{view.running_number}</td>
                <td>{view.paid_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={handlePreviousPage} className="btn btn-primary" disabled={page === 0}>Previous Page</button>
        <button onClick={handleNextPage} className="btn btn-primary">Next Page</button>
      </div>
    </div>
  );
}
