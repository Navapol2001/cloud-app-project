package cloud.app.project.server.repository

import cloud.app.project.server.model.CreditTempView
import cloud.app.project.server.model.CreditTrackingView
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CreditTempViewRepo: JpaRepository<CreditTempView, Int> {
}