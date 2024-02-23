package cloud.app.project.server.repository

import cloud.app.project.server.model.CreditPaid
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CreditPaidRepo: JpaRepository<CreditPaid, Int> {
}