package cloud.app.project.server.repository

import cloud.app.project.server.model.CreditView
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CreditViewRepo: JpaRepository<CreditView, Int> {
}