package cloud.app.project.server.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "debit_paid")
data class DebitPaid (
    @Id
    val id: Int,
    val payment_date: String,
    val check_due_date: String,
    val cust_id: String,
    val customer_name: String,
    val payment_method: String,
    val checkID: String,
    val running_number: String,
    val paid_amount: String,
    val pay_status: String,
    val accounting_id: String,
    val upd_date: String,
    val payment_type: String,
    val note: String
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