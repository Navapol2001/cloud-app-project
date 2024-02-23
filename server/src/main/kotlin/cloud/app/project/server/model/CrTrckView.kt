﻿package cloud.app.project.server.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.LocalDate

@Entity
@Table(name = "cr_trck_v")
data class CrTrckView (
    @Id
    val id: Int,
    val acc_tracking: String,
    val cust_id: String,
    val accounting_id: String,
    val detail: String,
    val running_number: String,
    val amount: Double,
    val upd_date: String,
    val payment_date: String,
    val payment_type: String,
    val bank_account_id: String,
    val check_id: String,
    val check_due_date: String,
    val statue: String,
    val note: String,
    val pay_stats: String,
    val customer_name: String,
    val _payment_date: String,
    val partial_paid: Double,
    val balance_amount: Double
)