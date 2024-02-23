package cloud.app.project.server.repository

import cloud.app.project.server.model.CreditView
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.time.LocalDate

@Repository
interface CreditViewRepo: JpaRepository<CreditView, Int> {

    @Query("""
        SELECT a FROM CreditView a WHERE SUBSTRING(a.upd_date, 1, 4) = :year
    """)
    fun findByYear(year: String): List<CreditView>
}