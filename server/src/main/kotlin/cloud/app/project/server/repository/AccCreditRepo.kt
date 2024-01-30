package cloud.app.project.server.repository

import cloud.app.project.server.model.AccCredit
import org.springframework.stereotype.Repository
import org.springframework.data.jpa.repository.JpaRepository

@Repository
interface AccCreditRepo: JpaRepository<AccCredit, Long> {

}