package cloud.app.project.server.repository

import cloud.app.project.server.model.CustomerNameView
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CustomerNameViewRepo: JpaRepository<CustomerNameView, String> {
}