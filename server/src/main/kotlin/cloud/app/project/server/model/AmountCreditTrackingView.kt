package cloud.app.project.server.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.LocalDate

@Entity
@Table(name = "amount_credit_tracking_view")
data class AmountCreditTrackingView(
    @Id
    val ref_id: Int,
    val cust_id: String,
    val tracking_id: String,
    val upd_date: String,
    val transaction_form: String,
    val check_due_date: String,
    val status: String,
    val n_amount: Double,
    val accounting_id: String
)