export interface CreditViewApiResponse {
	id: number;
	acc_tracking: string;
	cust_id: string;
	accounting_id: string;
	detail: string;
	running_number: string;
	amount: number;
	upd_date: string;
	payment_date: string;
	payment_type: string;
	bank_account_id: string;
	check_id: string;
	check_due_date: string;
	statue: null | string;
	note: string;
	pay_stats: null | string;
	customer_name: string;
}
