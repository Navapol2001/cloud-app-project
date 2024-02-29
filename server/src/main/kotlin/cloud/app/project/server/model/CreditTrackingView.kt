package cloud.app.project.server.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "credit_tracking_view")
data class CreditTrackingView (
    @Id
    val id: Int,
    val cust_id: String,
    val customer_name: String,
    val upd_date: String,
    val detail: String,
    val pay_stats: String,
    val running_number: String,
    val _payment_date: String,
    val partial_paid: Double,
    val balance_amount: Double,
    val accounting_id: String,
    val bank_account_id: String,
    val payment_type: String,
    val check_id: String,
    val check_due_date: String,
    val statue: String,
    val note: String,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || javaClass != other.javaClass) return false
        other as CreditView

        return id == other.id
    }

    override fun hashCode(): Int = id.hashCode()

    @Override
    override fun toString(): String {
        return this::class.simpleName + "(id = $id )"
    }
}