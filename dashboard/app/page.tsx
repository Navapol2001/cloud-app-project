import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Loan Monitoring System 📡</h1>
          <p className="py-6">
            Choose to <b>login as</b>
          </p>
          <div className="flex-2 flex-col space-x-8 space-y-2">
            <Link href="/creditor">
              <button className="btn btn-secondary">Creditor</button>
            </Link>
            <Link href="/client">
              <button className="btn btn-primary">Client</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
