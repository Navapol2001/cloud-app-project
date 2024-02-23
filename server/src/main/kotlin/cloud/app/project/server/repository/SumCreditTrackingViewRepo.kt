package cloud.app.project.server.repository

import cloud.app.project.server.model.SumCreditTrackingView
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SumCreditTrackingViewRepo: JpaRepository<SumCreditTrackingView, Int> {
}