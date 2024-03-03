export type allowedStatus = "C" | "A" | "A*" | "A**";
export type PaymentType = "เงินสด" | "เช็ค" | "โอน" | "";
export type ContentType = 'creditor' | 'customer';

export interface CreditorListData {
	date: Date;
	weightingNo?: number;
	status: string;
	billNo: string;
	amount: number;
}

export interface CreditTrackingView {
	id: number;
	upd_date: string;
	pay_stats: string;
	running_number: string;
	partial_paid: number;
	balance_amount: number;
	cust_id: string;
}

export interface CreditView {
	id: number;
	acc_tracking: String;
	cust_id: String;
	accounting_id: String;
	detail: String;
	running_number: String;
	amount: number;
	upd_date: String;
	payment_date: String;
	payment_type: String;
	bank_account_id: String;
	check_id: String;
	check_due_date: String;
	statue: String;
	note: String;
	pay_stats: String;
	customer_name: String;
}
