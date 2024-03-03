export type allowedStatus = "C" | "A" | "A*" | "A**";

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
