package cloud.app.project.server.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.LocalDate

@Entity
@Table(name = "credit_paid")
data class CreditPaid (
    @Id
    val id: Int,
    val payment_date: String,
    val check_due_date: String,
    val cust_id: String,
    val customer_name: String,
    val payment_method: String,
    val checkID: String,
    val running_number: String,
    val paid_amount: Double,
    val pay_status: String,
    val accounting_id: String,
    val upd_date: String,
    val payment_type: String,
    val note: String
)