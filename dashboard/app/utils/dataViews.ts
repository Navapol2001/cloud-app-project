export type allowedStatus = "C" | "A" | "A*" | "A**";

export interface CreditorListData {
	date: Date;
	weightingNo?: number;
	status: string;
	billNo: string;
	amount: number;
}