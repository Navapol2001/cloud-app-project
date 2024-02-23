package cloud.app.project.server.repository

import cloud.app.project.server.model.AmountCreditTrackingView
import org.springframework.stereotype.Repository
import org.springframework.data.jpa.repository.JpaRepository

@Repository
interface AmountCreditTrackingViewRepo: JpaRepository<AmountCreditTrackingView, Int> {
}