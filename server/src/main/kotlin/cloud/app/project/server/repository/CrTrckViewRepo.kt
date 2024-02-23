package cloud.app.project.server.repository

import cloud.app.project.server.model.CrTrckView
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CrTrckViewRepo: JpaRepository<CrTrckView, Int> {
}