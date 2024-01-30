package cloud.app.project.server.model


import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "acc_credit")
data class AccCredit(
    @Id
    val Id: Long,
    val accTracking: String,
    val custId: String,
    var accountingId: String,
    val detail: String,
    val runningNumber: String,
    val amount: Double,
    val updDate: LocalDate,
    val paymentDate: LocalDate,
    val paymentType: String,
    val bankAccountId: String,
    val checkId: String,
    @Column(nullable = false)
    val checkDueDate: LocalDate,
    val status: String,
    val note: String
)

